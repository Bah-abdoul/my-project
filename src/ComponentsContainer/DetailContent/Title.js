import React from 'react'
import './Title.css';

export default function Title() {
  return (
<div className='title-container header_info'>

<h2 className ="headerDetail">Class schedule in PUET</h2>

  <div className="contentDetails">
      <div className ="langauge-options languagepicker roundborders">
      <ul>
          <a href="/" onclick="return false;">
            <li><img src="./images/langukraine.png" alt='Ukraine language'/><span>Ukraine</span></li>
          </a>
            <a href="/?lang=en">
              <li><img src="./images/lang_usa.png" alt='english language'/><span>English</span></li>
            </a>
      </ul>
    </div> 
 </div>




   
  </div>
  )
}
