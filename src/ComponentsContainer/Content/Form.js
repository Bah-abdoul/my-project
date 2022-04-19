import React from 'react';
// import BackgroundImage from './images/logoreal.png';
import './Form.css';



export default function Form() {
    return (
  
           

<div className='flex-container'> 
<div className="container">

  <form action="/action_page.php">

{/* <div className='date-container'>
  <div className="row">
    <div className="col-75">
      <label for="sdate">Start date:</label>
    </div>
    <div className="col-25">
      <input type="date" id="sdate" name="start-date" />
    </div>
  </div>

  <div className="row">
    <div className="col-75">
      <label for="edate">End date:</label>
    </div>
    <div className="col-25">
      <input type="date" id="sdate" name="etart-date" />
    </div>
  </div>

  </div> */}




<div class="div-left">
            <label for="start_date">Start Date:</label>
            <div class="input-control text" data-role="datepicker" data-locale="ua" data-week-start="1" data-format="d.mm.yyyy" data-preset="2022-04-08" id="start_date">
                <input type="date" name="date_s"/>
                <button class="button"><span class="mif-calendar"></span></button>
            </div>
        </div>

        <div class="div-right">
            <label for="end_date">End Date:</label>
            <div class="input-control text" data-role="datepicker" data-locale="ua" data-week-start="1" data-format="d.mm.yyyy" data-preset="2022-04-14" id="end_date">
                <input type="date" name="date_e"/>
                <button class="button"><span class="mif-calendar"></span></button>
            </div>
        </div>




  <div className="row">
    <div className="col-75">
      <label for="fname">Professor</label>
    </div>
    <div className="col-25">
     {/* <input type="text" id="lname" name="lecturerName" placeholder="Professor.." />  */}
<select name="professor" id="prof-select" aria-hidden ='true'>
    <option value="">...</option>
    <option value="dog">Marina</option>
    <option value="cat">Yuri</option>
    <option value="hamster">Olga</option>
    <option value="parrot">Svetlana</option>
    <option value="spider">Chilikina</option>
    <option value="goldfish">Oleh</option>
</select>
    </div>
  </div>
  <div className="row">
    <div className="col-75">
      <label for="room"> Room</label>
    </div>
    <div className="col-25">
      {/* <input type="text" id="lroom" placeholder="Lecture room/hall.." /> */}

  <select name="room" id="room-select">
    <option value="">...</option>
    <option value="dog">102</option>
    <option value="cat">122a</option>
    <option value="hamster">325A</option>
    <option value="parrot">100</option>
    <option value="spider">101</option>
    <option value="goldfish">104</option>
</select>

    </div>
  </div>

  <div className="row">
    <div className="col-75">
      <label for="group">Group</label>
    </div>
    <div className="col-25">
      {/* <input type="text" id="grpname" placeholder="group.." /> */}
<select name="groop" id="goop-select">
    <option value="">...</option>
    <option value="dog">CSI eng 11</option>
    <option value="cat">BM eng 41</option>
    <option value="hamster">Kh UA 21</option>
    <option value="parrot">Account 101</option>
    <option value="spider">Finance eng 112</option>
    <option value="goldfish">BFM eng 1003</option>
</select>

    </div>
  </div>

  <div className='btn'>

  <div className="btn-left" >
      <button type='submit'>Reset</button>
    </div>

    <div className="btn-right">
      <button type='submit'>Get</button>
    </div>

  {/* <div className="row">
     
  </div>

  <div className="row">
     
  </div> */}

  </div>

  </form>


</div>

 <div className='information-text'>
   <h2> Dear students and teachers of PUET!</h2>

<p>With the help of the information service "Schedule of classes in PUET" you have the opportunity to conveniently and timely receive relevant information about the employment of the group, teacher and audience.
To get the information you need, fill in at least one of the fields "Teacher", "Audience" or "Group". The "Start date" and "End date" fields are set for the current week, but can be changed by the user.
If you fill in the fields "Teacher", "Group" and "Audience" at the same time, you will receive a schedule of classes for the selected group and teacher, which take place in a given audience.
After filling out the form, click "Get".
You can view the learning schedule with mobile devices and gadgets that have access to the Internet.
Warning! The schedule is subject to change!</p>

 </div>
 </div>

            
 
    )
}
