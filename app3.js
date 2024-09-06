let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;


    levelUp();
}
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250)
};


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250)
};


function levelUp() {
    userSeq = [];
    gameSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); // Push color, not element
    console.log("Game Sequence:", gameSeq);
    gameFlash(randbtn);
}

function checkAns() {
    console.log("Current Level:", level);
    console.log("User Sequence:", userSeq);
    console.log("Game Sequence:", gameSeq);

    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] !== gameSeq[i]) {
            h2.innerHTML = `Game Over!your score was <b>${level}</b><br> Press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";


            },150)
            reset();
            return;
        }
    }

    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000);
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);
    
    let userColor = btn.id;
    userSeq.push(userColor);
    console.log("User Sequence Updated:", userSeq);
    checkAns();
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


//html run