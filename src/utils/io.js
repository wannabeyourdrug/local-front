import io from 'socket.io-client'

const socket = io('http://45.80.68.81:3000');

socket.on('connect', () => {
     console.log(socket.connected);
});

socket.on('connect_error', (error) => {
     console.log(error);
});

export default socket;