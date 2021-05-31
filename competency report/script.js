var characterPoints=100;
var enemyPoints=100;
var attackPoints=20;
display();

function display(){
    document.getElementById("character-points").innerHTML=`<b>points:</b> ${characterPoints}`;
    document.getElementById("enemy-points").innerHTML=`<b>points:</b> ${enemyPoints}`;
    document.getElementById('status').innerHTML=`<h2 class="game-over">playing...</h2>`;
}
function characterAttack(){
    var enemyNew=enemyPoints-attackPoints;
    enemyPoints=enemyNew;
    display();
    if(enemyPoints<=0){
        document.getElementById('character-attack-btn').style.display="none";
        document.getElementById('enemy-attack-btn').style.display="none";
        document.getElementById('status').innerHTML=`<h2>Game Over...</h2> <button onclick="restart()"> Restart </button>`;
    }
}
function enemyAttack(){
    var characterNew= characterPoints-attackPoints;
    characterPoints=characterNew;
    display();
    if(characterPoints<=0){
        document.getElementById('enemy-attack-btn').style.display="none";
        document.getElementById('character-attack-btn').style.display="none";
        document.getElementById('status').innerHTML=`<h2 class="game-over">Game Over...</h2> <button onclick="restart()"> Restart </button>`;
    }
}
function restart(){
    characterPoints=100;
    enemyPoints=100;
    display();
    document.getElementById('character-attack-btn').style.display="block";
    document.getElementById('enemy-attack-btn').style.display="block";
}