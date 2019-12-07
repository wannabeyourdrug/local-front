import io from 'socket.io'

const socket = io();

socket.on('connect', () => {
     console.log(socket.connected);
});

socket.on('connect_error', (error) => {
     console.log(error);
});

export default socket;