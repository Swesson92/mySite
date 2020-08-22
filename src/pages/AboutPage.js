import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return (

        <div>
            <Hero title={props.title}/>

            <Content>
                <p>  I am 28 years old and live in Sweden. I've got experience working with both backend(Java), frontend (Angular/React) development.
                     Im fond of creating value from data and display it in different forms.
                     <br/>
                     <br/>
                     If you are intrested in what i've been doing associated to development, feel free to check out my GitHub profile.
                     <br/>
                     Besides software development, i do alot of drone photography. 
                     <br/>
                     On my Home page you will find a link to my image bank/youtube for content created by me! </p>


                     <hr style={{borderTop: '3px solid #757F9A', width: '100%'}} />
                     <h5>Nationality</h5>
                     <p> - Swedish</p>
                     <h5>Language</h5>
                     <p> - English (fluent), Swedish (fluent), Spanish(beginner)</p>
                     <h5>Personal qualities</h5>
                     <p> - Collaborative, team-oriented, supportive and posetive</p>
                     <h5>Photo gear</h5>
                     <p> - DJI Mavic Pro 2, Pentax K-30, GoPro.</p>
                     <hr style={{borderTop: '3px solid #757F9A', width: '100%'}} />

            </Content>
        </div>

        
    );
}


export default AboutPage;