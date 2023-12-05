const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendemail', async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'surajpaliwal.developer@gmail.com',
        pass: 'vemodxldutyyguuh',
      },
    });

    const mailOptions = {
      from: 'surajpaliwal.developer@gmail.com',
      to: 'surajpaliwal.developer@gmail.com',
      subject: subject,
      html: `<p>Recruiter Email: ${email}</p><p>Recruiter Message: ${message}</p>`,
    };

    // Use await to make sure sending the email is completed before responding
    await transporter.sendMail(mailOptions);
    
    // Send a success response to the client
    res.status(200).send('Email sent successfully');
  } catch (error) {
    // Send an error response to the client
    res.status(500).json({ message: error.stack });
  }
});

module.exports = router;