function click(className) {
  try {
    document.getElementsByClassName(className)[0].click()
  } catch {}
}

function GetAwnser() {
  let Awnser = ''
  try {
    // console.log(document.getElementsByClassName('marked')[0].document.getElementsByClassName('answer-card__body')[0].innerHTML)
    Awnser =  document.getElementsByClassName('answer-card__mark')[0].parentElement.getElementsByClassName('answer-card__body')[0].innerText;
  } catch {}

  if (Awnser == '') {
    try {
      Awnser = document.getElementsByClassName('marked')[0].getElementsByClassName('answer-card__body')[0].innerText
    } catch {}
  }

  return Awnser
}

setInterval(async () => {
  try {
    const buttons = document.getElementsByClassName('answer-card-wrapper')
    for (const button of buttons) {
      button.click()
    }
  } catch {}
  let Awnser = GetAwnser()
  click('student-quiz-page__question-submit')
  Awnser = GetAwnser()
  click('next-btn')
  Awnser = GetAwnser()
  click('continue-btn')
  Awnser = GetAwnser()
  click('btn-next-quiz')
  Awnser = GetAwnser()

  fetch('https://readtheoryapi.seppdev.repl.co')

  console.log(Awnser);
}, 3000);
