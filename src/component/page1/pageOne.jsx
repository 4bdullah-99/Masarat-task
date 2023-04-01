import React, { Component } from 'react';
import "./pageOne.css"

class BackGround extends Component {
   
    state = {  }
    render() { 
        return ( 
            <div className='head'>
                <div className='filter'>
                   <div className='para'>
                        <p className='dox'>
                            Book your dentist according to your case 
                        </p>
                        <h1>
                            Make your Smile Happier with us 
                        </h1>
                        <br></br>
                        <button className='button-im'>Book Now</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BackGround;