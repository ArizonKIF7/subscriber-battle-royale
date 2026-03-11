# Subscriber Battle Royale

## Setup Instructions
1. Clone the repository:  
   `git clone https://github.com/ArizonKIF7/subscriber-battle-royale.git`
2. Navigate to the project directory:  
   `cd subscriber-battle-royale`
3. Install dependencies:  
   `npm install`

## Features
- Track daily subscriber counts
- Monitor YouTube videos and channels
- Generate insights and reports

## Usage Guide
1. Start the application:  
   `node index.js`
2. Follow the prompts in the console to input your YouTube Channel ID.

## YouTube API Configuration
1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project.
3. Enable the YouTube Data API v3 for your project.
4. Create API credentials (API key or OAuth 2.0 client IDs).
5. Include your credentials in the project configuration file.

## Daily Recording Automation Instructions
1. Set up a cron job or use task scheduling software.
2. Schedule the script to run daily at your preferred time.
   Example cron job for every day at 6 AM:  
   `0 6 * * * /usr/bin/node /path/to/subscriber-battle-royale/index.js`
