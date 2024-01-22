import React, { useEffect,useState } from 'react';
import './Track.css';

const Track = () => {

    const [data, setdata] = useState([])

    const getTrack = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
          
            const actualData =await res.json();
            console.log(actualData.statewise);
            setdata(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err)
        }



    }


    useEffect(() => {
        getTrack();
    }, []);



    return (
        <>
            <div>
                <h1>Live</h1>
                <h1>Covid-19 Tracker</h1>
            </div>

            
            <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                <h1>INDIA</h1>
              </div>
             
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
              <h3>TOTAL RECOVERED</h3>

              <h1>{data.recovered}</h1>
              </div>
              
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
              <h3>TOTAL CONFIRMED</h3>
              <h1>{data.confirmed}</h1>
              </div>
              
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
              <h3>TOTAL DEATH</h3>
              <h1>{data.deaths}</h1>
              </div>
             
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
              <h3>TOTAL ACTIVE</h3>
              <h1>{data.active}</h1>
              </div>
             
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
             <h3> LAST UPDATE</h3>
             <h1>{data.lastupdatedtime}</h1>
              </div>
            </a>
          </div>
          
            
          </div>
        </div>
      
         
                
            
        </>
    )
}

export default Track;