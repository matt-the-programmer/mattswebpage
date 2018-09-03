import React from 'react';
import './Resume.css';
import './backofresume.png';
import './frontofresume.png';

const resume = () => {
    return (
        <div className="Resume">
            <img className="page2" src={require('./backofresume.png')} />
        </div>
    )
};
export default resume;