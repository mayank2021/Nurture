import React,{useState} from 'react';
import success from '../../media/unicorn.png';
import {Animated} from "react-animated-css";
import './style.css';

const Success = ({show}) => {

    const [showBox, setShowBox] = useState(true);

    return (
     <Animated animationIn="fadeIn" animationInDuration="1500" animationOut="fadeOut" isVisible={show && showBox}>
        <div className={`${show && showBox?'success-main-container-show':null} success-main-container`}>
         <div className="success-container">
            <p className="success-close" onClick={() => localStorage.setItem('focus', JSON.stringify(''))} >&#x2716;</p>
            <img className="success-img" src={success}  alt="success" />
            <h2 className="success-heading">Great work!</h2>
          </div>
        </div>
      </Animated>  
        
    )
}

export default Success;
