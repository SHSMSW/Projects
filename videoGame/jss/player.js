let player;
function Player(classType,health,mana,strength,agility,speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;

}
let PlayerMoves = {
    calcAttack: function() {
        //who attack firsts?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        function playerAttack() {
            let calcBaseDamage = 0;
            if (player.mana > 0) {
                // You may want to add logic here for when mana > 0
            } else {
                calcBaseDamage = player.strength * player.mana / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // # of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility /5) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        function enemyAttack() {
            let calcBaseDamage = 0;
            if (enemy.mana > 0) {
                // You may want to add logic here for when mana > 0
            } else {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // # of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility/5) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " times for " + playerAttackValues[1] + " damage!");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            if (enemy.health <= 0) {
                alert("You have defeated the " + enemy.enemyType + "!");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }

            let enemyAttackValues = enemyAttack();
            let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - enemyTotalDamage;
            alert("Enemy hits " + enemyAttackValues[0] + " times for " + enemyAttackValues[1] + " damage!");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            if (player.health <= 0) {
                alert("You LOSE!");
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("enemy hit " + enemyAttackValues[0] + " times for " + enemyAttackValues[1] + " damage!");
            if (player.health <= 0) {
                alert("YOU LOST TO A " + enemy.enemyType + "!");
                getEnemyHealth.innerHTML = 'Health: ' + player.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + enemy.health;
            }

            let playerAttackValues = playerAttack();
            let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - playerTotalDamage;
            alert("You hit " + playerAttackValues[0] + " times for " + playerAttackValues[1] + " damage!");
            if (enemy.health <= 0) {
                alert("You WIN!");
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }
        }
    }
};
