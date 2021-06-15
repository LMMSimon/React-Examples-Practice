import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../images/img-9.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img8 from '../images/img-8.jpg';

export default function Cards() {
    return (
        <div>
            <div className='cards'>
                <h1>Check out these EEpix destinations!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src={img9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                            />
                            <CardItem 
                            src={img2}
                            text="Discover the lush beaches of the Kon Tiki Isles"
                            label='Luxury'
                            path='/services'
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src={img3}
                            text="Set sail in the Atlantic Ocean visiting Unchartered Waters"
                            label='Excitement'
                            path='/services'
                            />
                            <CardItem 
                            src={img4}
                            text="Experience football on the Dead Sea"
                            label='Activity'
                            path='/services'
                            />
                              <CardItem 
                            src={img8}
                            text="Ride through the Sahara Desert with a guided caravan"
                            label='Adventure'
                            path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
