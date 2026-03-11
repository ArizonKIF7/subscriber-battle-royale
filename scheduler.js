const schedule = require('node-schedule');

// Schedule the battle simulation to run every evening at 7 PM UTC
const job = schedule.scheduleJob('0 19 * * *', function(){
    console.log('Running battle simulation...');
    // Call your battle simulation function here
});

console.log('Scheduler initialized.');