var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 800, 200);

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(0, 200, 800, 200);

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(0, 400, 800, 200);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(400, 300, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(420, 300, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.rect(410, 275, 50, 50);
ctx.fill();

ctx.beginPath();
ctx.translate(435, 290);
ctx.fillStyle = "white";
ctx.rotate(Math.PI / 180 * 45);
ctx.rect(-20, -20, 50, 50);
ctx.fill();