const Discord = require('discord.js');

const client = new Discord.Client();

const { Client, Attachment } = require('discord.js');
//const for prefix
const prefix = "!"
//maxplaayers 
let maxplayers = 8
let playing = []
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//
client.on('message', message => {
  if(!message.content.startsWith(prefix)) return;



avacommands = ['!startpug:START a game','!join: JOIN current match','!leave: LEAVE current match','!endpug: END/CLEAR existing match','!changeteamsizeX where X is(1-8): change TEAMSIZE, default is 4 (coming soon)','!settime: add a text field that displays a scheduled TIME for the match. (coming soon)']
  if (message.content === '!matchbothelp') {
	    let commandlist = new Discord.RichEmbed()	
			.addField('QWTF Matchbot Available Commands',avacommands, true)
		message.channel.sendEmbed(commandlist)		

  // Send "pong" to the same channel
  return;
  }
  if (message.content === '!endpug') {
  // Send "pong" to the same channel
  playing = [];
  message.channel.send('Match has been ended, !startpug to start a new match.');
  return;
  }
  //Importantly if the message is "Bent"
  if (message.content === '!bent') {
    // Send "pong" to the same channel
    message.channel.send('Bent is a moist cunt');
  return;
  }  
  if (message.content === '!basss') {
    // Send "pong" to the same channel
    message.channel.send('Basss is a sick cunt');
    return;
  }
  //if message is "moist"
  if (message.content === `!moist`) {
  // Send an attatchment to the same channel
  	const attachment = new Attachment('https://i.pinimg.com/originals/3f/06/b8/3f06b853310b12fea0a3143e04fc639f.jpg');
  	message.channel.send(message.author + ' I want you to know that..');
  	message.channel.send(attachment);
  	//gets all guild the bot is in
  	return;


  }



  //!leave
  if(message.content === `${prefix}leave`) {

    let joinee = message.author.username;
	var index = playing.indexOf(joinee);
	console.log('index:' + index)
	if (index > -1) {
	  playing.splice(index, 1);
	} else {
		message.channel.send(message.author.username + ' ,you are not in a match and cannot leave something you have not joined.');
		return;
	}

	console.log(playing);
    message.channel.send(`${joinee} has left the match!`);
    if (playing.length === 0) {
    	message.channel.send('The match has 0 players and has been abandoned, type !startpug to start a new match');
    	return;
    } else {
	    

	    currentnumber = playing.length;
	    //crappy team allocation
	    teamred = [playing[0],playing[2],playing[4],playing[6]];
	    teamblue = [playing[1],playing[3],playing[5],playing[7]];
	    //
	    
	    let playerlist = new Discord.RichEmbed()
	    	//gets user who posted message
	    	.setAuthor('QWTF Match', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			.setURL('https://discord.js.org/')
			.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			.setThumbnail('https://avatars1.githubusercontent.com/u/39408414')
			.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			.setTimestamp()
			.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			.addField('Team Red', teamred, true)
			if(maxplayers - currentnumber === 1) {
				playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			}
			if (currentnumber > 1) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			//what happens when max players reached
			if (currentnumber === 8) {
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);

	    return;
	  } 

    return;
  } 
  //!join
  if(message.content === `${prefix}join`) {

    let joinee = message.author.username;

    if (playing.includes(joinee)) {
    	message.channel.send('You have already joined fool!');
    	return;
    } else {
	    playing.push(joinee);
	    message.channel.send(`${joinee} has joined the match!`);
	    currentnumber = playing.length;
	    //crappy team allocation
	    teamred = [playing[0],playing[2],playing[4],playing[6]];
	    teamblue = [playing[1],playing[3],playing[5],playing[7]];
	    
	    
	    let playerlist = new Discord.RichEmbed()
	    	//gets user who posted message
	    	.setAuthor('QWTF Match', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			.setURL('https://discord.js.org/')
			.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			.setThumbnail('https://avatars1.githubusercontent.com/u/39408414')
			.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			.setTimestamp()
			.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			.addField('Team Red', teamred, true)
			if(maxplayers - currentnumber === 1) {
				playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			}
			if (currentnumber > 1) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			//what happens when max players reached
			if (currentnumber >= 8) {
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);

	    return;
	  } 


	}

	//!startpug
	if(message.content === `${prefix}startpug`) {

    let joinee = message.author.username;

    if (playing.includes(joinee)) {
    	message.channel.send('You are already in a match fool!');
    	return;
    } else {
	    playing.push(joinee);
	    message.channel.send(`${joinee} has joined the match!`);
	    currentnumber = playing.length;
	    // need to splice playing instead of below to accomodaaate for changed team numbers
	    teamred = [playing[0],playing[2],playing[4],playing[6]];
	    teamblue = [playing[1],playing[3],playing[5],playing[7]];
	    //
	    
	    let playerlist = new Discord.RichEmbed()
	    	//gets user who posted message
	    	.setAuthor('QWTF Match', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			.setURL('https://discord.js.org/')
			.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			.setThumbnail('https://avatars1.githubusercontent.com/u/39408414')
			.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			.setTimestamp()
			.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			.addField('Team Red', teamred, true)
			if(maxplayers - currentnumber === 1) {
				playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			}
			if (currentnumber > 1) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			//what happens when max players reached
			if (currentnumber >= 8) {
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);

	    return;
	  } 
	  

	}
	
	});

// Login
client.login('');
