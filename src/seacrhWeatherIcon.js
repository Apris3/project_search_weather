
const iconsWeather = (icon)=>{
    const image = document.createElement('img')
    if(icon === '10n'  || icon === '10d'){
    if(icon === '10n'){
      image.setAttribute('src', '../asset/assetweather/10n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/10d@2x.png')
    } 
    
    }else if(icon === '01n' || icon === '01d'){
    if(icon === '01n'){
      image.setAttribute('src', '../asset/assetweather/01n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/01d@2x.png')
    }
    
    }else if(icon === '02n' || icon === '02d'){
    if(icon === '02n'){
      image.setAttribute('src', '../asset/assetweather/02n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/02d@2x.png')
    }
     
    }else if(icon === '03n'|| icon === '03d'){
    if(icon === '03n'){
      image.setAttribute('src', '../asset/assetweather/03n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/03d@2x.png')
    } 
     
    }else if(icon === '04n' || icon === '04d'){
    if(icon === '04n'){
      image.setAttribute('src', '../asset/assetweather/04n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/04d@2x.png')
    } 
     
    }else if(icon === '09n' || icon === '09d'){
    if(icon === '09n'){
      image.setAttribute('src', '../asset/assetweather/09n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/09d@2x.png')
    } 
     
    }else if(icon === '11n' || icon === '11d'){
    if(icon === '11n'){
      image.setAttribute('src', '../asset/assetweather/11n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/11d@2x.png')
    } 
     
    }else if(icon === '13n' || icon === '13d'){
    if(icon === '13n'){
      image.setAttribute('src', '../asset/assetweather/13n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/13d@2x.png')
    } 
     
    }else if(icon === '50n' || icon === '50d'){
    if(icon === '50n'){
      image.setAttribute('src', '../asset/assetweather/50n@2x.png')
    }else{
      image.setAttribute('src', '../asset/assetweather/50d@2x.png')
    } 
      
    }else{
     image.setAttribute('src', '../asset/assetweather/01d@2x.png')
    }
    return image
   }

   export default iconsWeather;