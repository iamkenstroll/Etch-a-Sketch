const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');

const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');

function createDiv(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridBoxes');
        newDiv.style.border = "1px solid #DCDCDC";
        newDiv.style.background = "#f7f5f5";
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridtemplateColumns = `repeat(${rows}, 1fr)`;
        container.appendChild(newDiv);
    }
}

createDiv(16,16);


function grayBTNColor() {
    const gridBox = document.querySelectorAll('.gridBoxes');
    btnGray.textContent = "Gray";
    btnGray.addEventListener('click', () => {
        gridBox.forEach(gridBoxes => gridBoxes.addEventListener('mouseover', () => {
            let Rnum= Math.floor(Math.random()* 255)
            gridBoxes.style.background = `rgb(${Rnum},${Rnum},${Rnum})`;
        }));
    });  

    buttons.appendChild(btnGray).classList.add('btn');
}

grayBTNColor();

function blackBTNColor() {
    const gridBox = document.querySelectorAll('.gridBoxes');
    btnBlack.textContent = "Black";
    btnBlack.addEventListener('click', () => {
        gridBox.forEach(gridBoxes => gridBoxes.addEventListener('mouseover', () => {
            gridBoxes.style.background = 'black';
        }));
    });  

    buttons.appendChild(btnBlack).classList.add('btn');
}

blackBTNColor();

function RGB_BTNColor() {
    const gridBox = document.querySelectorAll('.gridBoxes');
    btnRGB.textContent = "MultiColor";
    btnRGB.addEventListener('click', () => {
        gridBox.forEach(gridBoxes => gridBoxes.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            gridBoxes.style.background = `rgb(${R}, ${G}, ${B})`;
        }));
    });  

    buttons.appendChild(btnRGB).classList.add('btn');
}

RGB_BTNColor();

function resetButton() {
    const gridBox = container.querySelectorAll('.gridBoxes');
    gridBox.forEach(gridBoxes => gridBoxes.remove())
} 

function reSizeButton() {
    btnSize.textContent = "GRID SIZE"
    btnSize.addEventListener('click', () => {
        let user = prompt('What size do you want your grid to be?')
        console.log(`user is ${user}`);
        if(user === null  || user < 1){
            resetButton()
            createDiv(16,16)
            blackBTNColor()
            grayBTNColor()
            RGB_BTNColor()
        } else{
            resetButton()
            createDiv(user,user)
            blackBTNColor()
            grayBTNColor()
            RGB_BTNColor()   
        }
    });
    buttons.appendChild(btnSize).classList.add('btn');
}
reSizeButton();