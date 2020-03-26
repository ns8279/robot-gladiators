//Game States
//"WIN" player robot has defeated all the enemies
//      * Fight all the enemy robots
//      * Defeat all enemy robots
//"Lose" player robot's health is 0 or less


//Fight Function
var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerInfo.money = Math.max(0,playerInfo.money - 10);
          console.log("playerMoney", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health-damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health-damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
       playerInfo.reset();
        
        for ( var i = 0; i < enemyInfo.length; i++) {
            if (playerInfo.health > 0) {
                // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyObj = enemyInfo[i];
            
                // reset enemyHealth before starting new fight
                pickedEnemyObj.health = randomNumber(40,60);
            
                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;
            
                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyObj);

                //if we are not in the last enemy in the array
                if (playerInfo.health > 0 && i < enemyInfo.length - 1){
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
            if (playerInfo.health > 0){
                window.alert("Great Job, you've survived the game! You now have a score of" + playerInfo.money);
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
          playerInfo.refillHealth();
        break;

        case "UPGRADE" :  //newcase
        case "upgrade" :
            playerInfo.upgradeAttack();
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

    var getPlayerName = function (){
      var name = "";

      //************************************ 
      //ADD LOOP HERE WITH PROMPT AND CONDITION
      // *************************************

      while (name === "" || name === null){
          name = prompt("What is your robot's name?");
      }
      console.log("Your robots name is  " + name);
      return name;
      
    };

    var playerInfo = {
      name: getPlayerName(),
      health: 100,
      attack: 10,
      money: 10,
      reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
      }, 
      refillHealth: function () {
        if (this.money >= 7){
        window.alert("Refilling player's health by 20 for 7 dollors");
        this.health += 20;
        this.money -= 7;
        }
        else {
          window.alert("You dont have enough money");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7){
          window.alert("Upgrading the player attack by 6 for 7 dollars");
          this.attack += 20;
          this.money -=7 ;
        }else {
          window.alert("You dont have enough money");
        }   
      }
    };
    
    console.log(playerInfo.name, playerInfo.health, playerInfo.attack);
    
    var enemyInfo = [
      {
        name: "Roborto",
        attack: randomNumber(10,14),
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14),
    },
    {
      name:"Robo Trumble",
      attack: randomNumber(10,14),
    }
    ];
  
    // start the game when the page loads
    startGame();                                

    



