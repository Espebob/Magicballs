//let userName = '';
// This initializes the variable userName with an empty string
let userName = 'Jane';
// This initializes the variable userName with the string 'John'


userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion ='Are you real?';

console.log(`User ${userName} asked: ${userQuestion}`);
//assign a question to userName variable that we want to ask the Magic Eight Ball

const randomNumber = Math.floor(Math.random() * 8);
//generate a random number between 0 and 7

let eightBall = ''; 
//initializing the variable eightBall with an empty string


/*
if (randomNumber === 0) 
{
    eightBall = 'It is certain';
}
else if (randomNumber === 1) 
{
    eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) 
{
    eightBall = 'Reply hazy try again';
} 
else if (randomNumber === 3) 
{
    eightBall = 'Cannot predict now';
} 
else if (randomNumber === 4) 
{
    eightBall = 'Do not count on it';
} 
else if (randomNumber === 5)
{
    eightBall = 'My sources say no';
} 
else if (randomNumber === 6) 
{
    eightBall = 'Outlook not so good';
} 
else if (randomNumber === 7) 
{
    eightBall = 'Signs point to yes';
}
else {
    eightBall = 'Invalid randomNumber generated';
}
*/




switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Unknown'; // In case randomNumber is unexpected
    break;
}

console.log(eightBall);