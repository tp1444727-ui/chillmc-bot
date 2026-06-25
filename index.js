const { Client, GatewayIntentBits } = require('discord.js');
const util = require('minecraft-server-util');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log("ChillMC bot đã online!");
});

client.on('messageCreate', async (message) => {

  if (message.content === '!ip') {
    message.reply(
`🌐 CHILLCMC SERVER
🖥️ Java: chillmc.ultramc.co:19523
📱 Bedrock: chillmc.ultramc.co
🔌 Port: 19523`
    );
  }

  if (message.content === '!ping') {
    try {
      const res = await util.status('chillmc.ultramc.co', 19523);

      const ping = res.roundTripLatency || res.latency || "N/A";

      message.reply(
`📊 SERVER STATUS
🏓 Ping: ${ping} ms
👥 Online: ${res.players.online}/36`
      );

    } catch (err) {
      message.reply('❌ Server offline hoặc sai IP');
    }
  }
});

client.login('MTUxOTIzMzc4NDA0ODkxMDM5Ng.GkKJK7.QqZGwWkiz7SHScFQzUKUP6Yi-ocGugdtgGY1VI');