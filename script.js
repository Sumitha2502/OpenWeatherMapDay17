var container=document.createElement("div");
container.className="container bg-secondary";

var row=document.createElement("div");
row.className="row";

async function bar(data1){
    var res=await fetch("https://restcountries.com/v3.1/all")

    var data1=await res.json()
    for(var i=0;i<data1.length;i++){

        var col=document.createElement("div");
        col.className="col-md-4";
        col.innerHTML=`<div class="card" style="width: 18rem;">
        
        <div class="card-body bg-info">
          <h5 class="card-title bg-dark text-light p-2 text-center">
          ${data1[i].name.common}
          </h5>
          <img src="${data1[i].flags.png}" class="card-img-top imgsize" alt="...">
          <p class="card-text text-light text-center">Capital:${data1[i].capital}</p>
          <p class="card-text text-light text-center">Region:${data1[i].region}</p>
          <p class="card-text text-light text-center">Country Code:${data1[i].area}</p>
          <p class="card-text text-light text-center" id="${data1[i].name.common}">LonLat:${data1[i].latlng}</p>
          <button class="btn btn btn-outline-primary text-light" id="btn" onclick="foo(${data1[i].latlng[0]},${data1[i].latlng[1]},${data1[i].name.common})">Click for weather</button>
          
        </div>
      </div>`;

      row.append(col);
   
    container.append(row);
    document.body.append(container);
    }
  }

async function foo(lat,lon,name){

    var res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=754cb04888f4418cfd723d55f1709446`);
    let final_res=await  res2.json()
    console.log(final_res)
  // Clear existing content
  name.innerHTML="";

  // Fetch weather data
  const temperatureElement = document.createElement("p");
  temperatureElement.textContent = "Temperature: " + final_res.weather[0].main;

  // Append elements to the weather container div
  name.appendChild(temperatureElement);

};
bar(); 