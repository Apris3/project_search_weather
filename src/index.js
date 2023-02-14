const main = () =>{
  document.querySelector('.searchButton').addEventListener('click', ()=>{
    const input = document.querySelector('.city').value;
    
    

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=3b148903abb73d8680b8f04e96911c41`)
    .then(respon =>respon.json())
    .then(data => {

      const result = data.list[1];

      const name = document.querySelector('.cityName').innerHTML = `--- ${input} ---`.toUpperCase();

      const container = document.querySelector('.showData')
      container.innerHTML = '';

      const dat = new Date();
      console.log(dat.getDay());
      

      const date = document.createElement('p');
      date.classList.add('date');
      date.innerText = `Update : ${result.dt_txt}.`;

      const image = document.createElement('img');
      image.classList.add('img');
      image.setAttribute('src', `http://openweathermap.org/img/wn/)
            ${result.weather[0].icon}.png`);

      const maxTEmp = document.createElement('p');
      maxTEmp.classList.add('maxtemp');
      maxTEmp.innerText = `Temperatur maksimum : ${Math.round(result.main.temp_max -273.15)}°C.`; 

      const minTemp = document.createElement('p');
      minTemp.classList.add('mintemp');
      minTemp.innerText = `Temperatur minimum : ${Math.round(result.main.temp_min - 273.15)}°C.`;

      const desc = document.createElement('p');
      desc.classList.add('desc');
      desc.innerText = `Description : ${result.weather[0].main}.`

      const windSpeed = document.createElement('p');
      windSpeed.classList.add('windspeed');
      windSpeed.innerText = `Wind - Speed : ${result.wind.speed} m/s.`;


      const contain = document.createElement('div');
      contain.classList.add('container');
      contain.append(date, image, maxTEmp, minTemp, desc, windSpeed);

      

     
      container.append(contain);
    });
  });
  
};


export default main
