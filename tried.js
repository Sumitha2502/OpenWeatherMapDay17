var container=document.createElement("div")
container.className="container bg-secondary"

var row=document.createElement("div")
row.className="row"


async function bar(data1){
    var res=await fetch("https://restcountries.com/v3.1/all")

    var data1=await res.json()
    for(var i=0;i<data1.length;i++){
      
        var col=document.createElement("div")
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
          <button class="btn btn btn-outline-primary text-light" id="btn">Click for weather</button>
        </div>
      </div>`

      row.append(col)
      container.append(row)
      document.body.append(container)
    }  
    }
 
    




async function foo(lat,lon,name){
  

    // var res=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=754cb04888f4418cfd723d55f1709446`)
    // var res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=754cb04888f4418cfd723d55f1709446`)
    
    let final_res=await  res2.json()
    
    console.log(final_res)

    






    // var divc=document.getElementsByClassName("card")
    // console.log(divc)

    // var weatherData=document.createElement("div")
    // weatherData.innerHTML="Wind"
    
    // var div=document.createElement("div")
    // div.className="container"
    // var row1=document.createElement("div")
    // row1.setAttribute("id","deg")
    // row1.innerHTML=final_res.wind.deg
    // var row2=document.createElement("div")
    // row2.setAttribute("id","gust")
    // row2.innerHTML=final_res.wind.gust
    // var row3=document.createElement("div")
    // row3.setAttribute("id","speed")
    // row3.innerHTML=final_res.wind.speed

    // div.append(row1,row2,row3)
    // weatherData.append(div)
    // divc.append(weatherData)
    // document.body.append(divc)

//  var data0=document.getElementById("deg")
   
//     var data2=document.getElementById("gust") 

//     var data3=document.getElementById("speed") 

//    console.log(data0,data2,data3)
    
  
    // var div1=document.createElement("div")
    // div1.setAttribute("class","data")

    // var row1=document.createElement("div")
    // row1.innerHTML=`Deg: ${final_res.wind.deg}`

    // var row2=document.createElement("div")
    // row2.innerHTML=`Gust: ${final_res.wind.gust}`

    // var row3=document.createElement("div")
    // row3.innerHTML=`Speed: ${final_res.wind.speed}`

    // div1.append(row1,row2,row3)
    // document.body.append(div1)
    


    // console.log(final_res)
    
}
bar() 


    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttons = document.querySelectorAll('#btn');
    
        const newDiv = document.createElement('div');
       
        newDiv.textContent = 'New div added';
         
    const card = button.closest('.card');
    
        card.appendChild(newDiv);
      })
    })
console.log(buttons)




let final_res = await res2.json();

  console.log(final_res);
  console.log(name);
  
  // Clear existing content
  name.innerHTML = "";
  // Fetch weather data

  const temperatureElement = document.createElement("p");
  temperatureElement.textContent = "Temperature: " + final_res.weather[0].description;

  // Append elements to the weather container div
  name.appendChild(temperatureElement);