const url = "https://restcountries.com/v3.1/all"
let container = document.getElementById("row")
let handleClick = async () =>{
  let result = await fetch(url)
  let data = await result.json()
  console.log(data)
  data.map((element)=>{
     container.innerHTML+=`
     <div class="card  m-4">
     <img src="${element.flags.png}" class="card-img-top img-fluid" alt="...">
     <div class="card-body">
     <p class="card-text">Country:${element.name.common}</p>
     <p class="card-text">Capital: ${element.capital}</p>
     <p class="card-text">Region: ${element.region}</p>
     
     </div>
   </div>`
  })


}
handleClick()