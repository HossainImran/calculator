let number=localStorage.getItem('number') || '';
    updateCalculation()

    function calculation(value) {
      number += value;
      updateCalculation()
      localStorage.setItem('number', number)
    }
    function updateCalculation() {
      document.querySelector('.js-input').innerHTML = number;
    }