import helpers from './helpers.js';

window.addEventListener('load', () => {
    //When the chat icon is clicked


    //When the video frame is clicked. This will enable picture-in-picture

    document.getElementById('join-room').addEventListener('click', (e) => {

        let roomName = document.querySelector('#join-name').value;
        console.log(roomName);
        if (roomName) {
            //remove error message, if any

            //save the user's name in sessionStorage

            //create room link
            let roomLink = `${location.origin}/?room=${roomName}`;
            console.log(roomLink);
            //show message with link to room
            window.location.href(roomLink);
        }

        else {
            document.querySelector('#err-msg').innerHTML = "All fields are required";
        }
    });

    //When the 'Create room" is button is clicked
    //When the 'Enter room' button is clicked.
    document.getElementById('enter-room').addEventListener('click', (e) => {
        e.preventDefault();

        let name = document.querySelector('#username').value;

        if (name) {
            //remove error message, if any
            document.querySelector('#err-msg-username').innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem('username', name);

            //reload room
            location.reload();
        }

        else {
            document.querySelector('#err-msg-username').innerHTML = "Please input your name";
        }
    });


    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('expand-remote-video')) {
            helpers.maximiseStream(e);
        }

        else if (e.target && e.target.classList.contains('mute-remote-mic')) {
            helpers.singleStreamToggleMute(e);
        }
    });

});
