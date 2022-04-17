//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDef)

function getDef(){
    let word = document.querySelector('input').value
    document.querySelector('h3').innerHTML = ''
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let definition = []
      let partOfSpeech = []
      for(i=0; i<data[0].meanings.length; i++){
          definition[i] = data[0].meanings[i].definitions[0].definition
          partOfSpeech[i] = data[0].meanings[i].partOfSpeech
      }
      console.log(`Part of speech: ${partOfSpeech[0]}  Definition: ${definition[0]}`)
      for(i=0; i<definition.length; i++) {
          document.querySelector('h3').innerHTML += `${data[0].word} (${partOfSpeech[i]}) - ${definition[i]}<br/><br/>`
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
