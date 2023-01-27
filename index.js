let audio = new Audio("audio-click.mp3")
let turn = '0';
var gameover = false;

const changeTurn = () => {
    return turn === '0' ? 'X' : '0';
}

const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
        }
    })
}

let boxType = document.getElementsByClassName("boxs");
Array.from(boxType).forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', () =>{
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audio.play();
            checkWin(); 
            if(!gameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn; 
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element=> {
        element.innerText = "";
    })
    turn = "0";
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
})