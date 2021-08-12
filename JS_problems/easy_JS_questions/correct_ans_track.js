// const readline = require("readline");

var ques_ans = [
  ["how many states", 28],
  ["how many legs", 2],
  ["how many oceans", 5]
];
var answers = [];
var correct_questions_answered = [];
var incorrect_questions_answered = [];
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// ques_ans.forEach(set => {
//   console.log(set[0]);

//   //   rl.question(, function(answer) {
//   //     answers.push(answer);
//   //     rl.close();
//   //   });
// });
// // console.log(answers);

const prompt = require("prompt");

prompt.start();
prompt.get([ques_ans[0][0], ques_ans[1][0], ques_ans[2][0]], function(
  err,
  result
) {
  if (err) {
    console.log(err);
    return 1;
  }
  answers = Object.entries(result);
  console.log(answers);
  for (var i = 0; i <= answers.length - 1; i++) {
    // console.log(answers[i][1]);
    if (answers[i][1] == ques_ans[i][1]) {
      correct_questions_answered.push(answers[i]);
    } else {
      incorrect_questions_answered.push(answers[i]);
    }
  }
  console.log("Correct questions answered   :" + correct_questions_answered);
  console.log("InCorrect questions answered  :" + incorrect_questions_answered);
});
