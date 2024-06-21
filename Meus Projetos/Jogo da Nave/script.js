const ship = document.getElementById('ship');

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

let isMovingUp = false;
let isMovingDown = false;

function handleKeyDown(event) {
    if (event.code === 'ArrowUp') {
        isMovingUp = true;
    } else if (event.code === 'ArrowDown') {
        isMovingDown = true;
    }
}

function handleKeyUp(event) {
    if (event.code === 'ArrowUp') {
        isMovingUp = false;
    } else if (event.code === 'ArrowDown') {
        isMovingDown = false;
    }
}

function update() {
    if (isMovingUp) {
        moveShip(-5);
    } else if (isMovingDown) {
        moveShip(5);
    }

    requestAnimationFrame(update);
}

function moveShip(distance) {
    const currentTransform = window.getComputedStyle(ship).getPropertyValue('transform');
    const currentY = parseFloat(currentTransform.split(',')[5]);
    const newY = currentY + distance;

    ship.style.transform = `translate(0, ${newY}px)`;
}

update();