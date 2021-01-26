const dotenv = require("dotenv")
const { App } = require('@slack/bolt');
dotenv.config();

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});
  
  
app.event('app_home_opened', ({ event, say }) => {  
    say('Helo');
});
  
  
// Start your app
(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();