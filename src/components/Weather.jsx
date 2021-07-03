import React from 'react'
import "../css/main.css"
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';

// import RoomIcon from '@material-ui/icons/Room';

// javascirpt for date 

// for year

let curYear = new Date().getFullYear();

// for date

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


 

const weather = () => {
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <div className="weather_div">


                    <div className='date-container'>
                            <h2>{dayName}</h2>
                            <span style={{fontSize:"21px",}} > {day} {month} {curYear}</span> <br />
                            <span style={{fontSize:"18px" , }} > <RoomIcon  style={{fontSize:"18px",marginBottom:'2.2px'}}/> Paris</span>

                     </div>

                    

                    <div class="Hotbg">
                     <input type="text" name="" class="Hotbg-txt" placeholder="City Name..??"/>
                         <a href="#" class="Hotbg-btn">
                          <SearchIcon />
                         </a>
                    </div>
                   

                    


                    

                 </div>
                 

            </div>
       </div>
            
        </>
    )
}

export default weather
