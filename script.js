let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id){
    if(!fields[id] && !gameOver){
        if(currentShape == 'cross'){
            currentShape = 'circle';
            document.getElementById('player-2').classList.add('inactiv');
            document.getElementById('player-1').classList.remove('inactiv');
        }else{
            currentShape = 'cross';
            document.getElementById('player-2').classList.remove('inactiv');
            document.getElementById('player-1').classList.add('inactiv');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }  
}

function draw(){
    for(let i = 0; i < fields.length; i++){
        if(fields[i] == 'circle'){
            document.getElementById(`circle-` + i).classList.remove('d-none');
        }
        if(fields[i] == 'cross'){
            document.getElementById(`cross-` + i).classList.remove('d-none');
        }
    }
}

function restart(){
    gameOver = false;
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    fields = [];
    for(let i = 1; i <= 8 ; i++){
        document.getElementById(`line-` + i).style.transform = 'scaleX(0)'
    }
    for(let i = 0; i <= 8 ; i++){
        document.getElementById(`cross-` + i).classList.add('d-none');
        document.getElementById(`circle-` + i).classList.add('d-none');
    }
}

function checkHorizontal(){
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[4]){
        winner = fields[4];
        document.getElementById('line-2').style.transform = 'scaleX(1)'
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[7]){
        winner = fields[7];
        document.getElementById('line-3').style.transform = 'scaleX(1)'
    }
}

function checkVertical(){
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)'
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-4').style.transform =  'rotate(90deg) scaleX(1)'
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-6').style.transform =  'rotate(90deg) scaleX(1)'
    }
}

function checkDiagonal(){
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-7').style.transform =  'rotate(45deg) scaleX(1.2)'
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-8').style.transform =  'rotate(-45deg) scaleX(1.2)'
    }
}

function checkNoWinner(){
    if(fields.length == '9'){
        winner = fields[2];
    }
}

function checkForWin(){
    let winner;
    checkHorizontal();
    checkVertical();
    checkDiagonal();
    checkNoWinner();
    if(winner){
        console.log('der Gewinner ist '+  winner);
        gameOver = true;
        setTimeout(function(){
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        },1000);
    } 
}