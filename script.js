const userlocation=document.getElementById('user-location');
const  searchbutton=document.getElementById('search-button');

const cityname=document.getElementById('city-name');
const temp=document.getElementById('temp');
const currenttime=document.getElementById('currenttime');




 async function getdata (cityname) {
   const promise= await fetch(`https:api.weatherapi.com/v1/current.json?key=b1b5b760f3674981b7790725241312&q=${cityname}&aqi=yes`);

   return await promise.json();
}

searchbutton.addEventListener('click',async ()=>{
    const value=userlocation.value;
    const result=await getdata(value);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.country}`;
    temp.innerText=`${result.current.temp_c}`;
    currenttime.innerText=`${result.location.localtime}`;
    
})
const video1 = document.getElementById('background-video-1');
const video2 = document.getElementById('background-video-2');

// Alternate videos for smooth playback



