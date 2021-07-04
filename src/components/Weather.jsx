import React ,{ useState }  from 'react'
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


    return (
        <>
        


    <div className="main_div">
        <p className=' display-4 text-light'>This weather app for citys< ArrowRightAltOutlinedIcon style={{fontSize:"48px",color:'white'}}/></p>
        <div className="center_div">


            <section className="time">
     
                 <p className='text-info dayName'>{dayName}</p>
                 <p className='dayMonthYear'>{day} {month} {curYear}</p>
                 <p className='text-light ctime'>{ctime} </p>
                 <p  className='location'><RoomIcon   className='text-warning location-icon' /> Paris</p>
            </section>

            <section className="Hotbg">
                     <input type="text" name="" className="Hotbg-txt" placeholder="City Name..??"/>
                         <b className="Hotbg-btn ">
                          <SearchIcon />
                         </b>
            </section>


          
            
            <div className='text-center wind  ' >
                <p className='avg-temp'> Average Temp :- <span className='text-success'>1636</span></p>
            </div>
    
            <div className="downtime" >
                
                <p style={{float:'left'}}>Max Temp :- <span className='text-danger'>46</span></p>
                 <p style={{float:'right'}}>Min Temp :- <span className='text-info'>342</span></p>
            </div>
            <div className='text-center ' style={{marginBottom:'2vh'}} >
                <p className='windspeed'> <SpeedIcon className='windspeed-icon ' /> Wind Speed :- <span className='text-warning'>1636</span></p>
            </div>
  
        </div>
    </div>
            
        </>
    )
}

export default Weather ;
