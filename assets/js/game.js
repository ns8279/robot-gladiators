var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (){
    window.alert("Welcome to Robot Gladiators");

//Subtract the value of playerAttcak from the enemyHealth and store the result in enemyHealth
    enemyHealth = enemyHealth - playerAttack;
//Log the result in a message
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
//Subtract the value of enemyAttack from the playerHealth and store the result in playerHealth
    playerHealth = playerHealth - enemyAttack;
//Log the reult in a message
    console.log (enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");
};

fight();
