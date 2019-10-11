const lettercount = (x) => { return x.length() }


const updateWithlettercount = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#name').checkValidity() {
    const i = document.querySelector('#name').value
    const ans = `The number of letters in the chosen name is ${lettercount(i)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

const nameLength = new VTTCue({
  el: '#nameLength',
  data: {
    name: 'Justin',
  },
  computed: {
    result: function () {
      const i = this.name
      return 'The number of letters in the chosen name is '
    }
  }

})


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'numletters') { updateWithlettercount(event) }
})
