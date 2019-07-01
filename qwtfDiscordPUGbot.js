const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const prefix = "!"
let maxplayers = 8
let playing = []
let teams = false
let matchdescript = ""

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  if(!message.content.startsWith(prefix)) return;
  avacommands = ['!startpug: START a game','!join: JOIN current match','!leave: LEAVE current match','!endpug: END/CLEAR existing match','!pugstatus: Check match STATUS' ,'!teamsizeX where X is(1-8): change TEAMSIZE, default is 4','!teams: toggles the display of TEAMS', '!setmsg: add a text field that displays any message i.e time of match.']
  if (message.content === '!pughelp') {
	    let commandlist = new Discord.RichEmbed()	
			.addField('QWTF Matchbot Available Commands',avacommands, true)
		message.channel.sendEmbed(commandlist)		
  return;
  }

  //get nick from message author
  function id() {
  	let idtest  = message.author.id
  	console.log("user id:" + message.author.id);
  	return message.author.id;
  }
  function nick() {
  	let idtest  = message.author.id
  	console.log("user id:" + message.author.id);
	//this @'s' user using their id 
	//message.channel.send('<@'+idtest+">");
	
	//testing - this returns nick using id
	var member = message.guild.member(idtest);
	console.log(member.nickname);
	//message.channel.send('<@'+idtest+">")
	console.log(member);
	if (member.nickname === null) {
		return member.user.username;
	}
	else {

	return member.nickname;
		}
	}

  if (message.content.startsWith ('!setmsg')) {
  		matchdescript = message.content.slice(7);
  		console.log(matchdescript);
  		console.log(message.member.displayname);
  		return;
  }

  if (message.content === '!endpug') {
  	if (playing.length === 0) {
  		message.channel.send(nick(message.author.username) + ", there is nothing to end!🤡 ");
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
  //teamsize 1 is just for testing
  if (message.content === '!teamsize1') {
    message.channel.send('Teamsize changed to 1');
    maxplayers = 1
  return;
	}
  if (message.content === '!teamsize1') {
    message.channel.send('Teamsize changed to 1');
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
	message.channel.send("Teamsize changed to 7.");
    maxplayers = 14;
  return;
  }  
      if (message.content === '!teamsize8') {
	message.channel.send("Teamsize changed to 8.");
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
		message.channel.send(nick(message.author.username) + ", there is no match☹, type !startpug if you would like to start a match.");
	} else {
		console.log(playing);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. !pughelp for commands.', 'https://avatars1.githubusercontent.com/u/39408414')
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
			if (matchdescript.length > 0) {
				playerlist.setAuthor("QWTF PUG - " + matchdescript	+ " - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
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
		message.channel.send(nick(message.author.username) + ' ,you are not in a match and cannot leave something you have not joined. 😂');
		return;
	}
	console.log(playing);
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
			.setDescription(`${joinee} has left the match! 🙁`)
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamred,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= maxplayers)){
				message.channel.send('Meh, we dont need you anyway...');	
				}	
			if (matchdescript.length > 0) {
				playerlist.setAuthor("QWTF PUG - " + matchdescript	+ " - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	    return;
	  } 
    return;
  } 


  //!join
  if(message.content === `${prefix}join`) {
    let joinee = nick(message.author.username);
    if (playing.includes(joinee)) {
    	message.channel.send('You have already joined fool!😛' );
    		return;		
    }
	if (playing.length === 0) {
		message.channel.send(nick(message.author.username) + ", there is no match☹, type !startpug if you would like to start a match.");
		return;
	} else {

	    playing.push(joinee);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			.setDescription(`${joinee} has joined the match!`)
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamred,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}
			if ((currentnumber >= maxplayers)){
				playerlist.setImage('https://media.giphy.com/media/9wQectHXbY4y4/giphy.gif')
				for (i = 0; i < (currentnumber); i++) {
					message.channel.send('<@'+id(playing[i])+">");
				message.channel.send('Time to start match get in server!!');
				
			if (matchdescript.length > 0) {
				playerlist.setAuthor("QWTF PUG - " + matchdescript	+ " - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			}
			}	
			}						
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	    return;
	  } 
	}
	//!startpug
	if(message.content === `${prefix}startpug`) {
	let createdstartpug = message.createdTimestamp;
	let matchdescript = "";
	console.log(createdstartpug);	
	
	//some timestamp stuff not used aatm
	let humandate = new Date (createdstartpug);
	console.log(humandate);
	difference = 'test';


    //console.log(member55);
    //member66 = client.users.get("name", "deamonate").id;
    //console.log('member66'+member66);

	//
    let joinee = nick(message.author.username);
    if (playing.includes(joinee)) {
    	message.channel.send('You are already in a match fool!');
    	return;
    } else {
	    playing.push(joinee);
	    currentnumber = playing.length;
	    teamblue = [playing[0],playing[2],playing[4],playing[6],playing[8],playing[10],playing[12]];
	    teamred = [playing[1],playing[3],playing[5],playing[7],playing[9],playing[11],playing[13]];
	    message.channel.send('@here');
	    let playerlist = new Discord.RichEmbed()
	    	.setAuthor("QWTF PUG - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			.setColor('#0099ff')
			.setDescription(`${joinee} has started a match!`)
			// removed to make 1 line as requested by Zel
			//.setDescription('Type !join to JOIN and !leave to LEAVE the Match and !matchbothelp for more commands.')
			//.addField(currentnumber + '/' + maxplayers + ' players have joined', ' ------------------------------------------------------------------------------')
			//.setTimestamp()
			//.setFooter('We need ' + (maxplayers - currentnumber) +' more players!', 'https://avatars1.githubusercontent.com/u/39408414')		
			if ((currentnumber > 1) && (teams === true)) {
				playerlist.addField('Team Red', teamred,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);

				//for (i = 0; i < (currentnumber); i++) {
				//	message.channel.send('<@'+id(playing[0])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[2])+">"+' <@'+id(playing[3])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">"+' <@'+id(playing[1])+">");
				//	message.channel.send('<@'+id(playing[i])+">")
				//message.channel.send('Time to start match get in server!!');
				//}

			}
	
			if (matchdescript.length > 0) {
				playerlist.setAuthor("QWTF PUG - " + matchdescript	+ " - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
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
				playerlist.addField('Team Red', teamred,true);
				}
			//if(maxplayers - currentnumber === 1) {
			//	playerlist.setFooter('We need ' + (maxplayers - currentnumber) +' more player!', 'http://gph.is/1Eh63HI')		
			//}
			if ((currentnumber >= 1) && (teams === true)) {
				playerlist.addField('Team Blue', teamblue,true);
				}			
			if (matchdescript.length > 0) {
				playerlist.setAuthor("QWTF PUG - " + matchdescript	+ " - " + currentnumber + '/' + maxplayers + ' Players have joined. Type !pughelp for commands', 'https://avatars1.githubusercontent.com/u/39408414')
			}				
	    message.channel.sendEmbed(playerlist)	    
	    console.log(playing);
	    return;
	  } 
    return;
  } 
	});
// Login add your token here
client.login('');
