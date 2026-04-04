import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const currentYear = new Date().getFullYear();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dbzislive7@gmail.com',
        pass: 'olkv itin onus crtw',
      },
    });

    const mailOptions = {
      from: '"Axpert Cera" <dbzislive7@gmail.com>',
      to: email,
      subject: 'Axpert Cera | Your Requested Product Catalog',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f7f7f5; }
            .wrapper { width: 100%; table-layout: fixed; background-color: #f7f7f5; padding-bottom: 40px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0de; }
            .header { background-color: #1a1a1a; padding: 40px 20px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; letter-spacing: 0.2em; font-weight: bold; text-transform: uppercase; }
            .header span { font-size: 10px; letter-spacing: 0.5em; color: rgba(255,255,255,0.4); text-transform: uppercase; display: block; margin-top: 8px; }
            .content { padding: 40px 30px; }
            .label { color: #C4A484; font-family: 'Helvetica Neue', Helvetica, Sans-Serif; font-weight: bold; text-transform: uppercase; font-size: 10px; letter-spacing: 0.3em; display: block; margin-bottom: 15px; }
            h2 { font-size: 28px; color: #1a1a1a; margin-top: 0; font-weight: normal; line-height: 1.2; margin-bottom: 25px; }
            p { font-size: 15px; color: #555; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-bottom: 20px; }
            .cta-container { text-align: center; margin: 35px 0; }
            .cta-button { 
              display: inline-block; 
              background-color: #1a1a1a; 
              color: #ffffff !important; 
              padding: 18px 40px; 
              text-decoration: none; 
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-weight: bold; 
              font-size: 11px; 
              text-transform: uppercase; 
              letter-spacing: 0.2em; 
              transition: background-color 0.3s;
            }
            .list-title { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #1a1a1a; margin-top: 30px; margin-bottom: 12px; }
            .feature-list { list-style: none; padding: 0; margin: 0 0 35px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
            .feature-list li { padding: 10px 0; border-bottom: 1px solid #f0f0ee; font-size: 13px; color: #666; }
            .footer { background-color: #fafaf9; padding: 40px 30px; border-top: 1px solid #f0f0ee; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
            .signature { margin-bottom: 25px; }
            .signature-name { color: #1a1a1a; font-weight: bold; font-size: 16px; display: block; }
            .signature-title { color: #888; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
            .contact-info { margin-top: 15px; font-style: normal; font-size: 12px; color: #666; line-height: 1.8; }
            .contact-link { color: #C4A484; text-decoration: none; font-weight: 500; }
            .copyright { font-size: 9px; color: #bbb; margin-top: 30px; text-align: center; letter-spacing: 0.1em; text-transform: uppercase; }
            @media screen and (max-width: 600px) {
              .content { padding: 30px 20px; }
              h2 { font-size: 24px; }
              .cta-button { padding: 15px 30px; width: 80%; }
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h1>AXPERT</h1>
                <span>CERA</span>
              </div>
              <div class="content">
                <span class="label">Exquisite Craftsmanship</span>
                <h2>Premium Sanitaryware Collection</h2>
                <p>Hello,</p>
                <p>Thank you for expressing interest in Axpert Cera. As requested, we are pleased to provide you with our latest product catalog featuring our masterfully crafted ceramic collection.</p>
                
                <div class="cta-container">
                  <a href="https://www.axpertcera.com/catalog.pdf" class="cta-button">Download Catalog PDF</a>
                </div>

                <div class="list-title">Inside our ${currentYear} Collection:</div>
                <ul class="feature-list">
                  <li>Designer One Piece Basins & Pedestal Sets</li>
                  <li>Modern One Piece Toilets & Wall Hung Closets</li>
                  <li>Luxury Table Top & Wall Mount Basins</li>
                  <li>Artistic Vitrosa Stargold & Polo Series</li>
                  <li>Commercial Pan & Urinal Solutions</li>
                </ul>

                <p>For inquiries regarding dealership opportunities, pricing, or technical specifications, our team is at your disposal.</p>
              </div>
              <div class="footer">
                <div class="signature">
                  <span class="signature-name">Ravi Kanzariya</span>
                  <span class="signature-title">Axpert Cera | Premium Sanitaryware</span>
                </div>
                <div class="contact-info">
                  📍 Gugliyana, Near Bus Stop, Than Road, Than,<br>
                  SurendraNagar - Gujarat 363530<br>
                  📞 Phone: <a href="tel:+919429339212" class="contact-link">+91 94293 39212</a><br>
                  ✉️ Email: <a href="mailto:info@axpertcera.com" class="contact-link">info@axpertcera.com</a><br>
                  💬 WhatsApp: <a href="https://wa.me/919429339212" class="contact-link">Direct Inquiry</a>
                </div>
                <p class="copyright">
                  &copy; ${currentYear} Axpert Cera. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Catalog sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send catalog' }, { status: 500 });
  }
}
