function randomMessage() {
    var rnd = Math.floor(Math.random() * 1000000000);
    document.getElementById("message").innerHTML = rnd;
}