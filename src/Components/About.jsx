import React from 'react';
import {Container, Image} from "react-bootstrap";

function About() {
  return (
   
  <div id='aboutop'>
         <div id='imgdiv'><Image src="/asset/chef1.jpeg" alt="about us" id='Image'/></div>
         <div id='aboutext'>
          {/* <p>We believe that good food should not only taste great, but also be good for you.</p>  */}
          </div>
    <Container className='about'>
       <h1>About Us</h1>
       <p >Eldeefoods is a food and beverages company established in 2017.</p>
       <p>Our story began with a simple idea: to create high-quality, delicious food and drinks that everyone can enjoy.
       Our founder, Confidence, grew up in a family of foodies who loved to experiment with new flavors and ingredients. Her passion for cooking and creating unique dishes led her to pursue a career in the food industry.</p>
      <p>After years of working in restaurants and catering, Confidence realized that there was a need for healthy, flavorful food options that were accessible to everyone. She decided to start her own food and beverages company, and Eldeefoods was born.</p>
      <p>Today, Eldeefoods is known for our delicious and nutritious food and drinks, which are made with the freshest ingredients and prepared with care. We offer a wide range of options, from vegan and gluten-free meals to artisanal cocktails and craft beers.</p>
      <p>We are passionate about what we do, and we believe that food should bring people together. Whether you're looking for a quick bite or a leisurely meal with friends and family, Eldeefoods has something for everyone.</p>
      <p>Thank you for choosing Eldeefoods, and we hope to see you soon!</p>
      <h2>MISSION</h2>
      <p>At our restaurant, our mission is to create a world-class dining experience that leaves a lasting impression on our guests. We strive to achieve this through exceptional service, culinary innovation, and the use of only the freshest and finest ingredients.</p>
      <h2>VISION</h2>
      <p>Our vision is to be recognized as the premier restaurant in the world, renowned for our commitment to excellence in every aspect of our business. We want to inspire our guests with our culinary creations, engage them with our warm and welcoming atmosphere, and leave them with a desire to return again and again.</p>
      <h2>GOALS</h2>
      <p>Our goals are centered around creating an experience that is second to none. We aim to exceed our guests' expectations by providing impeccable service, exceptional cuisine, and an unforgettable atmosphere. We are committed to using sustainable and locally sourced ingredients, and we believe in giving back to the community through charitable initiatives.</p>
      <h2>AWARDS AND RECOGNITION</h2>
      <p>Over the years, we have been honored to receive numerous awards and recognitions. We have been recognized for our culinary innovation, exceptional service, and commitment to sustainability. We have received accolades from industry organizations, respected publications, and most importantly, from our guests.
      At our restaurant, we are passionate about creating a dining experience that is truly exceptional. We invite you to join us and experience the finest in culinary excellence, exceptional service, and warm hospitality.</p>
    
    </Container>
    </div>
  )
}

export default About;