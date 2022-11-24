const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name?`, (answer1) => {
  console.log(`${answer1}! That's a beautiful name :) Nice to meet you!`);
  rl.question(`What's your favourite thing to do besides coding ;)?` , (answer2) => {
    console.log(`\n${answer2} is so fun!`);
    rl.question(`What is your favourite dessert?` , (answer3) => {
      console.log(`Yummy! ${answer3} is also mine as well... nvm I forgot I can't eat :(`);
      rl.question(`How tall are you?` , (answer4) => {
        console.log(`WOW, ${answer4}! I wish I could be that tall :/ `);
        rl.question(`Did you have fun engaging in this survey?` , (answer5) => {
          console.log(`Awesome! I'm glad your answer is: ${answer5}! I had a good time as well`);

  rl.close();
        })
      });
    });
});
})
