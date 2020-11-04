import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join me!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe
                </p>

                <div className="input-areas">
                    <form>
                        <input type='email'
                                name='email'
                                placeholder='Your Email'
                                className='footer-input' />

                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>

                </div>
            </section>

            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/swesson92/"}} target="_blank">Instagram</Link>
            <Link to=''>Youtube</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>GitHub</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Logo
            </Link>
          </div>
          <small class='website-rights'>Robin Svensson © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/swesson92/"}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
    
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
            
        </div>
    )
}

export default Footer
