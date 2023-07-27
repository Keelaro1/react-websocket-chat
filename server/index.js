/* eslint-disable */

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const MESSAGES_LIMIT = 50;
let messages = [];
let users = [];

wss.on('connection', ws => {
	wss.clients.forEach(client => {
		client.send(JSON.stringify({ method: 'messages', messages: [...messages] }));
	});
	ws.on('message', m => {
		const data = JSON.parse(m);
		switch (data.method) {
			case 'newMessage':
				messages.push(data.message);
				if (messages.length > MESSAGES_LIMIT) {
					messages = messages.slice(-MESSAGES_LIMIT);
				}
				wss.clients.forEach(client => {
					if (client !== ws) {
						client.send(JSON.stringify({ method: 'newMessage', message: data.message }));
					}
				});
				break;
			case 'newUser':
				users.push(data.user);
				wss.clients.forEach(client => {
					client.send(JSON.stringify({ method: 'newUser', users: [...users] }));
				});
				break;
			case 'userLeft':
				users = [...users.filter(u => u !== data.user)];
				wss.clients.forEach(client => {
					client.send(JSON.stringify({ method: 'userLeft', users: [...users] }));
				});
				break;
			default:
				break;
		}
	});
});
