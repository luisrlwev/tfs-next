import nodemailer from 'nodemailer';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  try {

    // Parsea la solicitud que incluye el archivo adjunto
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm();
        form.maxFileSize = 10 * 1024 * 1024; // Por ejemplo, 10 MB
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
    });

    // Extrae los campos y archivos de la solicitud
    const { fields, files } = data;
    console.log(fields);
    console.log(files);
    const { nombre, email, tel, experiencia, raices, idioma, sucursal, mensaje, fechaEnvio, horaEnvio, paginaEnvio } = fields;
    const curriculum = files.curriculum; // Suponiendo que el campo del archivo se llama 'curriculum'

  // Configura el transporte de Nodemailer
  let transporter = nodemailer.createTransport({
    // Configuración del transporte
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo
    pass: process.env.EMAIL_PASSWORD, // Tu contraseña de correo
  },
  });

    // Define las opciones del correo
    let mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      cc: `${process.env.EMAIL_CC},talentohumano@tulumfromskyrealtors.com`, // Puedes añadir más correos separados por comas
      bcc: process.env.EMAIL_BCC, // Puedes añadir más correos separados por comas
      subject: "Formulario - Reclutamiento",
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${tel}\n¿Cuenta con experiencia en bienes raíces?: ${raices}\nNivel de Inglés: ${idioma}\nSucursal a la que aplica: ${sucursal}\nMensaje: ${mensaje}\n----------\nFecha de envio: ${fechaEnvio}\nHora de envio: ${horaEnvio}\nPágina de envio: ${paginaEnvio}`,
    };

    // Asumiendo que files.curriculum es un arreglo y queremos el primer archivo
    const curriculumFile = files.curriculum && files.curriculum.length > 0 ? files.curriculum[0] : null;

    if (curriculumFile && curriculumFile.originalFilename && curriculumFile.filepath) {
      mailOptions.attachments = [
        {
          filename: curriculumFile.originalFilename,
          path: curriculumFile.filepath,
        },
      ];
    }

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo: ", error);
      return res.status(500).json({ error: "Error al enviar el correo", details: error.message });
    }
    res.status(200).json({ message: "Correo enviado con éxito" });
  });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default handler;
