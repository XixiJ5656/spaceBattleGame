const randomChance = () => {
  return Math.random();
};
let uss;
let alien;
let damageArr = [];

class Uss {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
  attackAlien() {
    let ussChance = randomChance();
    if (this.accuracy >= ussChance) {
      alien.hull = alien.hull - this.firepower;
      console.log(
        "%cAlien has " + alien.hull + " hull remaning",
        "color:red;font-size:9pt"
      );

      if (alien.hull > 0) {
        console.log(
          "%cAlien got hit but it is still alive, now Alien is about to attack you. Wait to see results...",
          "color:red;font-size:9pt;background:yellow"
        );
        document.getElementById("gameMessage").innerHTML =
          "Alien got hit but it is still alive, now Alien is about to attack you. Wait to see results...";
        setTimeout(() => {
          alien.alienAttackUss();
        }, 1000);
      }
      if (alien.hull <= 0) {
        damageArr.push(1);
        console.log(
          `%cYou have done ${damageArr.length} damage/damages!`,
          `color:blue;font-size:9pt;`
        );
        if (damageArr.length < 6) {
          setInterval(chooseOption(), 1000);
        } else {
          console.log(
            "%cCongratulations !! You Won!",
            "color:green;font-size:11pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Congratulations !! You Won!";
          document.getElementById("attack").style.display = "none";
          document.getElementById("restart").style.display = "block";
          document.getElementById("levelUp").style.display = "block";
          document.getElementById("retreat").style.display = "none";
        }
      }
    } else {
      console.log(
        "%cMiss Alien! Alien is attacking you! wait to see results...",
        "color:red;font-size:9pt;background:yellow"
      );
      document.getElementById("gameMessage").innerHTML =
        "Miss Alien! Alien is attacking you! wait to see results...";
      setTimeout(() => {
        alien.alienAttackUss();
      }, 1000);
    }
  }
}

class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
  alienAttackUss() {
    let hitChance = randomChance();
    if (this.accuracy >= hitChance) {
      uss.hull -= this.firepower;
      console.log(
        "%cYou have " + uss.hull + " hull remaining!",
        "color:green;font-size:9pt"
      );
      if (uss.hull > 0) {
        console.log(
          "%cYou have been hit but you survived, It is your turn!",
          "border:1px solid purple"
        );
        document.getElementById("gameMessage").innerHTML =
          "You have been hit but you survived, It is your turn!";
      } else {
        console.log(
          "%cAlien Won! Do you want to Restart or leave game?",
          `color:red;font-size:11pt`
        );
        document.getElementById("gameMessage").innerHTML =
          "Alien Won! Do you want to Restart or leave game?";
        document.getElementById("attack").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("endGame").style.display = "block";
      }
    } else {
      console.log(
        "%cAlien did NOT hit you! It is your turn!",
        "border:1px solid purple"
      );
      document.getElementById("gameMessage").innerHTML =
        "Alien did NOT hit you! It is your turn";
    }
  }
}

function preStart() {
  console.log(
    "%cAliens are trying to take over Earth. In order to protect your home, you can start to fight!",
    "font-size:11pt; background:#EFF5E1;border:1px solid grey"
  );
  document.getElementById(
    "gameMessage"
  ).innerHTML = `Aliens are trying to take over Earth. In order to protect your home, you can start to fight! Please use "CONSOLE in Google Dev Tools"`;
  document.getElementById("start").style.display = "block";
  document.getElementById("attack").style.display = "none";
  document.getElementById("continue").style.display = "none";
  document.getElementById("retreat").style.display = "none";
  document.getElementById("endGame").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("levelUp").style.display = "none";
}

function startGame() {
  resetUss();
  resetAlien();
  document.getElementById("start").style.display = "none";
  console.log(
    "%cWhenever you are ready, you can start to attack.",
    "font-size:11pt; background:#F5EEE1;border:1px solid grey"
  );
  document.getElementById("gameMessage").innerHTML =
    "Whenever you are ready, you can start to attack.";
  document.getElementById("attack").style.display = "block";
  document.getElementById("retreat").style.display = "none";
}

function chooseOption() {
  console.log(
    "%cYou have destroyed this ship, do you want to continue or retreat?",
    `font-size:10pt; background:pink`
  );
  document.getElementById("gameMessage").innerHTML =
    "You have destroyed this ship, do you want to continue or retreat?";
  document.getElementById("attack").style.display = "none";
  document.getElementById("retreat").style.display = "block";
  document.getElementById("continue").style.display = "block";
}

function toContinue() {
  alien = new Alien();
  console.log(
    "%cYou have a new ailen ship to attack.",
    "font-size:10pt; background:pink"
  );
  document.getElementById("gameMessage").innerHTML =
    "You have a new ailen ship to attack";
  document.getElementById("attack").style.display = "block";
  document.getElementById("retreat").style.display = "none";
  document.getElementById("continue").style.display = "none";
}
function resetAlien() {
  alien = new Alien();
}

function endGame() {
  document.write("You left Space Battle! You can close this window now!");
}

function resetUss() {
  uss = new Uss();
  damageArr = [];
}

preStart();
