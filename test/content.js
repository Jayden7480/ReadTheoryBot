function click(className) {
  try {
    document.getElementsByClassName(className)[0].click()
  } catch (e) {}
}

setInterval(async () => {
  try {
    const buttons = document.getElementsByClassName('answer-card-wrapper')
    for (const button of buttons) {
      // console.log(button.getElementsByClassName('answer-card__body')[0].innerHTML)
      button.click()
    }
  } catch (e) {}
  click('student-quiz-page__question-submit')
  console.log(document.getElementsByClassName('marked')[0].document.getElementsByClassName('answer-card__body')[0].innerHTML)

  // click(' student-quiz-page__question-next')
  // document.getElementsByClassName('student-quiz-page__question-next')[0].click()
}, 100);