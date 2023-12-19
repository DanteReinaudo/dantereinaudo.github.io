const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu-correo@gmail.com', // Coloca tu correo electrónico
      pass: 'tu-contraseña'      // Coloca tu contraseña de aplicación (no la contraseña principal)
    }
  });

  const mailOptions = {
    from: 'tu-correo@gmail.com',  // Coloca tu correo electrónico
    to: 'tu-correo-destino@gmail.com',  // Coloca el correo de destino
    subject: 'Nuevo mensaje desde el formulario de contacto',
    text: `Nombre: ${data.nombre}\nCorreo electrónico: ${data.email}\nMensaje: ${data.mensaje}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado con éxito' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo' })
    };
  }
};