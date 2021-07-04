import React ,{ useState,useEffect }  from 'react'
import "../css/main.css"

// @material-ui

import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import SpeedIcon from '@material-ui/icons/Speed';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';

// javascirpt for date 
// for year & date
let curYear = new Date().getFullYear();
let day = new Date().getDate();
// for month
let m_names = ['January', 'February', 'March', 
               'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];
let curDate = new Date();
let month = m_names[curDate.getMonth()]; 
// for day name
let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let dayName = days[d.getDay()];

export const Weather = () => {
            
        // for  time 
        let curTime = new Date().toLocaleTimeString();
        const [ctime, setCtime] = useState(curTime);
        const UpdateTime = ()=>{ 
             let time = new Date().toLocaleTimeString();
             setCtime(time);
        }
        setInterval( UpdateTime,1000 )


        const[search,setSearch]=useState("kolkata")
        const[city,setCity]=useState()
        
        const [weather,setWeather]=useState(null)
        const weatherApi= async()=>{
        try {
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8e9530acde27eb60c6002aa895a581ff`
        const res= await fetch(url)
        const arrRes = await res.json()
        console.log(arrRes)
        setWeather(arrRes.main)
      
        } catch (error) {
        alert ('city not found')
    
    }

           

        }
      const inputEvn=()=>{
          setSearch(city)
         
      }
      useEffect(()=>{weatherApi()},[search]);


    return (
        <>
        


    <div className="main_div">
        <p className=' display-4 text-light'>This weather app for citys< ArrowRightAltOutlinedIcon style={{fontSize:"48px",color:'white'}}/></p>
        <div className="center_div">


            <section className="time">
     
                 <p className='text-info dayName'>{dayName}</p>
                 <p className='dayMonthYear'>{day} {month} {curYear}</p>
                 <p className='text-light ctime'>{ctime} </p>
                 <p  className='location'><RoomIcon   className='text-warning location-icon' />{search}</p>
                
            </section>

            <section className="Hotbg">
                     <input type="text" name="" className="Hotbg-txt" placeholder="City Name..??" onChange={(e)=>{
                         setCity(e.target.value)
                     }}/>
                         <b className="Hotbg-btn " onClick={inputEvn}>
                          <SearchIcon />
                         </b>
            </section>


            {!weather ? (
            <h1 className="display-5 " style={{marginTop:'19vh'}}>No city found</h1>
          ) : (
              <>
               <div className='text-center wind  ' >
                <p className='avg-temp'> Average Temp :- <span className='text-success'>{weather.temp}&deg;C</span></p>
            </div>
    
            <div className="downtime" >
                
                <p style={{float:'left'}}>Max :- <span className='text-danger'>{weather.temp_max} &deg;C</span></p>
                 <p style={{float:'right'}}>Min :- <span className='text-info'>{weather.temp_min} &deg;C</span></p>
            </div>
            <div className='text-center ' style={{marginBottom:'2vh'}} >
                <p className='windspeed'> <SpeedIcon className='windspeed-icon ' /> Pressure:- <span className='text-warning'>{weather.pressure}</span></p>
            </div>
            </>
          )}
  
        </div>
    </div>
            
        </>
    )
}

export default Weather ;
