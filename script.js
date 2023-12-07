
const key = "nAEVgpBQlaZSwCa17aMOJjmktWKbt06DYVWSlADrQnkJIoEX0Cl9wkiH"

document.getElementById('loadBtn').addEventListener('click', async function(){
    //scaricare i dati            
    const response = await fetch('https://api.pexels.com/v1/search?query=cars&per_page=10', {headers:{Authorization: key}})
    const data = await response.json()
    console.log(data)
    let htmlCards = ""
    //ciclare l'array e per ogni elemento creare una card
    for (let i = 0; i < data.photos.length; i++){
        const img = data.photos[i];
          /*console.log(img.url)*/
          //creare le card
          htmlCards = htmlCards +`<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="${img.src.original}"/>
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>`
    }

document.getElementById('cards').innerHTML = htmlCards
   
})