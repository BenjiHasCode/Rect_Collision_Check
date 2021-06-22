const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rect1 = new Rectangle(0,0, 100, 100);
const rect2 = new Rectangle(200,200, 100, 100);

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(200, 200, 100, 100);
}

window.addEventListener("mousemove", (event) => {
    draw();

    rect1.x = event.clientX - rect1.width/2;
    rect1.y = event.clientY - rect1.height/2;

    if (collision(rect1, rect2))
        ctx.fillStyle = "red";
    else
        ctx.fillStyle = "green";
    ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height)
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
         return true;
     }
     else return false;
}
