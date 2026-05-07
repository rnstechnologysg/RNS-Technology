import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const { EMAIL_USER, EMAIL_PASS } = process.env;

// Create Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

/**
 * Send an email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @returns {Promise<Object>} - Nodemailer info object
 */
export const sendMail = async ({ to, subject, html }) => {
    try {
        if (!EMAIL_USER || !EMAIL_PASS) {
            throw new Error('Missing email credentials in .env');
        }

        const mailOptions = {
            from: `"RNS Technology Team" <${EMAIL_USER}>`,
            to,
            subject,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
