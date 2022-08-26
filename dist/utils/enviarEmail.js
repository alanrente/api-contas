"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarEmail = void 0;
const sgMail = require('@sendgrid/mail');
async function enviarEmail(texto) {
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
exports.enviarEmail = enviarEmail;
//# sourceMappingURL=enviarEmail.js.map