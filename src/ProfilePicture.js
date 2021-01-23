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
        <img
          className='profileRank'
          src='https://steamuserimages-a.akamaihd.net/ugc/771721592097475250/06D2F6D1482630BB6233794538C53B9706C7C5A6/'
          alt='rank'
        />
        <p1 className='points'>
          Rank 112 (Top 75%)

        </p1>
        <br />
        <p2 className='completedTasks'>
          42069 Points / 118 of 210 Tasks

        </p2>
    </div>



  )
}

export default ProfilePicture;
