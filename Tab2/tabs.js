const $ = (str) => document.querySelector(str)
const $$ = (str) => document.querySelectorAll(str)
const $$items = $$('.tabs .tabs-items')
const $line = $('.tabs .line')

$$items.forEach(a => {
  a.onclick = function () {
    $$items.forEach(a => a.classList.remove('active'))
    this.classList.add('active')

    console.log(this.offsetWidth)//获取当前点击对象的宽度
    console.log(this.offsetLeft)//获取当前点击对象里最左边的距离
    $line.style.width = this.offsetWidth + 'px'
    $line.style.transform = `translateX(${this.offsetLeft}px)`

    let index = Array.from($$items).indexOf(this)
    $$('.tabs .tabs-son').forEach(a => a.classList.remove('active'))
    $$('.tabs .tabs-son')[index].classList.add('active')

  }
})