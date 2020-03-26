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

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Fight Function
var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0,playerMoney - 10);
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerAttack - 3, playerAttack);
      enemyHealth = Math.max(0, enemyHealth-damage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      playerHealth = Math.max(0, playerHealth-damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

  //function to generate a random numeric value
  var randomNumber = function() {
    var value = Math.floor(Math.random() * 21) + 40;

    return value;
  }


//Function to start a new game 
    var startGame = function() {
        
        //reset player stats
        playerAttack = 10;
        playerHealth = 100;
        playerMoney = 10;
        
        for ( var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
            
                // reset enemyHealth before starting new fight
                enemyHealth = randomNumber(40,60);
            
                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;
            
                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);

                //if we are not in the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1){
                    //ask if the player wants to shop
                    var storeConfirm = window.confirm ("Do you want to visit the Store?");
                    if (storeConfirm) {
                      shop();
                    }  
                }
            }
            else {
                window.alert ("You have lost your Robot in battle! GAME OVER");
                break; 
                
            } 
            
        }
        //after the loop ends, player is either out of health or enemies to fight, so run the end game function
        endGame();
    }

// End Game Function
    var endGame = function() {
        // If a player is still alive, player wins!
            if (playerHealth > 0){
                window.alert("Great Job, you've survived the game! You now have a score of" + playerMoney);
            }
            else {
                window.alert("You have lost your Robot in the battle.");
            }

        //Ask player if they want to play again
        var playAgain =window.confirm("Do you wish to Play again?");

        if(playAgain) {
            //restart the game
            startGame(); 
        }
        else {
            window.alert ("Goodbye!")
        }
    }

// Shop Function
    var shop = function () {
      //ask the player what they would like to shop for
      var shopOptionPrompt = window.prompt("Would you like to refil your Health, Upgrade your Attack, or Leave the Store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice");

      //Using Switch Statements
    switch(shopOptionPrompt) {

        case "REFILL": //new case
        case "refill" :
          if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollors");
            playerHealth = playerHealth + 20 ;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You dont have enough Money");
          }
        break;

        case "UPGRADE" :  //newcase
        case "upgrade" :
          if (playerMoney >=7) {
            window.alert("Upgrading Player's attack by 6 for 7 dollors");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("Youdont have enough Money");
          }
          break;

          case "LEAVE": //newcase
          case "leave":
            window.alert("LEaving the store.");
          break;

          default: //default case
            window.alert("You did not pick a valid option. Try Again!");
            shop();
            break;
            
      }
    }
  
    // start the game when the page loads
    startGame();                                

    



