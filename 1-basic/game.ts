const position = { x: 0, y: 0 };

function move(direction: "up" | "down" | "left" | "right") {
  switch (direction) {
    case "up":
      position.y += 1;
      break;

    case "down":
      position.y -= 1;
      break;

    case "right":
      position.x += 1;
      break;

    case "left":
      position.y -= 1;
      break;
    default:
      throw new Error(`unknown driection: ${direction}`);
  }
}

console.log(position);
move("up");
console.log(position);
move("down");
console.log(position);
move("left");
console.log(position);
move("right");
console.log(position);
