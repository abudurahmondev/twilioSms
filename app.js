const express = require('express')
const twilio = require('twilio')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

async function sendSms(){
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

    try {
        const message = await client.messages.create({
            body: 'This is sms',
            from: '',
            to: process.env.PHONE_NUMBER
        })
        console.log(message.sid, "Message sent");
    } catch (error) {
        console.error(error, 'Message not sent')
    }
}

sendSms()

app.listen(5000, () => console.log(`Server is on`))
