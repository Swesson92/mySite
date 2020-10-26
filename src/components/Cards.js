import React from 'react'
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this stuff!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItems
                        src='images/gbg.jpg'
                        text='Explore different cities of our world from the sky' 
                        label='Street'
                        path='/content'
                        />

                        <CardItems
                        src='images/havet.jpg'
                        text='West coast of Sweden' 
                        label='Landscape'
                        path='/content'
                        />

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards
