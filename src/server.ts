import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

const client = new Client({});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});
client.initialize();
