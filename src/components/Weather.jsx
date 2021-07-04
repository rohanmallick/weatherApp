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
        
        {/* <div className="main_div">
            
            <div className="center_div">
                <div className="weather_div">


                    <section>
                     <h1 className='display-4 text-center mb-5'>Weather-App</h1>

                        <ul className='date-container '>
                            <li style={{fontSize:"22px",}}>{dayName}</li>
                            <li style={{fontSize:"19px",}}>{day} {month} {curYear}</li>
                            <li style={{fontSize:"19px",}} ><RoomIcon  style={{fontSize:"16px",}} /> Paris</li>
                            
                        </ul>
                    
                    </section>

                    

                    <section className="Hotbg">
                     <input type="text" name="" className="Hotbg-txt" placeholder="City Name..??"/>
                         <a href="#" className="Hotbg-btn">
                          <SearchIcon />
                         </a>
                    </section>
                   
                    <div className='dates'>
                        <span>Friday</span><br />
                        <span>sdgbklsegbp</span>
                    </div>


                    

                    
                   

                    


                    

                 </div>
                 

            </div>
       </div> */}


    <div class="main_div">
        <div class="center_div">
            <div class="time">
     
                 <p style={{fontSize:"25px",}}>{dayName}</p>
                 <p style={{fontSize:"19px",}}>{day} {month} {curYear}</p>
                 <p style={{fontSize:"19px",}}><RoomIcon  style={{fontSize:"16px",}} /> Paris</p>
            </div>

            <section className="Hotbg">
                     <input type="text" name="" className="Hotbg-txt" placeholder="City Name..??"/>
                         <a href="#" className="Hotbg-btn">
                          <SearchIcon />
                         </a>
            </section>
    
            <div class="downtime">
                <p>ha</p>
                <p>ha</p>
                <p>hrithik</p>
            </div>
  
        </div>
    </div>
            
        </>
    )
}

export default weather
