import Column from "./Column.js";

const canvas = document.querySelector("#matrix");
const context = canvas.getContext("2d");

const FONT_SIZE = 16;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.font = `bold ${FONT_SIZE}px monospace`;

const columns = new Array(canvas.width / FONT_SIZE)
  .fill(null)
  .map((_, i) => new Column((i + 1) * FONT_SIZE, context, canvas.height));

const animate = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "green";
  columns.forEach(column => column.drawCharacter());

  setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();