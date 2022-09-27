//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const date = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=(yourAPIKEY)&date='+date+'&concept_tags=True'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.hdurl)
        document.getElementById("findME").innerHTML = `			<div class="hero min-h-screen" style="background-image: url(`+data.hdurl+`);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
  
          <div class="max-w-md">
  
          <h1 class="mb-5 text-5xl font-bold">NASA </h1>
  
          <h2  class="mb-2 text-2xl font-bold">Picture of the Day</h2>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="" value="">
      <button type="button" class="btn btn-primary" name="button">Type A Different Day</button>
          </div>
        </div>
      </div>`
        
          })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

