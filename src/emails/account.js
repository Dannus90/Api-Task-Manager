const sgMail = require("@sendgrid/mail");

//You need a bought email account to send emailaddresses correctly.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "persson.daniel.1990@gmail.com",
        subject: "Welcome to this application!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
        html: `<h1>Welcome to this app, ${name}!<h1>
        <p>Let us know what you enjoy about coding<p>
        <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" height"200px" width="200px" />`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "persson.daniel.1990@gmail.com",
        subject:
            "Thank you for using our services and welcome again in the future",
        text: `Goodbye ${name} and welcome once again in the future. We would appreciate feedback on why you choose to quit your subscription.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};
