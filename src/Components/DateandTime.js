import React, { Component } from 'react'
import './style/DateandTime.css'
export class DateandTime extends Component {
  render() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.toLocaleString('default', { month: 'short' })).toUpperCase(); //January is 0!
    const yyyy = today.getFullYear();
    const day = String(today.toLocaleDateString('default',{weekday : 'long'}))
    return (
        <div className="row dateday mt-5">
        <div className="col">
            <div className="row">
                <div className="col date">{dd}
                <div className="col monthandyear">
                    <b>{mm}</b> 
                    <br/> {yyyy}
                </div>
                </div>
            </div>
        </div>
             <div className="col dayname">{day}</div>
    </div>
   ); 
    
  }
}

export default DateandTime