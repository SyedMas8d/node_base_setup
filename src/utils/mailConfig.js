const nodemailer = require("nodemailer");
const mailerhbs = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    logger: false,
    debug: true,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
}, {
    from: `${process.env.SMTP_FROM}`
});

var options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: '../helpers/mail/templates',
        partialsDir: '../helpers/mail/templates', // location of your subtemplates header, footer etc
        defaultLayout: null
    },
    viewPath: 'src/helpers/mail/templates',
    extName: '.hbs'
};

const sendMail = async (to, subject, html, context = null) => {
    try {
        if (context) {
            transport.use('compile', mailerhbs(options));

            return transport.sendMail({
                to: to,
                template: html,
                subject: subject,
                context: context,
                headers: {
                    "x-priority": "1",
                    "x-msmail-priority": "High",
                    importance: "high"
                }
            });
        }
        else {
            return transport.sendMail({
                to: to,
                subject: subject,
                html: html,
                headers: {
                    "x-priority": "1",
                    "x-msmail-priority": "High",
                    importance: "high"
                }
            });
        }
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    sendMail
}