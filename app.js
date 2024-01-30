let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");

let newGameBtn=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerx playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{

    turnO=true;
    boxEnable();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{

    box.addEventListener("click" , ()=>{
        console.log("box clicked");
        
        if(turnO === true){ //player O
            box.innerText ="O";
            turnO=false;
        }
        else{ //Player X
            box.innerText ="X";
            turnO=true;
        }
        box.disabled=true; //if one time button is clicked then value is set it can't be changed after double click hence disabled
       checkWinner();
    })
} )

const boxDisable =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const boxEnable =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""; // sari value empty kr denge in case of game reset
    }
}

const showWinner =(winner)=>{

    msg.innerText="Congraulations , winner is "+winner;
    msgContainer.classList.remove("hide"); //to make msg visible which is display none 
    boxDisable();
    
}

const checkWinner =()=>{

    for(let pattern of winPatterns){
        //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText,boxes[pattern[2]].innerText ) ;

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }

            
        }
    }

}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);