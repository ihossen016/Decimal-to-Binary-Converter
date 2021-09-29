const result = document.getElementById('result')
const submit = document.getElementById('submit')

function binary(e) {
  e.preventDefault()

  const num = document.getElementById('value').value

  if (num === '') {
    alert('Enter a Number')
  } else if (num < 0) {
    alert('Enter a Positive Number')
  } else {
    bNumber = Number(num).toString(2)
    result.value = bNumber
  }
}

submit.addEventListener('click', binary)
