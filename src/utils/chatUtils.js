function sendLetter(obj, socket) {
     socket.emit('message', JSON.stringify({
          req: {
               "uri": "http://localhost/api/messages",
               "method": "POST",
               "body": JSON.stringify(obj),
               "headers": {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
               }
          },
          type: 'sent'
     }))
     console.log("Sent")
}

export default sendLetter;