import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';
import * as line from '@line/bot-sdk';
import fetch from 'node-fetch';
import linebot from 'linebot';
import BodyParser from 'body-parser';

dotenv.config();

// open ai
const OPENAI_API_KEY="OPENAI_API_KEY";
const configuration = new Configuration({
  organization: "organization",
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// line
const bot = linebot({
  channelId: "channelId",
  channelSecret: "channelSecret",
  channelAccessToken: "channelAccessToken"
});
const linebotParser = bot.parser();


const port = 5000;
const app = express();

app.post('/linewebhook', linebotParser);

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {

  res.status(200).send({
    message: 'hello from index'
  });
})

let userInfoData;

app.post('/test', async (req, res) => {

  const prompt = req.body.prompt;
  userInfoData = prompt;

  // console.log('OPENAI_API_KEY = '+ OPENAI_API_KEY)
  // try {
  //   const prompt = req.body.prompt
  //   const response = await openai.createCompletion({
  //     model: 'text-davinci-003',
  //     prompt: 'Hi, how are you?',
  //     temperature: 0,
  //     max_tokens: 20,
  //   });

  //   res.status(200).send({
  //     bot: response.data.choices[0].text
  //   })
  // } catch (error) {
  //   console.log('[server.js] error = ' + error);

  //   res.status(500).send({ error });
  // }
})

app.post('/broadcast', async () => {
  bot.broadcast(req.body.message).then(() => {
    res.send('broadcast ok');
  }).catch(function (error) {
    res.send('broadcast fail');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:5000`);
})

bot.on('message', function (event) {
  // get user message from `event.message.text`
  // reply same message
  var replyMsg = `${event.message.text}`;
  var giveMeData = `${JSON.stringify(userInfoData)}}`;
  console.log(replyMsg);
  event.reply(giveMeData).then(function (data) {
    console.log('ok')
  }).catch(function (error) {
    console.error(error)
  });
});
