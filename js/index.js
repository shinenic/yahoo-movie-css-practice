/* change tab option's color */
var selectedOption = 1
var options = document.querySelectorAll('.options > div')
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener(
    'click',
    (function (index) {
      return function () {
        if(index !== selectedOption) {
          options[index].classList.toggle('options--active')
          options[selectedOption].classList.toggle('options--active')
          selectedOption = index
        }
      }
    })(i)
  )
}
