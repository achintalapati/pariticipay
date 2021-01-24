import './Store.css';
import React from 'react';


function Store() {
  return (
    <div className="Store">
      <h1 className="StoreTitle">Store</h1>
      <div className="ShopSection">
        <h2>Profile Pictures</h2>
        <div className="ScrollableShop">
        <div className="ShopItem">
          <div className="PfpItem" style={{'background-image': 'url("https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2ad4.png")'}}></div>
          <h3 className="ShopItemName">Basketball</h3>
          <p className="Cost">20 points</p>
        </div>
        <div className="ShopItem">
          <div className="PfpItem" style={{'background-image': 'url("https://assets.stickpng.com/images/580b57fbd9996e24bc43c051.png")'}}></div>
          <h3 className="ShopItemName">Iron Man</h3>
          <p className="Cost">200 points</p>
        </div>
        <div className="ShopItem">
          <div className="PfpItem" style={{'background-image': 'url("https://assets.stickpng.com/images/5853bcc7ec0c270fc2f62de8.png")'}}></div>
          <h3 className="ShopItemName">Spiderman</h3>
          <p className="Cost">2 points</p>
        </div>
        <div className="ShopItem">
          <div className="PfpItem" style={{'background-image': 'url("https://lh3.googleusercontent.com/proxy/GcJzOB4TmV7UOuYYNsUodfLgv6YL1s8BIjejfJBh3RPr1VF6GbJkPxVwrB_qT9q3YXkBZCQ-Yxg2aCGDiXoJV6H_4NHDiDk")'}}></div>
          <h3 className="ShopItemName">Soccer Ball</h3>
          <p className="Cost">500 points</p>
        </div>
        </div>
      </div>
      <div className="ShopSection">
        <h2>Music</h2>
        <div className="ScrollableShop">
          <div className="ShopItem">
            <div className="MusicItem" style={{'background-image': 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/what-is-baby-shark-1548869443.jpg?crop=0.526xw:1.00xh;0.342xw,0&resize=480:*")'}}></div>
            <h3 className="ShopItemName">Baby Shark</h3>
            <p className="Cost">100 points</p>
          </div>
          <div className="ShopItem">
            <div className="MusicItem" style={{'background-image': 'url("https://i1.sndcdn.com/artworks-000316381740-hsyz7i-t500x500.jpg")'}}></div>
            <h3 className="ShopItemName">Believer</h3>
            <p className="Cost">100 points</p>
          </div>
        </div>
      </div>
      <div className="ShopSection">
        <h2>Special Items</h2>
        <div className="ScrollableShop">
          <div className="ShopItem">
            <div className="SpecialItem"></div>
            <h3 className="ShopItemName">Homework Pass</h3>
            <p className="Cost">1000 points</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store;
