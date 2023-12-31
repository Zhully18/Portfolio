import React from 'react'
import Profile from '../Assets/assets/port_img.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home_image" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Agunrege Oyin</span> Frontend Developer
          </h1>

          <p className="home_description">
            I'm a Nigerian based web developer and frontend developer focused
            on crafting clean & user-friendly websites. I am passionate about building 
            excellent softwares that improves the lives of people.
          </p>

          <Link to='/about' className='button'>
            More About Me{''}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block">
        
      </div>
    </section>
  )
}

export default Home