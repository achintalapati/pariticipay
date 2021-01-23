import React from 'react';
import './ProfilePicture.css';

function ProfilePicture() {
  return(
    <div className='profilePicture'>
      <img
        className='profilePicture_image'
        src='https://sports.cbsimg.net/images/blogs/Tom-Brady-shirtless-02-15-15.jpg'
        alt='profile'
      />
      <h1 className='profilePicture_name'>
        Tom Brady
      </h1>
    </div>
  )
}

export default ProfilePicture;
