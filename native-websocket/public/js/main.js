window.onload = function() {
    var label = document.getElementById('status');
    var message = document.getElementById('message');
    var btnSend = document.getElementById('send');
    var btnStop = document.getElementById('stop');

    btnSend.addEventListener('click', function() {
        socket.send(message.value);
    }, false);

    var socket = new WebSocket('ws://localhost:10001');

    socket.onopen = function(event) {
        if(socket.readyState === WebSocket.OPEN) {
            console.log('соединились: ' + socket.url);
            label.innerHTML = 'соединились: ' + socket.url;
        }
    };

    socket.onclose = function(event) {
        console.log('соединение закрыто: ' + + socket.url);
        label.innerHTML = 'соединение закрыто: ' + socket.url;

        var clean = event.wasClean,
            code = event.code,
            reason = event.reason;

        if(clean) {
            console.log('соединение закрыто корректно');
            label.innerHTML = 'соединение закрыто корректно: ' + socket.url;
        } else {
            console.log('соединение закрыто не корректно');
            label.innerHTML = 'соединение закрыто не корректно: ' + reason + ' код: ' + code;
        }
    };

    socket.onerror = function(event) {
        console.log('Error: ' + socket.url);
        label.innerHTML = 'Error: ' + socket.url;
    };

    socket.onmessage = function(event) {
        console.log(event.data);
        console.log(event);

        if(typeof event.data === 'string') {
            label.innerHTML = event.data;
        }
    };
};