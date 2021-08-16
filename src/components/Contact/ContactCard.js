import React from 'react'
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactCard() {
    return (
        <div>
            <div className='contact-card'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                 P.O.Box 235, kampala- Uganda
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                 0702913535 
                <br/>
                <br/> 0772678930
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                brighangel@gmail.com
              </p>
            </div>
          </div> 
          <div className='col-md-20' padding >
            <div className='row'>
              <div className='social'>
                <ul>
               
            <li className="social-icons">
              <a
                href="https://twitter.com/katereggaalex3"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alex-kateregga-79ba181b1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/prince_alex_katex/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ContactCard
