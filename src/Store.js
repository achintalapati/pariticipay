import './Store.css';
import React from 'react';


function Store() {
  return (
    <div className="Store">
      <div className="ProfilePictureShop">
        <h2>Profile Pictures</h2>
        <div className="ScrollableShop">
          <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
          <div className="PfpItem" style={{'background-image': 'url("https://www.nicepng.com/png/detail/96-961724_svg-transparent-download-dog-s-by-seng-hoong.png")'}}></div>
          <div className="PfpItem" style={{'background-image': 'url("https://sports.cbsimg.net/images/blogs/Tom-Brady-shirtless-02-15-15.jpg")'}}></div>
          <div className="PfpItem" style={{'background-image': 'url("https://sports.cbsimg.net/images/blogs/Tom-Brady-shirtless-02-15-15.jpg")'}}></div>
          <div className="PfpItem" style={{'background-image': 'url("https://sports.cbsimg.net/images/blogs/Tom-Brady-shirtless-02-15-15.jpg")'}}></div>
        </div>
      </div>
      <div className="MusicShop">
        <h2>Music</h2>
        <div className="ScrollableShop">
        </div>
      </div>
      <div className="SpecialShop">
        <h2>Special Items</h2>
        <div className="ScrollableShop">
        </div>
      </div>
    </div>
  )
}

export default Store;
