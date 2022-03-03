import React, {useState} from "react";
import './Gallery.css';
import Counter from './Counter';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {E164Number} from 'libphonenumber-js/types'
const Moon = require('./images/moon.png');
const Phone =require('./images/phone.png');
const Mail = require('./images/mail.png');
const User =require('./images/user.png');

function Gallery() {
    const [name, setName] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()
    const [phone, setPhone] = useState<E164Number | undefined>()

    const [adults, setAdults] = useState<number | undefined>(0)
    const [kids, setKids] = useState<number | undefined>(0)
    const [rooms, setRooms] = useState<number | undefined>(0)


    function onClickComplete() {
        setName('');
        setEmail('');
        setPhone('');
        setAdults(0);
        setKids(0);
        setRooms(0);
    }

    return (
        <div className="gallery">
            <div className="content">
                <h1 className="header">
                    Book a trip
                </h1>
                <span className="description">
                  An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:
              </span>
                <div className="form">
                    <label>YOUR NAME</label>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <img src={User} alt="icon" className="input-icon"/>
                    </div>
                    <label>E-MAIL ADDRESS</label>
                    <div className="input-container">
                        <input
                            placeholder="Enter your email address"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <img src={Mail} alt="icon" className="input-icon"/>
                    </div>
                    <label>PHONE NUMBER</label>
                    <div className="input-container">
                        <PhoneInput
                            placeholder="Enter your phone number"
                            onChange={num => setPhone(num)}
                            value={phone}
                        />
                    </div>
                    <div className="counters">
                        <Counter title="ADULTS" onChange={setAdults} value={adults || 0}/>
                        <Counter title="KIDS" onChange={setKids} value={kids || 0}/>
                        <Counter title="CABIN ROOMS" onChange={setRooms} value={rooms || 0}/>
                    </div>
                </div>
                <button className="button" onClick={onClickComplete}>
                    COMPLETE YOUR BOOKING
                </button>
            </div>
            <div>
                <img src={Moon} alt="moon" className="moon"/>
            </div>
        </div>
    )
}

export default Gallery;
