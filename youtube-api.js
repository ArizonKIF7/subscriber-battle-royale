const { google } = require('googleapis');

// Set up the OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
    'YOUR_CLIENT_ID', // Replace with your own client ID
    'YOUR_CLIENT_SECRET', // Replace with your own client secret
    'YOUR_REDIRECT_URI' // Replace with your own redirect URI
);

// Function to generate an authentication URL
function generateAuthUrl() {
    const scopes = ['https://www.googleapis.com/auth/youtube.readonly'];
    return oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
}

// Function to fetch subscriber data
async function fetchSubscriberData(accessToken) {
    oAuth2Client.setCredentials({ access_token: accessToken });
    const youtube = google.youtube({ version: 'v3', auth: oAuth2Client });

    try {
        const response = await youtube.channels.list({
            part: 'snippet,contentDetails',
            mine: true,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching subscriber data:', error);
        throw error;
    }
}

module.exports = { generateAuthUrl, fetchSubscriberData };