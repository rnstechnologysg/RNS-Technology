import { sendMail } from './mailer.js';
import dotenv from 'dotenv';
dotenv.config();

const testEmail = async () => {
    try {
        const recipient = process.env.EMAIL_USER; // Send to self for testing

        if (!recipient || recipient.includes('yourgmail')) {
            console.warn('⚠️  Please update .env with real credentials before testing.');
            return;
        }

        console.log('Sending test email to:', recipient);

        const hrAppointmentTemplate = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #2EBF66; text-align: center;">Interview Confirmation</h2>
                <p>Dear Candidate,</p>
                <p>We are pleased to confirm your interview appointment with <strong>RNS Technology</strong>.</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 5px 0;"><strong>📅 Date:</strong> Monday, 15th Jan 2025</p>
                    <p style="margin: 5px 0;"><strong>⏰ Time:</strong> 10:00 AM (SGT)</p>
                    <p style="margin: 5px 0;"><strong>📍 Location:</strong> 123 Robinson Road, #10-01, Singapore 068913</p>
                </div>

                <p>Please bring your IC and relevant certificates.</p>
                <br>
                <p>Best Regards,<br><strong>HR Team</strong><br>RNS Technology Pte Ltd</p>
            </div>
        `;

        await sendMail({
            to: recipient,
            subject: 'Test: Interview Confirmation - RNS Technology',
            html: hrAppointmentTemplate
        });

        console.log('✅ Test email sent successfully!');

    } catch (error) {
        console.error('❌ Failed to send test email:', error.message);
    }
};

testEmail();
