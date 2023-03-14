import iconsWeather from "./seacrhWeatherIcon.js";
const template = (el) =>{

      const date = document.createElement('p');
      date.classList.add('date');
      date.innerText = `Update : ${el.dt_txt}.`;

      const divImages = document.createElement('div')
    //   const icon = document.createElement('img')
    //   icon.setAttribute('src', `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`)
      console.log(`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`);
      //console.log()
      const images = iconsWeather(el.weather[0].icon);
      divImages.appendChild(images)
      console.log(divImages)

      const maxTEmp = document.createElement('p');
      maxTEmp.classList.add('maxtemp');
      maxTEmp.innerText = `Temperatur maksimum : ${Math.round(el.main.temp_max - 273.15)}°C.`;

      const minTemp = document.createElement('p');
      minTemp.classList.add('mintemp');
      minTemp.innerText = `Temperatur minimum : ${Math.round(el.main.temp_min - 273.15)}°C.`;

      const desc = document.createElement('p');
      desc.classList.add('desc');
      desc.innerText = `Description : ${el.weather[0].main}.`;

      const windSpeed = document.createElement('p');
      windSpeed.classList.add('windspeed');
      windSpeed.innerText = `Wind - Speed : ${el.wind.speed} m/s.`;


      const contain = document.createElement('div');
      contain.classList.add('container');
      contain.append(date, divImages, maxTEmp, minTemp, desc, windSpeed);

    return contain
}

export default template;