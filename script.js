const text = document.querySelector('.text');
const block = document.querySelector('.block');
const btn = document.querySelector('.btn');

const HEX = '0123456789ABCDEF'

const getRandomColor = () => { 
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color = color + HEX[Math.floor(Math.random() * 16)]
    }

    return color 
}

btn.addEventListener('click', () => {
    const needColor = getRandomColor();
    block.style.backgroundColor = needColor;
    block.style.border = '1px solid gray';
    text.textContent = needColor;
})