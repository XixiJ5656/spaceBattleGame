const randomChance = () => {
  return Math.random();
};

let damageArr = [];
let damagePodArr = [];
let superUss;
let megaShip;
let shipNum;
let pod;
let podNum;

class SuperUss {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.9;
    this.missiles = 3;
    this.shieldUse = 0.5;
  }

  attackRegShip() {
    improveUssFirePower();
    console.log(
      `%cYou are attcking regular ships with firepower value ${superUss.firepower}`,
      `color:blue;font-size:10pt`
    );
    let hitChance = randomChance();
    if (this.accuracy >= hitChance) {
      regShip.hull = regShip.hull - this.firepower;
      console.log(
        `%cAlien Regular Ship has ${regShip.hull} hull remaining.`,
        `color:red;font-size:9pt`
      );
      if (regShip.hull > 0) {
        console.log(
          `%cAlien got hit but it is still alive, they are ready to attack you`,
          `color:red;font-size:9pt`
        );
        let shieldOn = randomChance();
        if (this.shieldUse > shieldOn) {
          console.log(
            `%cShield is on,you are safe at this moment. You can keep attacking!`,
            `color:brown;font-size:10pt`
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield is on,you are safe at this moment. You can keep attacking!";
        } else {
          console.log(
            "%cShield does not work,alien is attcking you now.",
            "color:brown;font-size:10pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield does not work,alien is attcking you now.";
          regShip.regaAttackUss();
        }
      }
      if (regShip.hull <= 0) {
        damageArr.push(1);
        let leftOver = shipNum - damageArr.length;
        console.log(
          `%cYou have done ${damageArr.length} damage/damages! There are ${leftOver} regular ships left.`,
          `color:black;font-size:9pt;background:pink`
        );
        if (damageArr.length < shipNum) {
          chooseOption();
        } else {
          console.log(
            `%cYou are goning to attack the Mega-Ship now, but Mega-Ship has ${podNum} Weapon-Pods. If you want to destroy the Mega-ship, you have to damage all the Weapon-Pods first!`,
            `font-size:11pt; background:#F5EEE1;border:1px solid grey`
          );
          document.getElementById("gameMessage").innerHTML =
            "You are goning to attack the Mega-Ship now, but Mega-Ship has several Weapon-Pods. If you want to destroy the Mega-ship, you have to damage all the Weapon-Pods first!";
          document.getElementById("attack").style.display = "none";
          document.getElementById("attackPods").style.display = "block";
        }
      }
    } else {
      console.log(
        "%cYou Missed! Don't give up, alien is attcking you now!",
        "color:red;font-size:9pt"
      );
      let shieldOn = randomChance();
      if (this.shieldUse > shieldOn) {
        console.log(
          "%cShield is on,you are safe at this moment. You can keep attacking!",
          "color:brown;font-size:10pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield is on,you are safe at this moment. You can keep attacking!";
      } else {
        console.log(
          "%cShield does not work,alien is attcking you now.",
          "color:brown;font-size:10pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield does not work,alien is attcking you now.";
        regShip.regaAttackUss();
      }
    }
  }

  attackPod() {
    improveUssFirePower();
    console.log(
      `%cYou are attcking Weapon-Pod with firepower value ${superUss.firepower}`,
      `color:blue;font-size:10pt`
    );
    let hitChance = randomChance();
    if (this.accuracy >= hitChance) {
      damagePodArr.push(1);
      console.log(
        `%cYou damaged ${damagePodArr.length} pod/pods.`,
        `color:red;font-size:9pt`
      );
      if (damagePodArr.length < podNum) {
        console.log(
          `%cYou still have ${
            podNum - damagePodArr.length
          } pods left. Aim at next one!!! The next pod is close to you.`,
          `color:green;font-size:9pt`
        );
        resetNewPod();
        let shieldOn = randomChance();
        if (this.shieldUse > shieldOn) {
          console.log(
            "%cShield is on,you are safe at this moment. You can keep attacking!",
            "color:brown;font-size:10pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield is on,you are safe at this moment. You can keep attacking!";
        } else {
          console.log(
            "%cShield does not work,Pod is attcking you now.",
            "color:brown;font-size:10pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield does not work,Pod is attcking you now.";
          pod.podAttackUss();
        }
      } else {
        console.log(
          `%cYou have hit down all the Weapon-Pods. Finally you meet the Mega-Ship.Click "ATTACK MEAG SHIP" to continue.`,
          `font-size:11pt; background:#F5EEE1;border:1px solid grey`
        );
        document.getElementById("gameMessage").innerHTML =
          "You have hit down all the Weapon-Pods. Finally you meet the Mega-Ship.Click 'ATTACK MEAG SHIP' to continue.";
        document.getElementById("attackMega").style.display = "block";
        document.getElementById("attackPods").style.display = "none";
      }
    } else {
      console.log(
        "%cYou Missed! Be careful, pod is ready to attack you.",
        "color:red;font-size:9pt"
      );
      document.getElementById("gameMessage").innerHTML =
        "You Missed! Be careful, pod is ready to attack you.";
      let shieldOn = randomChance();
      if (this.shieldUse > shieldOn) {
        console.log(
          "%cShield is on,you are safe at this moment. You can keep attacking!",
          "color:brown;font-size:10pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield is on,you are safe at this moment. You can keep attacking!";
      } else {
        console.log(
          "%cShield does not work,Pod is attcking you now.",
          "color:brown;font-size:10pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield does not work,Pod is attcking you now.";
        pod.podAttackUss();
      }
    }
  }

  attackMegaShip() {
    improveUssFirePower();
    console.log(
      `%cYou are attcking the Mega-Ship with firepower value ${superUss.firepower}`,
      `color:blue;font-size:10pt`
    );
    let hitChance = randomChance();
    if (this.accuracy >= hitChance) {
      megaShip.hull -= this.firepower;
      console.log(
        `%cMega Ship has ${megaShip.hull} hull remaining.`,
        `color:red;font-size:9pt`
      );
      if (megaShip.hull > 0) {
        console.log(
          "%cMega Ship got hit but it is still alive",
          "color:green;font-size:9pt"
        );
        let shieldOn = randomChance();
        if (this.shieldUse > shieldOn) {
          console.log(
            "%cShield is on,you are safe at this moment. You can keep attacking!",
            "color:brown;font-size:10pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield is on,you are safe at this moment. You can keep attacking!";
        } else {
          console.log(
            "%cShield does not work,alien is attcking you now.",
            "color:brown;font-size:10pt"
          );
          document.getElementById("gameMessage").innerHTML =
            "Shield does not work, Mega Ship is attcking you now.";
          megaShip.megaAttackUss();
        }
      } else {
        console.log(
          "%cCoongratulations! You Won!",
          "color:green;font-size:11pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Coongratulations! You Won!";
        document.getElementById("attackMega").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("endGame").style.display = "block";
      }
    } else {
      console.log("%cYou Missed!", "color:red;font-size:9pt");
      document.getElementById("gameMessage").innerHTML = "You Missed!";
      let shieldOn = randomChance();
      if (this.shieldUse > shieldOn) {
        console.log(
          "%cShield is on,you are safe at this moment. You can keep attacking!",
          "color:brown;font-size:9pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield is on,you are safe at this moment. You can keep attacking!";
      } else {
        console.log(
          "%cShield does not work,Mega Ship is attcking you now.",
          "color:brown;font-size:9pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Shield does not work,Mega Ship is attcking you now.";

        megaShip.megaAttackUss();
      }
    }
  }
}
class RegShip {
  constructor() {
    this.hull = Math.floor(Math.random() * 5) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
  regaAttackUss() {
    let hitChance = randomChance();
    if (this.accuracy >= hitChance) {
      let t = Math.floor(Math.random() * 3) + 1;
      console.log(
        `%c Alien ship hit you ${t} times with its firepower value ${this.firepower} .`,
        `color:black;font-size:9pt;background:yellow`
      );
      superUss.hull -= this.firepower * t;
      console.log(
        `%cYou now have ${superUss.hull} hull remaining!`,
        `color:black;font-size:9pt;background:yellow`
      );
      if (superUss.hull > 0) {
        console.log(
          "%cKeep fighting!",
          "color:black;font-size:9pt;background:yellow"
        );
        document.getElementById("gameMessage").innerHTML =
          "You have been hit but you survived, keep fighting!";
      } else {
        console.log(
          "%cAlien Won! Do you want to Restart or leave game?",
          "color:green;font-size:11pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Alien Won! Do you want to Restart or leave game?";
        document.getElementById("attack").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("endGame").style.display = "block";
      }
    } else {
      console.log(
        "%cAlien did NOT hit you!",
        "color:black;font-size:9pt;background:yellow"
      );
      document.getElementById("gameMessage").innerHTML =
        "Alien did NOT hit you! It is your chance now.";
    }
  }
}

class Pod {
  constructor() {
    this.podHull = 5;
    this.podHitPoints = Math.floor(Math.random() * 4) + 3;
    this.podAccuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
  podAttackUss() {
    let hitChance = randomChance();
    if (this.podAccuracy >= hitChance) {
      superUss.hull -= this.podHitPoints;
      console.log(
        `%c Pod hit you. Now you have ${superUss.hull} hull remaining!`,
        `color:black;font-size:9pt;background:yellow`
      );
      if (superUss.hull > 0) {
        console.log(
          "%cKeep fighting!",
          "color:black;font-size:9pt;background:yellow"
        );
        document.getElementById("gameMessage").innerHTML =
          "You have been hit but you survived, keep fighting!";
      } else {
        console.log(
          "%cAlien Won! Do you want to Restart or leave game?",
          "color:black;font-size:9pt;background:yellow"
        );
        document.getElementById("gameMessage").innerHTML =
          "Alien Won! Do you want to Restart or leave game?";
        document.getElementById("attack").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("endGame").style.display = "block";
        document.getElementById("attackPods").style.display = "none";
      }
    } else {
      console.log(
        "%cPod did NOT hit you!",
        "color:black;font-size:9pt;background:yellow"
      );
      document.getElementById("gameMessage").innerHTML =
        "Pod did NOT hit you! You can attack";
    }
  }
}

class MegaShip {
  constructor() {
    this.hull = Math.floor(Math.random() * 6) + 6;
    this.firepower = Math.floor(Math.random() * 4) + 3;
    this.megaAccuracy = Math.floor(Math.random() * 3) + 7 / 10;
  }
  megaAttackUss() {
    let hitChance = randomChance();
    if (this.megaAccuracy >= hitChance) {
      let t = Math.floor(Math.random() * 3) + 1;
      console.log(
        `%cMegaship hit you ${t} times with its firepower value ${this.firepower}.`,
        `color:black;font-size:9pt;background:yellow`
      );
      superUss.hull -= this.firepower * t;
      console.log(
        `%c,You now have ${superUss.hull} hull remaining!`,
        `color:black;font-size:9pt;background:yellow`
      );
      if (superUss.hull > 0) {
        console.log(
          "%cYou have been hit but you survived, keep fighting!",
          "color:black;font-size:9pt;background:yellow"
        );
        document.getElementById("gameMessage").innerHTML =
          "You have been hit but you survived, keep fighting!";
      } else {
        console.log(
          "%cAlien Won! Do you want to Restart or leave game?",
          "color:red;font-size:11pt"
        );
        document.getElementById("gameMessage").innerHTML =
          "Alien Won! Do you want to Restart or leave game?";
        document.getElementById("attack").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("endGame").style.display = "block";
        document.getElementById("attackMega").style.display = "none";
      }
    } else {
      console.log(
        "%cMega Ship did NOT hit you!",
        "color:black;font-size:9pt;background:yellow"
      );
      document.getElementById("gameMessage").innerHTML =
        "Mega Ship did NOT hit you.";
    }
  }
}

function preStart() {
  console.log(
    `%cAliens want to revenge, this time they send a random number of Regular Ships and a super powerful Mega-Ship to attack Earth. You can click "START" to start the game.`,
    `font-size:11pt; background:#EFF5E1;border:1px solid grey`
  );
  document.getElementById(
    "gameMessage"
  ).innerHTML = `Aliens want to revenge, this time they send a random number of Regular Ships and a super powerful Mega-Ship to attack Earth. You can click "START" to start the game.`;
  document.getElementById("start").style.display = "block";
  document.getElementById("attack").style.display = "none";
  document.getElementById("continue").style.display = "none";
  document.getElementById("retreat").style.display = "none";
  document.getElementById("endGame").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("attackMega").style.display = "none";
  document.getElementById("attackPods").style.display = "none";
}
function resetRegShip() {
  regShip = new RegShip();
}
function resetSuperUss() {
  superUss = new SuperUss();
}
function resetNewPod() {
  pod = new Pod();
}
function resetMegaShip() {
  megaShip = new MegaShip();
}
function startGame() {
  resetSuperUss();
  resetRegShip();
  resetMegaShip();
  resetNewPod();
  damageArr = [];
  damagePodArr = [];
  shipNum = Math.floor(Math.random() * 3) + 5;
  podNum = Math.floor(Math.random() * 3) + 2;
  console.log(
    `%cYou will have to battle with ${shipNum} regular ships and a Mega Ship. Are you ready?`,
    `font-size:11pt; background:#F5EEE1;border:1px solid grey`
  );
  document.getElementById("start").style.display = "none";
  document.getElementById("gameMessage").innerHTML =
    "Whenever you are ready, you can start to choose any regular ship you want to battle first, when you destroyed all the regular ships you will be able to be close to The Mega-Ship.";
  document.getElementById("attack").style.display = "block";
  document.getElementById("retreat").style.display = "none";
}
function chooseOption() {
  console.log(
    "%cYou have destroyed this ship, do you want to continue to attack or retreat?",
    "color:black;font-size:10pt"
  );
  document.getElementById("gameMessage").innerHTML =
    "You have destroyed this ship, do you want to continue to attack or retreat?";
  document.getElementById("attack").style.display = "none";
  document.getElementById("retreat").style.display = "block";
  document.getElementById("continue").style.display = "block";
}

function toContinue() {
  resetRegShip();
  console.log(
    "%cYou just aimed on anohter target, keep fighting!",
    "color:black;font-size:10pt;background:lightgreen"
  );
  document.getElementById("gameMessage").innerHTML =
    "You just aimed on anohter target, keep fighting!";
  document.getElementById("attack").style.display = "block";
  document.getElementById("retreat").style.display = "none";
  document.getElementById("continue").style.display = "none";
}

function endGame() {
  document.write("You left Space Battle! You can close this window now!");
}

function improveUssFirePower() {
  superUss.firepower = Math.floor(Math.random() * 3) + 5;
  return superUss.firepower;
}

preStart();
