let joe = {
  name: "Joe",
  friends: {
    diego: true,
    greg: true,
    allie: false,
    neomi: true,
  },
  x: 400,
  y: 300,
};

let diego = {
  name: "Diego",
  friends: {
    joe: true,
    greg: true,
    allie: false,
    neomi: false,
  },
  x: 700,
  y: 100,
};

let greg = {
  name: "Greg",
  friends: {
    diego: true,
    joe: true,
    allie: false,
    neomi: false,
  },
  x: 1000,
  y: 300,
};

let allie = {
  name: "Allie",
  friends: {
    diego: false,
    greg: false,
    joe: false,
    neomi: true,
  },
  x: 550,
  y: 600,
};

let neomi = {
  name: "Neomi",
  friends: {
    diego: false,
    greg: false,
    allie: true,
    joe: true,
  },
  x: 850,
  y: 600,
};

let listOfPeople = [
  joe,
  diego,
  greg,
  allie,
  neomi,
]

let personToConnect1, personToConnect2

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

resizeCanvas();
window.addEventListener("resize", resizeCanvas, false);
window.onclick = onClickEvent;

function onClickEvent() {
  if (confirm("Do you want to edit the friendships?")) {
    let firstPerson = prompt("Who's the first person?", "").toLowerCase();
    
    if (!(firstPerson === "joe" || firstPerson === "diego" || firstPerson === "greg" || firstPerson === "allie" || firstPerson === "neomi")) {
      alert("Invalid name");
      return;
    }
    
    let secondPerson = prompt("Who's the second person?", "").toLowerCase();
    
    if (!(secondPerson === "joe" || secondPerson === "diego" || secondPerson === "greg" || secondPerson === "allie" || secondPerson === "neomi")) {
      alert("Invalid name");
      return;
    }
    
    let friendship = confirm("Are they friends?");
    
    //if ((firstPerson || secondPerson) !=)
    
    changeFriendshipStatus(firstPerson, secondPerson, friendship);
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  connectNodes();
  drawNodes();
}

function drawNodes() {
  //joe
  ctx.font = "30px Ariel";
  ctx.fillStyle = "black";
  ctx.fillText(joe.name, 380, 240);
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(joe.x, joe.y, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
  //diego
  ctx.font = "30px Ariel";
  ctx.fillStyle = "black";
  ctx.fillText(diego.name, 665, 40);
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(diego.x, diego.y, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
  //greg
  ctx.font = "30px Ariel";
  ctx.fillStyle = "black";
  ctx.fillText(greg.name, 970, 240);
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(greg.x, greg.y, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
  //allie
  ctx.font = "30px Ariel";
  ctx.fillStyle = "black";
  ctx.fillText(allie.name, 520, 540);
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(allie.x, allie.y, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
  //neomi
  ctx.font = "30px Ariel";
  ctx.fillStyle = "black";
  ctx.fillText(neomi.name, 810, 540);
  ctx.beginPath()
  ctx.strokeStyle = "black";
  ctx.arc(neomi.x, neomi.y, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
}

function connectNodes() {
  for(let i = 0; i < 5 ;i++) {
    for (let people in listOfPeople[i].friends) {
      personToConnect1 = listOfPeople[i];
      
      if (listOfPeople[i].friends[people]) {        
        personToConnect2 = getObject(people);
        
        drawLine();
      }
    }
  }
}

function getObject(person) {
  if (person == "joe") {
    return joe;
  } else if (person == "diego") {
    return diego;
  } else if (person == "greg") {
    return greg;
  } else if (person == "allie") {
    return allie;
  } else if (person == "neomi") {
    return neomi;
  }
}

function drawLine() {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(personToConnect1.x, personToConnect1.y);
  ctx.lineTo(personToConnect2.x, personToConnect2.y);
  ctx.stroke();
}

function changeFriendshipStatus(firstFriend, secondFriend, friendshipStatus) {
  let friend1 = getObject(firstFriend);
  let friend2 = getObject(secondFriend);
  
  friend1.friends[secondFriend] = friendshipStatus;
  friend2.friends[firstFriend] = friendshipStatus;
  
  draw();
}