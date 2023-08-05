const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const Usuarios = require('../models/Usuarios');

/** send mail from testing account */
const signup = async (req, res) => {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}

/** send mail from real gmail account */
const getbill = (correo, res) => {

    

    let config = {
        service : 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "New User",
            intro: "Welcome to GiveTo",
            table : {
                data : [
                    {
                        agradecimiento: "Gracias por crear una cuenta con nosotros y esperamos no se arrepienta, ya que queremos que vivas una experiencia gratificante para nosotros"
                    }
                ]
            },
            outro: "Cualquier duda contactar al gmail el cual envio esto"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : process.env.EMAIL,
        to : correo,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        
        return console.log('funco');
    }).catch(error => {
        return console.log(error);
    })

    // res.status(201).json("getBill Successfully...!");
}

const getDataCompra = (correo, res) => {

    

    let config = {
        service : 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "ADMIN",
            intro: "Un cliente Realizo un pedido",
            table : {
                data : [
                    {
                        indicaciones: `has una revision a la peticion del cliente ${correo} y en base a eso has el mejor regalo posible y contactate con el si tienes alguna duda sobre la elaboracion del mismo`
                    }
                ]
            },
            outro: "Cualquier duda contactar al gmail el cual envio esto"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : correo,
        to : process.env.EMAIL,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        
        return console.log('funco');
    }).catch(error => {
        return console.log(error);
    })

    // res.status(201).json("getBill Successfully...!");
}


module.exports = {
    signup,
    getbill,
    getDataCompra
}