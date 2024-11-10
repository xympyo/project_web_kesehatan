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

function check(bab, container, answer, number) {
  console.log("yes");
  if (bab == 1 && container == 1 && answer != "aromaterapi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (
    bab == 1 &&
    container == 2 &&
    answer != "Sebagai pengobatan konvensional"
  ) {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 1 && container == 3 && answer != "Herbal") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  //bab 2
  if (bab == 2 && container == 1 && answer != "Pemijatan") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 2 && container == 2 && answer != "meditasi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 2 && container == 3 && answer != "PCT") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  //bab 3
  if (bab == 3 && container == 1 && answer != "Meningkatkan Libido") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 3 && container == 2 && answer != "Anti Oksidant") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 3 && container == 3 && answer != "Inhalasi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  //bab 4
  if (bab == 4 && container == 1 && answer != "Meningkatkan tekanan darah") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 4 && container == 2 && answer != "Ibu yang ingin relaktasi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (
    bab == 4 &&
    container == 3 &&
    answer !=
      "Pijat laktasi merupakan pemijatan yang dilakukan pada daerah leher hingga payudara"
  ) {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  //bab5
  if (
    bab == 5 &&
    container == 1 &&
    answer != "Ibu nifas yang mengalami komplikasi selama persalinan"
  ) {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 5 && container == 2 && answer != "Bahagia") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 5 && container == 3 && answer != "Mencegah infeksi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (
    bab == 5 &&
    container == 4 &&
    answer != "Ibu yang mengalami kelainan ginjal, jantung dan paru-paru"
  ) {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  //   Bab 6
  if (bab == 6 && container == 1 && answer != "Polisakarida") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (bab == 6 && container == 2 && answer != "Memberikan rileksasi") {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
  if (
    bab == 6 &&
    container == 3 &&
    answer != "Ibu nifas yag alergi dengan lidah buaya"
  ) {
    let answerId = "answers" + bab + container + number;
    let answer = (document.getElementById(answerId).style.color = "#F32013");
  }
}
