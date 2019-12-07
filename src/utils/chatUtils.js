function sendLetter(obj, socket) {
     socket.emit('message', JSON.stringify({
          req: {
               "uri": "http://localhost/api/messages",
               "method": "POST",
               "body": JSON.stringify(obj),
               "headers": {
                    "Content-Type": "application/json",
                    "Authorization": ".eyJ0YWdzIjpbXSwiX2lkIjoiNWRlYjkwM2VlMjZjNmM2OWNkZTU3ODk3IiwidXNlcm5hbWUiOiJoZWxsbyIsIl9fdiI6MCwiaWF0IjoxNTc1NzE4OTc0fQ.hLuG0ZLJb1vwg2q7lnnGQrUWC1TRg4p2lZTDb-piY2s"
               }
          },
          type: 'sent'
     }))
     console.log("Sent")
}

export default sendLetter;