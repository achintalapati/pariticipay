import './Store.css';
import React from 'react';


function Store() {
  return (
    <div className="Store">
      <div className="ProfilePictureShop">
        <h2>Profile Pictures</h2>
        <div className="ScrollableShop">
          <div className="ShopItem">
            <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
            <h3 className="ShopItemName">Tiger</h3>
            <p className="Cost">50 points</p>
          </div>
          <div className="ShopItem">
            <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
            <h3 className="ShopItemName">Tiger</h3>
            <p className="Cost">50 points</p>
          </div>
          <div className="ShopItem">
            <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
            <h3 className="ShopItemName">Tiger</h3>
            <p className="Cost">50 points</p>
          </div>
          <div className="ShopItem">
            <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
            <h3 className="ShopItemName">Tiger</h3>
            <p className="Cost">50 points</p>
          </div>
          <div className="ShopItem">
            <div className="PfpItem" style={{'background-image': 'url("https://images-na.ssl-images-amazon.com/images/I/61x6iuoEbLL._AC_SX522_.jpg")'}}></div>
            <h3 className="ShopItemName">Tiger</h3>
            <p className="Cost">50 points</p>
          </div>
        </div>
      </div>
      <div className="MusicShop">
        <h2>Music</h2>
        <div className="ScrollableShop">
          <div className="ShopItem">
            <div className="MusicItem" style={{'background-image': 'url("https://i1.sndcdn.com/artworks-000316381740-hsyz7i-t500x500.jpg")'}}></div>
            <h3 className="ShopItemName">Believer</h3>
            <p className="Cost">100 points</p>
          </div>
          <div className="ShopItem">
            <div className="MusicItem" style={{'background-image': 'url("https://i1.sndcdn.com/artworks-000316381740-hsyz7i-t500x500.jpg")'}}></div>
            <h3 className="ShopItemName">Believer</h3>
            <p className="Cost">100 points</p>
          </div>
          <div className="ShopItem">
            <div className="MusicItem" style={{'background-image': 'url("https://i1.sndcdn.com/artworks-000316381740-hsyz7i-t500x500.jpg")'}}></div>
            <h3 className="ShopItemName">Believer</h3>
            <p className="Cost">100 points</p>
          </div>
        </div>
      </div>
      <div className="SpecialShop">
        <h2>Special Items</h2>
        <div className="ScrollableShop">
          <div className="ShopItem">
            <div className="SpecialItem" style={{'background-image': 'url("")'}}></div>
            <h3 className="ShopItemName">Homework Pass</h3>
            <p className="Cost">1000 points</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store;
