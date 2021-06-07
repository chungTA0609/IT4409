async function checklogin() {
    var userName = document.getElementById("username").value.toString();
    var passWord = document.getElementById("password").value.toString();

    console.log(userName);
    console.log(passWord);
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("username").innerHTML =
                this.status;
            //console.log(this.status);
        }
    };
    req.open("POST", "https://localhost:5001/api/ApplicationUser/Login", true);
    req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    var jsonBody = {
        "userName": userName,
        "password": passWord
    };
    req.send(JSON.stringify(jsonBody));
    req.onload = function () {
        if (req.status == 200) {
            app.get('/home', (req, res) => {
                res.sendFile(__dirname + '/index.html');
            });
        } else window.alert('non');
    };

}
