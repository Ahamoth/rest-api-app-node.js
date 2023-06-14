const Mailjet = require('node-mailjet');

require("dotenv").config();

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
);

const sendEmail = async (data) => {
  const email = { ...data, from: "Ahamoth@ukr.net" };
  await mailjet.send(email);
  return true;
};

module.exports = sendEmail;