import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  const { nombre, email, tel, mensaje, condiciones } = req.body;

  // Configura el transporte de Nodemailer
  let transporter = nodemailer.createTransport({
    // Configuración del transporte (usar SMTP, por ejemplo)
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo
    pass: process.env.EMAIL_PASSWORD, // Tu contraseña de correo
  },
  });

  // Define las opciones del correo
  let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Formulario TFS',
    text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${tel}\nMensaje: ${mensaje}\nCondiciones Aceptadas: ${condiciones}`,
    // Puedes usar `html` para formatear tu mensaje si lo prefieres
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error al enviar el correo: " + error.message);
    }
    res.status(200).send("Correo enviado con éxito");
  });
};

export default handler;
