import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendMail } from './mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'data', 'content.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Handle form data
app.use(express.static(path.join(__dirname, 'public')));

// Dedicated route for Manpower Request
app.post('/api/request-manpower', async (req, res) => {
    console.log('Manpower Request received:', req.body);
    const data = req.body;

    // Destructure fields
    const {
        companyName, uen, contactPerson, designation,
        email, mobile, projectType, preference,
        headcount, duration, referral, requirements
    } = data;

    // Basic Validation
    if (!companyName || !contactPerson || !email) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // 1. Send Admin Notification
        const adminHtml = `
            <h3>New Manpower Request Received</h3>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companyName}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>UEN</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${uen || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Contact Person</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${contactPerson}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Designation</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${designation}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Mobile</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Project Type</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${projectType}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Preference</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${preference}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Headcount</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${headcount}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Duration</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${duration}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Referral</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${referral}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Requirements</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${requirements}</td></tr>
            </table>
        `;

        await sendMail({
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Default to sender if receiver not set
            subject: `New Manpower Request - ${companyName}`,
            html: adminHtml
        });

        // 2. Send Auto-Reply to User
        const userHtml = `
            <h3>Hi ${contactPerson},</h3>
            <p>Thank you for submitting your manpower request for <strong>${companyName}</strong>.</p>
            <p>Our team is reviewing your requirements for the <strong>${projectType}</strong> project and will get back to you within 24 hours.</p>
            <br>
            <p>Best Regards,<br>RNS Technology Team</p>
        `;

        await sendMail({
            to: email,
            subject: `We have received your request - RNS Technology`,
            html: userHtml
        });

        res.json({ success: true, message: 'Request submitted successfully. Confirmation email sent.' });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to process request. Please try again later.' });
    }
});

// Route for simple contact form (backward compatibility if needed)
app.post('/api/contact', async (req, res) => {
    // ... similar implementation if needed ... 
    res.json({ success: true, message: 'Contact form received' });
});

// Handle POST directly to success page (in case of unexpected POST)
app.post(['/success.html', '/thank-you.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thank-you.html'));
});

// Handle Local Form Submissions (Catch-all for any HTML form POST)
app.post('*', (req, res, next) => {
    if (req.path.endsWith('.html') || req.path === '/') {
        return res.redirect('/success.html');
    }
    next();
});

// Get Content
app.get('/api/content', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
