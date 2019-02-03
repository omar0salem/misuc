const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




const deve = ['519312154558464021'];
const adminp = "-";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!deve.includes(message.author.id)) return;
    
if (message.content.startsWith(adminp + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminp + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminp + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminp + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/BlueGamer");
    message.channel.sendMessage(`**Done ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هن

