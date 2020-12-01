
const submitbutton= document.getElementById('submitBtn');
const cityName =document.getElementById('cityName');
const city_name =document.getElementById('city_name');
const temp_realval =document.getElementById('temp_realval');
const temp_status =document.getElementById('temp_status');

const data_hide =document.querySelector('.middle_layer');



const date=document.getElementById('date');

const getinfo =async(e)=>{
    e.preventDefault();
    let cityVal =cityName.value;
    console.log(cityVal)

if (cityVal ===""){
    city_name.innerText='Please Enter Your City Name';
    data_hide.classList.add('data_hide');

}else{
    try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=12031526343650e3fd7102eb6f3bcb66`;
        const response = await fetch(url);
        const data =await response.json();
        // console.log(data);

        const arrData =[data];

        city_name.innerText=arrData[0].name;
        temp_realval.innerText=arrData[0].main.temp;

        const tempMood =  temp_status.innerText=arrData[0].weather[0].main;
        

    //    const tempMood = temp.innerText=arrData[0].main.temp;
           console.log(tempMood)
        // conditions to check sunny or cloudy
        if(tempMood ==="Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            
        }else if(tempMood ==="Clouds"){
            temp_status.innerHTML =" <i class='fas fa-cloud' style='color:##007bffa8;'></i>"
        }else if(tempMood ==="Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
        }else{
            temp_status.innerHTML = "<i class='fa fa-cloud-sun' style='color:#007bff61;'></i>"
        }

        data_hide.classList.remove('data_hide');
     

    }catch{
        city_name.innerText='Please Enter The City Name Properly';
        data_hide.classList.add('data_hide');
    }
   

}

}

submitbutton.addEventListener('click',getinfo);
 

// day





