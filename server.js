require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, countryInput, phoneInput, messageinput  } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your email address stored in an environment variable
            pass: process.env.EMAIL_PASSWORD // Your email password stored in an environment variable
    }
    });

    // Setup email data
    let mailOptions = {
        from: email,
        to: process.env.EMAIL, // Replace with your email address
        subject: `New Contact Us Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCountry: ${countryInput}\nPhone-Number: ${phoneInput}\nMessage: ${messageinput}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Failed to send message.');
        }
        res.status(200).send('Message sent successfully!');
    });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
