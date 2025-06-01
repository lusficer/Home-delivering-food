const nodemailer = require("nodemailer");
require("dotenv").config();

// Cấu hình transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Hàm gửi email
const sendOrderConfirmationEmail = async (toEmail, orderDetails) => {
  const {
    order_id,
    total,
    recipient_name,
    recipient_phone,
    recipient_address,
    items,
  } = orderDetails;

  // Tạo bảng HTML cho danh sách món
  const itemsHtml = items
    .map(
      (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${
            item.name
          }</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${
            item.quantity
          }</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">$${
            item.price
          }</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">$${
            item.price * item.quantity
          }</td>
        </tr>
      `
    )
    .join("");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: `Order Confirmation - Order #${order_id}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background-color: #F9B233;
            color: white;
            padding: 10px;
            border-radius: 10px 10px 0 0;
          }
          .content {
            padding: 20px;
          }
          .order-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          .order-table th {
            background-color: #F9B233;
            color: white;
            padding: 10px;
            text-align: left;
          }
          .order-table td, .order-table th {
            border: 1px solid #ddd;
          }
          .footer {
            text-align: center;
            color: #777;
            margin-top: 20px;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Order Confirmation</h2>
          </div>
          <div class="content">
            <p>Dear <strong>${recipient_name}</strong>,</p>
            <p>Thank you for your order! Below are the details:</p>
            <table class="order-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            <p><strong>Total:</strong> $${total.toFixed(2)}</p>
            <p><strong>Recipient Name:</strong> ${recipient_name}</p>
            <p><strong>Phone:</strong> ${recipient_phone}</p>
            <p><strong>Address:</strong> ${recipient_address}</p>
            <p>We will process your order soon. If you have any questions, feel free to contact us at <a href="mailto:nvblastsupport@gmail.com">support@nvblastsupport.com</a>.</p>
          </div>
          <div class="footer">
            <p>© 2025 Your Restaurant. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${toEmail} for order #${order_id}`);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Failed to send email to ${toEmail}: ${error.message}`);
  }
};

module.exports = { sendOrderConfirmationEmail };
