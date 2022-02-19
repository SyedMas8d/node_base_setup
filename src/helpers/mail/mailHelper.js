const { sendMail } = require('../../utils/mailConfig');
const mailTemplate = require('./content');

class MailHelper {

    async sendEmail(templateName, email, params) {
        const mailConfig = await mailTemplate[templateName](params);

        const context = {
            ...mailConfig.context
        };

        return await sendMail(email, mailConfig.subject, templateName, context);
    }
}

module.exports = new MailHelper();