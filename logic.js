console.log("tic tac toe")

let turn='X';
let gameover=false;

//turn change
const changeturn=()=>{
    return turn==='X'?'O' :'X';
}

//check win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
win.forEach(e=>{
    if ((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[1]].innerText=== boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=='')) {
        document.querySelector('.rules').innerText ='!!! Hurry '+ boxtext[e[0]].innerText +' won';
        gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='170px'    }
})
}

//gamelogic
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if (boxtext.innerText==='') {
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName('rules')[0].innerText="turn of "+turn;

            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText='';
        turn='X';
        gameover=false;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0'
    })
})