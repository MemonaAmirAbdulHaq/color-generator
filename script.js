
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeColor() {
    const newColor = generateRandomColor();
    document.getElementById('colorBox').style.backgroundColor = newColor;
    document.getElementById('colorCode').innerText = `Color Code: ${newColor}`;
}


document.getElementById('generateColorBtn').addEventListener('click', changeColor);
