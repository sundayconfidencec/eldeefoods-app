import React, { useState } from 'react';
import { InstaIcon, FacebIcon, TwitIcon } from  "./Icons";

function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = (event) => {
    const input = event.target;
    if (input.value.trim() === '') {
      input.style.borderColor = 'initial'; // Reset to original border color
    } else {
      input.style.borderColor = 'red'; // Change border color to red
    }
  }
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);
  return (
   <div className='bg'>
     <div className="booking-page">
      <div className="booking-page-left">
        <h2 id='h2'>Contact Us</h2>
       <div id='mylink'>
       <p >Email: </p><a  href="mailto:eldeefoodsandbeverages@gmail.co">eldeefoodsandbeverages@gmail.com</a>
        <p>Phone:</p> <a href="tel:+233599568911">+233599568911</a>
       </div>
        <p>Location:</p><location> East Legon, Accra Ghana</location>
        <h2 id='h2'>Follow Us</h2>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100083006035285" target="_blank" rel="noopener noreferrer"><FacebIcon/></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><TwitIcon/></a>
          <a href="https://www.instagram.com/eldeefoods" target="_blank" rel="noopener noreferrer"><InstaIcon/></a>
        </div>
      </div>
      <div className="booking-page-right">
        <div>
        <h2>Book Now</h2>
        <form>
        <label htmlFor="booking-type">Select Booking Type:</label>
          <select id="booking-type" name="booking-type">
            <option value="select">select</option>
            <option value="hall-booking">Hall Renting</option>
            <option value="catering-booking">Outdoor Catering Services</option>
            <option value="private-dining-booking">Private Dining</option>
            <option value="table-reservation-booking">Table Reservation</option>
          </select>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder='Full Name' value={name} onChange={handleNameChange} onInput={handleInputChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder='Active email address' name="email" value={email} onChange={handleEmailChange} onInput={handleInputChange} required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" placeholder='Active phone number' value={phone} onChange={handlePhoneChange} onInput={handleInputChange} required />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={date} onChange={handleDateChange} onInput={handleInputChange} required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" value={time} onChange={handleTimeChange} onInput={handleInputChange} required />

      <label htmlFor="message">Message:</label>
      <textarea placeholder='Optional' id="message" name="message" value={message} onChange={handleMessageChange} onInput={handleInputChange}></textarea>

      <input type="submit" value="Submit" />
    </form>
        </div>
       
      </div>
    </div>
    </div>
  );
}

export default Booking;
