import template from "./template.js";

const main = () =>{
  document.querySelector('.searchButton').addEventListener('click', async ()=>{
    const input = document.querySelector('.city');
   

    try {
      const respon = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=3b148903abb73d8680b8f04e96911c41`);
      const data = await respon.json();
      const result_1 = data.list[1];

      document.querySelector('.cityName').innerHTML = `--- ${input.value} ---`.toUpperCase();

      const container = document.querySelector('.showData');
      container.innerHTML = '';

      // template
      const temp = template(result_1)
      console.log(temp)
      container.append(temp)
    }catch(error){
     alert('data tidak ditemukan \n' + error)
    }
  });
  
};


export default main
