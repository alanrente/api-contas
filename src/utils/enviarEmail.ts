// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail');

export async function enviarEmail(texto: string) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'alan.rente@gmail.com',
    from: 'cadastros.alan@gmail.com',
    subject: 'Api Contas Email',
    text: texto,
  };

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email enviado com sucesso!');
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
