const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const prefix = "!"
let maxplayers = 8
let playing = []
let teams = false
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  if(!message.content.startsWith(prefix)) return;
  avacommands = ['!startpug:START a game','!join: JOIN current match','!leave: LEAVE current match','!endpug: END/CLEAR existing match','!pugstatus: Check match STATUS' ,'!teamsizeX where X is(1-8): change TEAMSIZE, default is 4 (coming soon)','!teams: toggles the display of TEAMS', '!settime: add a text field that displays a scheduled TIME for the match. (coming soon)','!players: see a list current PLAYERS (comming soon)']
  if (message.content === '!pughelp') {
	    let commandlist = new Discord.RichEmbed()	
			.addField('QWTF Matchbot Available Commands',avacommands, true)
		message.channel.sendEmbed(commandlist)		
  return;
  }
  if (message.content === '!endpug') {
  	if (playing.length === 0) {
  		message.channel.send(message.author.username + ", there is nothing to end!🤡 ");
  		return;
  	} else {
  playing = [];
  message.channel.send('❌Match has been ended❌ !startpug to start a new match.');
  return;
	}
  }
  //Importantly if the message is "Bent"
  if (message.content === '!bent') {
    message.channel.send('Bent is a moist cunt');
  return;
  }  

    if (message.content === '!teamsize1') {
    message.channel.send('Bent is a moist cunt');
    maxplayers = 2;
  return;
  }  
  if (message.content === '!teamsize2') {
	maxplayers = 4;
	message.channel.send("Teamsize changed to 2.");
  return;
  }  
    if (message.content === '!teamsize3') {
    maxplayers = 6;
    message.channel.send("Teamsize changed to 3.");
  return;
  }  
    if (message.content === '!teamsize4') {
	message.channel.send("Teamsize changed to 4.");
    maxplayers = 8;
  return;
  }  
      if (message.content === '!teamsize5') {
	message.channel.send("Teamsize changed to 5.");
    maxplayers = 10;
  return;
  }  
      if (message.content === '!teamsize6') {
	message.channel.send("Teamsize changed to 6.");
    maxplayers = 12;
  return;
  }  
      if (message.content === '!teamsize7') {
	message.channel.send(message.author.username + "Teamsize changed to 7.");
    maxplayers = 14;
  return;
  }  
      if (message.content === '!teamsize8') {
	message.channel.send(message.author.username + "Teamsize changed to 8.");
    maxplayers = 16;
  return;
  }  
  if (message.content === '!basss') {
    message.channel.send('Basss is a sick cunt');
    return;
  }
  if (message.content === `!moist`) {
  	const attachment = new Attachment('https://i.pinimg.com/originals/3f/06/b8/3f06b853310b12fea0a3143e04fc639f.jpg');
  	message.channel.send(attachment);
  	return;
  }
  //teams Display toggle
  if (message.content === `!teams`) {
  	teams = !teams;
  		    console.log(teams);
  return;

  }
    if(message.content === `${prefix}pugstatus`) {
	if (playing.length === 0) {
		message.channel.send(message.author.username + ", there is no match☹, type !startpug if you would like to start a match.");
	} else {
		console.log(playing);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamblue,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= 8) && (teams === true)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	  } 
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
		message.channel.send(message.author.username + ' ,you are not in a match and cannot leave something you have not joined. 😂');
		return;
	}
	console.log(playing);
    message.channel.send(`${joinee} has left the match! 🙁`);
    if (playing.length === 0) {
    	message.channel.send('💀The match has 0 players and has been abandoned💀 Type !startpug to start a new match');
    	return;
    } else {
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamblue,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= 8) && (teams === true)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
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
    	message.channel.send('You have already joined fool!😛' );
    	return;
    } else {
	    playing.push(joinee);
	    message.channel.send(`${joinee} has joined the match!`);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamblue,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= 8) && (teams === true)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	    return;
	  } 
	}
	//!startpug
	if(message.content === `${prefix}startpug`) {
	let createdstartpug = message.createdTimestamp;
	console.log(createdstartpug);	
	let humandate = new Date (createdstartpug);
	console.log(humandate);
    let joinee = message.author.username;
    difference = 'test'
    if (playing.includes(joinee)) {
    	message.channel.send('You are already in a match fool!');
    	return;
    } else {
	    playing.push(joinee);
	    message.channel.send(`${joinee} has started the match!`);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamblue,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= 8) && (teams === true)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	  } 
	}

	    if(message.content === `${prefix}pug`) {
	if (playing.length === 0) {
		message.channel.send(message.author.username + ", there is no match☹, type !startpug if you would like to start a match.");
	} else {
		console.log(playing);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamblue,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= 8) && (teams === true)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				playerlist.addField(currentnumber + '/' + maxplayers + ' players have joined', 'TIME TO START MATCH!! GET IN SERVER!!');
				}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	    return;
	  } 
    return;
  } 
	});
// Login add your token here
client.login('NTkwNzg2NjA2MDk3NzYwMjg5.XQnTHA.tw3u9AC5RWSpHfR2VVtUpAauEr8');
