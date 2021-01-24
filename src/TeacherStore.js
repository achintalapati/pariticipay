import './TeacherStore.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'


function TeacherStore() {
  return (
    <div className="Store">
    <h1 className="StoreTitle">Store</h1>
      <div className="ShopSection">
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
          <div className="AddBox">
            <IconButton className="ShopAdd">
              <Add className='add__icon' fontSize='medium' edge='end'/>
            </IconButton>
          </div>
        </div>
      </div>
      <div className="ShopSection">
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
          <div className="AddBox" justify="center">
            <IconButton className="ShopAdd">
              <Add className='add__icon' fontSize='medium' edge='end'/>
            </IconButton>
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
          <div className="AddBox" justify="center">
            <IconButton className="ShopAdd">
              <Add className='add__icon' fontSize='medium' edge='end'/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherStore;
