//Game States
//"WIN" player robot has defeated all the enemies
//      * Fight all the enemy robots
//      * Defeat all enemy robots
//"Lose" player robot's health is 0 or less




var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto" , "Amy Andriod", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName){
    window.alert("Welcome to Robot Gladiators");

    //Subtract the value of playerAttcak from the enemyHealth and store the result in enemyHealth
        enemyHealth = enemyHealth - playerAttack;
    //Log the result in a message
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " is dead ");
    }
    else {
        window.alert (enemyName + " has " + enemyHealth + " health remaining. ");
    }

    //Subtract the value of enemyAttack from the playerHealth and store the result in playerHealth
     playerHealth = playerHealth - enemyAttack;
    //Log the reult in a message
     console.log (enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");

    //check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + " is dead ");
    }
    else {
        window.alert(playerName + " has " + playerHealth + " health remaining. ")
    }

    //Skip or Fight promt
    var promptFight = window.prompt ("Would you like to Fight or Skip? Enter 'FIGHT' or 'SKIP' to choose. ");
    console.log(promptFight);


    //if player choses to fight, then fight
    if (promptFight == "fight" || promptFight == "FIGHT"){
        //remove enemyHealth by subracting the amount set in the player attack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is dead ");
        }
        else {
            window.alert (enemyName + " has " + enemyHealth + " health remaining. ");
        }

        //remove player's health by subtracting the amount set in the enemy's attack varibale
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " is dead ");
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining. ")
        }

        //if player decides to skip
    } else if (promptFight == "skip"|| promptFight == "SKIP"){
       
        var confirmSkip = window.confirm("Are you sure you want to skip?");

        //if yes
        if(confirmSkip){
            window.alert(playerName + " has decided to quit. GoodBye!");
            //subtract playermoney
            playerMoney = playerMoney - 2 ;
            window.alert(playerName + " has " + playerMoney + "$ remaining.");
            console.log (playerName + " has " + playerMoney + " remaining.");
        }
        //if no
        else {
            fight();
        }
    } 
    
    else {
        window.alert("You need to pick a valid option. Try again!")
    }
};


for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
