const axios = require('axios');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // Obtén el enlace del formulario de Google desde la variable de entorno
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  await axios.post(scriptUrl, {
    name: data.name,
    email: data.email,
    message: data.message
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Correo enviado con éxito' })
  };
};