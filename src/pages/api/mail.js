const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

  await mail.send({
    from: 'Rouge@rougeumea.se',
    replyTo: 'filip.lapvetelainen@gmail.com',
    templateId: 'd-2884959049fc4ea28a77f81cbe3d742b',
    personalizations: [
        {
            to: 'amanda.carlund@gmail.com',
            dynamicTemplateData: {
                eventName: "MYRA GRANBERG",
                ticketUrl: 'https://www.rougeumea.se/tickets/myra-granberg-l_oe_rdag-25-feb/F8824A7DDDE4493985DCC1761E1CE829',
                randomNumber: '45612',
                realName: "MYRA GRANBERG"
            },
        },
    ],
  });

  res.status(200).json({ status: 'Ok' });

}



