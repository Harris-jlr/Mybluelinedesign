// netlify/functions/request-handler.js

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  // Example: Save or log booking request
  console.log('Received booking:', data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Booking received!' }),
  };
};
