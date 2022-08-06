let req = require("readline-sync");

// Since I am already familiar with programming in python , that is why this code went this long
console.log("KPOP QUIZ\n\n");

let name = req.question("What's your name ? ")
console.log('\nHello  ' + name);
console.log("\nAre you really a kpop fan?? Let's play this fun quiz\n");
// console.log("Let's play this fun quiz\n");


console.log("Choose one to further begin the game !\n");
console.log("1. BTS Quiz\t\t\t2.Kdrama Quiz ")
// console.log("just write a or b in ans\n")
// array of objects contaning questions for option 1
var arr1 = [{
  q1: "\n1. How many makane Line are there in BTS?\na. 3\nb.4\nAns:  ",
  ans: 'a'
},
{
  q1: "2. How many hyung are there in BTS?\na.3\nb.4\nAns:  ",
  ans: 'b'
},
{
  q1: "3. Who is bunny  in BTS?\na.Jungkook\nb.V\nAns:  ",
  ans: 'a'
},
{
  q1: "4. Who is bear in BTS?\na.Jungkook\nb.V\nAns:   ",
  ans: 'b'
},
{
  q1: "5. Who is the leader of BTS?\na.Namjoon\nb.Jimin\nAns:   ",
  ans: 'a'
},
{
  q1: "6. collabroarted  female hollywood star name  who worked with BTS?\na.Halsey\nb.Ariana Grande\nAns:  ",
  ans: 'a'
}
]
//array of objects contating questions for option 2
// array of objects contaning questions for option 1
var arr2 = [{
  q1: "1. Is IU in scarlett ?\na.yes\nb.no\nAns:   ",
  ans: 'a'
},
{
  q1: "2. Goblin kdrama's famous scaff color?\na.red\nb.green\nAns:   ",
  ans: 'a'
},
{
  q1: "3. Has V acted in one of the anceint drama ?\na.yes\nb.no\nAns:    ",
  ans: 'yes'
},
{
  q1: "4. It's okay to not be __ ?\na.okay\nb.idk\nAns:    ",
  ans: 'a'
}

]
//Function for option 1
function bts(arr1) {
  let score = 0;
  for (i = 0; i < arr1.length; i++) {

    let ansUser = req.question(arr1[i].q1)
    let ansOfArr = arr1[i].ans;


    if (ansUser.toLowerCase() === ansOfArr.toLowerCase()) {
      console.log("Correct :)")
      score += 1;
    }

    else {
      console.log("OOps :( , it's wrong")
    }
    //if three attempts are done and still hasn't the user acheived single score , user will be knocked out
    if (score == 0 & i >= 2) {
      console.log('----------------------------\n');
      console.log("You are Out :(");
      break;
    }

    console.log("Current score is:  " + score);
    console.log('-----------------------------\n')
  }
  console.log(" your total score is :" + score);
  if (score === arr1.length) {
    console.log("\nWinner Winner Chicken dinner")
  }
}
// function for option 2

//Taking user's i/p and calling the respective function
let userInp = req.question("Ans: ");
console.log("Here we go :-\n")
if (userInp === '1') {
  bts(arr1);
}
// }
else {
  bts(arr2);
}
// arr of objects for 2 top performers with their scores
let toppers = [
  {
    name: "Shweta",
    score: '100'
  },
  {
    name: 'Raaji',
    score: '99'
  }
]
console.log('Before clicking exit button , see the top scores :- \n');
for (i = 0; i < toppers.length; i++) {
  console.log(toppers[i].name, " has scored ", toppers[i].score)
  // console.log('\n');
}
