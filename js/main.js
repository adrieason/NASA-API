//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const date = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=vr8g1JAG17Z0Y7viCkwKoOVu3FqQRZs1TSf6UQVQ&date='+date+'&concept_tags=True'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.hdurl) 
        document.getElementById("picHere").innerHTML = "<img src='"+data.hdurl+"'>"   
          })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

