function wrong(bab, container, number) {
  const containerId = "eval-container" + bab + container + 0;
  const questionId = "question" + bab + container + 0;
  const answerId1 = "answer" + bab + container + 1;
  const answerId2 = "answer" + bab + container + 2;
  const answerId3 = "answer" + bab + container + 3;
  const answerId4 = "answer" + bab + container + 4;

  console.log(bab, container, number);

  let containers = document.getElementById(containerId);
  let question = document.getElementById(questionId);
  let answer1 = document.getElementById(answerId1);
  let answer2 = document.getElementById(answerId2);
  let answer3 = document.getElementById(answerId3);
  let answer4 = document.getElementById(answerId4);

  //   styling
  containers.style.backgroundColor = "transparent";
  containers.style.border = ".125rem solid #F32013";
  answer4.style.color = "#F32013";
  question.style.color = "#F32013";
  answer1.style.color = "#F32013";
  answer2.style.color = "#F32013";
  answer3.style.color = "#F32013";
}

function right(bab, container, number) {
  const containerId = "eval-container" + bab + container + 0;
  const questionId = "question" + bab + container + 0;
  const rightAnswerId = "answer" + bab + container + number;

  console.log(bab, container, number);

  let containers = document.getElementById(containerId);
  let question = document.getElementById(questionId);
  let rightAnswer = document.getElementById(rightAnswerId);

  //   styling
  containers.style.backgroundColor = "white";
  containers.style.border = ".125rem solid #27ae60";
  question.style.color = "#27ae60";
  rightAnswer.style.color = "#27ae60";
}
