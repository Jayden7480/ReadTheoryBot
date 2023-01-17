function click(className) {
  try {
    document.getElementsByClassName(className)[0].click()
  } catch { }
}

let Awnsers = {}

function toBase64String(string) {
  return window.btoa(unescape(encodeURIComponent(string)));
}

function main() {
  setInterval(async () => {
    try {

      const question = document.getElementsByClassName('student-quiz-page__question')[0].innerText
      const buttons = document.getElementsByClassName('answer-card-wrapper')
      let hasAwnser = false

      try {
        if (Awnsers[question]) {
          hasAwnser = true
        }
      } catch { }

      for (const button of buttons) {
        if (hasAwnser == false) {
          button.click()
        }
        else {
          if (button.getElementsByClassName('answer-card__body')[0].innerText == Awnsers[question]) {
            button.click()
          }
        }
      }
    } catch (e) { console.log(e) }
    click('student-quiz-page__question-submit')
    click('next-btn')
    click('continue-btn')
    click('btn-next-quiz')
  }, 1000);
}
setTimeout(async () => {
  if (window.location.href.startsWith('https://readtheory.org')) {

    try {
      const title = document.getElementsByClassName('quiz-header-title')[0].innerText
      fetch('https://readtheoryapi.seppdev.repl.co/api/getawnsers', {
        headers: {
          "title": toBase64String(title)
        }
      }).then(async (response) => {
        const jsondata = await response.json()
        Awnsers = jsondata
        main()
      }).catch(err => {
        main()
      })
    }
    catch {
      main()
    }

  }
}, 1000)
