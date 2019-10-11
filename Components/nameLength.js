const lettercount = (x) => { return x.length() }

const nameLength = new VTTCue({
  el: '#nameLength',
  data: {
    name: 'Justin',
  },
  computed: {
    result: function () {
      const i = this.name
      return `The number of letters in the chosen name is ${lettercount(i)}.`
    }
  }

})
