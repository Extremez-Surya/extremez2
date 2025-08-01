import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, budget, timeline, services } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content for you (the recipient)
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🚀 New Project Inquiry</h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Someone wants to work with you!</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0;"><strong style="color: #667eea;">👤 Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #667eea;">📧 Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #667eea;">📋 Subject:</strong> ${subject}</p>
          </div>

          ${budget ? `<p style="margin: 8px 0;"><strong style="color: #667eea;">💰 Budget:</strong> ${budget}</p>` : ''}
          ${timeline ? `<p style="margin: 8px 0;"><strong style="color: #667eea;">⏰ Timeline:</strong> ${timeline}</p>` : ''}
          
          ${services && services.length > 0 ? `
            <div style="margin: 20px 0;">
              <strong style="color: #667eea;">🛠️ Services Needed:</strong>
              <ul style="margin: 10px 0; padding-left: 20px;">
                ${services.map(service => `<li style="margin: 5px 0; color: #555;">${service}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">💬 Message:</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #4c51bf; font-size: 14px;">
              <strong>📅 Received:</strong> ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
          <p>This email was sent from your portfolio contact form</p>
        </div>
      </div>
    `;

    // Email content for the user (auto-reply)
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Thank You!</h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Your message has been received</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Hi ${name}! 👋</h2>
          
          <p style="color: #555; line-height: 1.6; margin: 20px 0;">
            Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I'm excited to learn more about your project.
          </p>

          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; border-left: 4px solid #0288d1; margin: 20px 0;">
            <h3 style="color: #0277bd; margin: 0 0 10px 0; font-size: 18px;">⚡ What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #555;">
              <li style="margin: 8px 0;">I'll review your project details carefully</li>
              <li style="margin: 8px 0;">You'll receive a detailed response within <strong>24 hours</strong></li>
              <li style="margin: 8px 0;">We can schedule a call to discuss your vision</li>
              <li style="margin: 8px 0;">I'll provide a customized proposal for your project</li>
            </ul>
          </div>

          <div style="background: #f3e5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #9c27b0; margin: 20px 0;">
            <h3 style="color: #7b1fa2; margin: 0 0 10px 0; font-size: 18px;">📋 Your Message Summary:</h3>
            <p style="margin: 5px 0; color: #555;"><strong>Subject:</strong> ${subject}</p>
            ${budget ? `<p style="margin: 5px 0; color: #555;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p style="margin: 5px 0; color: #555;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
            ${services && services.length > 0 ? `<p style="margin: 5px 0; color: #555;"><strong>Services:</strong> ${services.join(', ')}</p>` : ''}
          </div>

          <p style="color: #555; line-height: 1.6; margin: 20px 0;">
            In the meantime, feel free to check out my <a href="${process.env.NEXT_PUBLIC_SITE_URL}/projects" style="color: #667eea; text-decoration: none;">recent projects</a> 
            or connect with me on <a href="https://www.linkedin.com/in/the-extremez/" style="color: #667eea; text-decoration: none;">LinkedIn</a>.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${process.env.GMAIL_USER}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block;">
              📧 Reply to this email
            </a>
          </div>

          <p style="color: #555; line-height: 1.6; margin: 20px 0;">
            Looking forward to working together! 🚀
          </p>

          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
            <p style="margin: 0; color: #888; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #667eea;">Vinay Kumar</strong><br>
              Full Stack Developer
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This is an automated response. Please don't reply to this email directly.</p>
        </div>
      </div>
    `;

    // Send email to you (admin)
    let adminEmailResult, userEmailResult;
    
    try {
      adminEmailResult = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `🚀 New Project Inquiry: ${subject}`,
        html: adminEmailContent,
        replyTo: email,
      });
      console.log('Admin email sent successfully:', adminEmailResult.messageId);
    } catch (adminError) {
      console.error('Failed to send admin email:', adminError);
      throw new Error(`Admin email failed: ${adminError.message}`);
    }

    // Send auto-reply to user
    try {
      userEmailResult = await transporter.sendMail({
        from: `"Vinay Kumar" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thank you for your message - I'll respond within 24 hours!`,
        html: userEmailContent,
      });
      console.log('User email sent successfully:', userEmailResult.messageId);
    } catch (userError) {
      console.error('Failed to send user email:', userError);
      // Don't throw error here - admin email already sent
      console.warn('User email failed but admin email was sent successfully');
    }

    return NextResponse.json(
      { 
        message: userEmailResult ? 'Both emails sent successfully' : 'Admin email sent, user email failed',
        success: true,
        adminEmailId: adminEmailResult.messageId,
        userEmailId: userEmailResult?.messageId || null,
        userEmailFailed: !userEmailResult
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

