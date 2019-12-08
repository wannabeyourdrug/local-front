let sendNotification = () => {};

if (("Notification" in window)) {
    Notification.requestPermission();
    if (Notification.permission === "granted") {
        sendNotification = (title, body, icon = '/assets/img/login-balloon.jpg') => {
            new Notification(title, {
                body,
                icon,
                dir: 'auto'
            })
        }
    }
}

export default sendNotification;