const express = require("express");
const router = express.Router();
const formData = require("form-data");
const Mailgun = require("mailgun.js");

//Utilisation de MailGun
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "Laurent REUZE",
  key: process.env.MAILGUN_API_KEY,
});

const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    // console.log(client);
    const { firstname, lastname, email, message } = req.body;

    //Création de modèle de message
    const messageModel = {
      from: `${firstname} ${lastname} <${email}>`,
      to: "contact@carplib.com",
      subject: "Hello",
      text: message,
    };

    // Envoi des informations à mailGun
    const response = await client.messages.create(
      process.env.MAILGUN_DOMAIN,
      messageModel
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = router;
