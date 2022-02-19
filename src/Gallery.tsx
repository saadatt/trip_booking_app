import React, {useState} from "react";
import './Gallery.css';
// @ts-ignore
import Moon from './images/moon.png';
// @ts-ignore
import Phone from './images/phone.png';
// @ts-ignore
import Mail from './images/mail.png';
// @ts-ignore
import User from './images/user.png';
import Counter from './Counter';

function Gallery() {
    const [name, setName] = useState<string|undefined>()
    const [email, setEmail] = useState<string|undefined>()
    const [phone, setPhone] = useState<string|undefined>()

    const [adults, setAdults] = useState<number|undefined>(0)
    const [kids, setKids] = useState<number|undefined>(0)
    const [rooms, setRooms] = useState<number|undefined>(0)

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
                      <input
                          placeholder="Enter your phone number"
                          onChange={e => setPhone(e.target.value)}
                          value={phone}
                      />
                      <img src={Phone} alt="icon" className="input-icon"/>
                  </div>
                  <div className="counters">
                      <Counter title="ADULTS" onChange={setAdults} value={adults || 0} />
                      <Counter title="KIDS" onChange={setKids} value={kids || 0} />
                      <Counter title="CABIN ROOMS" onChange={setRooms} value={rooms || 0} />
                  </div>
              </div>
              <button className="button" onClick={onClickComplete}>
                  COMPLETE YOUR BOOKING
              </button>
          </div>
          <img src={Moon} alt="moon" className="moon"/>
      </div>
  )
}

export default Gallery;
