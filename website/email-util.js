const emailConfig = require('./email-config')()
const mailgun = require('mailgun-js')(emailConfig)
exports.sendEmail = (message, sender) =>
  new Promise((resolve, reject) => {
    const data = {
      from: `Knakwortel Website formulier <${sender}>`,
      to: 'peter@petervandijk.net',
      subject: 'message from website',
      text: message,
      inline: message,
      html: message,
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    })
  })