const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_REQUEST_DB;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: data.name || 'Unnamed' } }],
        },
        Email: {
          email: data.email || '',
        },
        LinkedIn: {
          url: data.linkedin || '',
        },
        'Est. Availability': {
          rich_text: [{ text: { content: data.availability || '' } }],
        },
        'Area of Interest': {
          multi_select: (data.interests || []).map((tag) => ({ name: tag })),
        },
        Skills: {
          multi_select: (data.skills || []).map((skill) => ({ name: skill })),
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Request saved to Notion' }),
    };
  } catch (err) {
    console.error('Notion Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Failed to save request' }),
    };
  }
};
