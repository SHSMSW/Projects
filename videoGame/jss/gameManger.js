let GameManager ={
  setGameStart : function(classType){
   this.resetPlayer(classType);
    this.setPreFight();
  } ,
  resetPlayer : function(classType){
   switch(classType){ // 
    case "Warrior":
        player = new Player(classType, 200, 0, 50, 50,100);
        break;
    case "Mage":
        player = new Player(classType, 150, 200, 150, 20,75);
        break;
    case "Wolfy":
        player = new Player(classType, 180, 70, 100, 30,130);
        break;
    case "Fairy":
        player = new Player(classType, 120, 150, 180, 10,150);
        break;

   }
   
   let getPlayer = document.querySelector(".player-html");
   getPlayer.innerHTML = "<img src='css/images/"+
   classType+".png' alt='"+classType+"'> <div><h3>"+
   classType+"</h3><p class = 'health-player'> Health: "+player.health+"</p><p> Mana: "+
   player.mana+"</p><p> Strength: "+player.strength+"</p><p> Speed: "+
   player.speed+"</p></div>";
  },
  setPreFight : function(){
    let getHeader = document.querySelector(".header");
    getHeader.innerHTML = "<p> Find an enemy!</p>";
    let getActions = document.querySelector(".actions");
     let getArena = document.querySelector(".arena");
     getActions.innerHTML= '<a herf="#" class="btn-prefight" onclick="GameManager.setFight()" >Search for an enemy</a>';
     getArena.style.visibility = "visible";
  },
  setFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
     let getEnemy = document.querySelector(".enemy");
     
     let enemy00 = new Enemy("Goblin", 100, 40, 50, 50,150);
     let enemy01 = new Enemy("Troll", 200, 40, 250, 10,100);
     let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));
        switch(chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p> A wild '+enemy.enemyType+' has appeared!</p>'; 
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()" >Attack!</a>';
        getEnemy.innerHTML = '<img src="css/images/'+enemy.enemyType+'.png" alt="'+enemy.enemyType+'"> <div><h3>'+
        enemy.enemyType+'</h3><p class = "health-enemy"> Health: '+enemy.health+'</p><p> Mana: '+
        enemy.mana+'</p><p> Strength: '+enemy.strength+'</p><p> Speed: '+
        enemy.speed+'</p></div>';
  }


}