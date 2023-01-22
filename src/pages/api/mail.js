const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

  await mail.send({
    from: 'Rouge@rougeumea.se',
    replyTo: 'filip.lapvetelainen@gmail.com',
    templateId: 'd-2884959049fc4ea28a77f81cbe3d742b',
    personalizations: [
        {
            to: 'emma2002olo@gmail.com',
            dynamicTemplateData: {
                eventName: "DE VET DU",
                ticketUrl: 'https://www.rougeumea.se/tickets/devetdu-fredag-10-feb/EA837B0BED9241A8B9CF751CD873963E',
                randomNumber: '45612',
            },
        },
    ],
  });

  res.status(200).json({ status: 'Ok' });

}



