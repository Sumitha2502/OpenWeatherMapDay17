var res=fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))
// console.log

var container=document.createElement("div")
container.className="container bg-secondary"

var row=document.createElement("div")
row.className="row"

function bar(data1){
    for(var i=0;i<data1.length;i++){
        var col=document.createElement("div")
        console.log(col)
        col.className="col-md-4"
        col.innerHTML=`<div class="card" style="width: 18rem;">
        
        <div class="card-body bg-info">
          <h5 class="card-title bg-dark text-light p-2 text-center">
          ${data1[i].name.common}
          </h5>
          <img src="${data1[i].flags.png}" class="card-img-top imgsize" alt="...">
          <p class="card-text text-light text-center">Capital:${data1[i].capital}</p>
          <p class="card-text text-light text-center">Region:${data1[i].region}</p>
          <p class="card-text text-light text-center">Country Code:${data1[i].area}</p>
          <p class="card-text text-light text-center">LonLat:${data1[i].latlng}</p>
          <a href="#" class="btn btn btn-outline-primary text-light" onClick=${foo(data1[i].wind)}>Click for weather</a>
        </div>
      </div>`

      
      row.append(col)
      container.append(row)
      document.body.append(container)
    }
 
}
function foo(data1){
    var div=document.createElement("div")
    div.setAttribute("id","weatherwind")
    div.innerHTML=`Weather :${data1}`
    console.log(div)

    // var weather=document.getElementById("weatherwind").value 
    // var p=document.createElement("p")
    // p.innerHTML=`${weather}`

    // div.append(weather)
    // document.body.append(div)
}

bar()