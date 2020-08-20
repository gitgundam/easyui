const $ = (str) => document.querySelector(str)
    const $$ = (str) => document.querySelectorAll(str)
    const $$items = $$('.tabs .tabs-items')

    $$items.forEach(a => {
      a.onclick = function () {
        $$items.forEach(a => a.classList.remove('active'))
        this.classList.add('active')

        let index = Array.from($$items).indexOf(this)
        $$('.tabs .tabs-son').forEach(a=>a.classList.remove('active'))
        $$('.tabs .tabs-son')[index].classList.add('active')
      }
    })