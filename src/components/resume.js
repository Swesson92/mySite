import React, {Component} from 'react';
import {Grid, Cell, Chip} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import cvbild from './assets/cvbild.jpg';


class Resume extends Component{
    render(){
        return(
            <div className="testings">
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
            src={cvbild}
            alt="avatar"
            className="cvbild"
            style={{height: '300px'}} />
    </div>

                <h2 style={{paddingTop: '1em'}}>Robin Svensson</h2>
                <h4 style={{color: 'grey'}}>Web Developer</h4>
                    <p>
                     Robin is a Junior Java/Web developer with a passion for agile methodology.
                     He has experience working with both backend(Java), frontend (Angular/React) and Javascript development. 
                     Robin is fond of creating value from data and display it in different forms.
                     He has been working with software solutions over the past year, with customers like Volvo Parts, where
                     he was tasked with analysing and creating software to tackle counterfeit products. 
                    </p>
                    <hr style={{borderTop: '3px solid #009FFF', width: '100%'}} />
                    <h5>Nationality</h5>
                    <p>Swedish</p>
                    <h5>Language</h5>
                    <p>English (fluent), Swedish (fluent), Spanish(beginner)</p>
                    <h5>Interests and hobbies</h5>
                    <p>Music, Cars, Floorball, Hockey, Technology and to travel the world</p>
                    <h5>Personal qualities</h5>
                    <p>Collaborative, team-oriented, supportive, positive and loyal</p>
                    <hr style={{borderTop: '3px solid #009FFF', width: '100%'}} />
                    <h5>Tools and OS</h5>
                    <Chip style={{background: '#009FFF' , color: 'white'}}>Visual Studio Code</Chip>
                    <Chip style={{background: '#009FFF',color: 'white'}}>IntelliJ IDEA</Chip>
                    <br></br>
                    <Chip style={{background: '#009FFF',color: 'white'}}>MacOs</Chip>
                    <Chip style={{background: '#009FFF',color: 'white'}}>Windows 10</Chip>
                    <br></br>
                    <Chip style={{background: '#009FFF',color: 'white'}}>Git</Chip>
                    <Chip style={{background: '#009FFF',color: 'white'}}>Jira</Chip>
                    <hr style={{borderTop: '3px solid #009FFF', width: '100%'}} />
                    <h5>Community Rates Games – A School Project</h5>
                    <p>Created a website where you can rate games that you like. 
                    Comparable to IMDB except this is for all kinds of video games.
                    We built a backend written i Java, connected to a client written with Angular 7.
                    </p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2017}
                    endYear={2019}
                    schoolName="Yrgo Gothenburg"
                    schoolDescription="Java Enterprise Developer"
                    />

                    <Education
                    startYear={2014}
                    endYear={2015}
                    schoolName="Halmstad University"
                    schoolDescription="Cisco Network Academy Program"
                    />

                    <Education
                    startYear={2008}
                    endYear={2011}
                    schoolName="Jensen Education"
                    schoolDescription="Society Program"  
                    />

                <hr style={{borderTop: '3px solid #c31432', width: '100%'}} />
                    <h2>Professional Experience</h2>
                    <Experience 
                    startYear={2018}
                    endYear={2019}
                    jobName="Software developer with Alten/Volvo Parts"
                    jobDescription="I worked on a software solution for Volvo Parts to tackle their problem with counterfeit products. 
                    The main goal was to reduce counterfeit products from 5% to 1-2% with this software. 
                    I created an Android application connected to backend services. 
                    The idea was that when products arrive at Volvo or their retailer the product will be scanned by the Android app and return if the product delivered is fake or legit.
                    A lot of thinking and discussion were included in the project, mainly for security and scalability reasons."
                
                    />

                    <Experience 
                    startYear={2018}
                    endYear={2019}
                    jobName="Developer for Alten Monitoring System"
                    jobDescription="Currently working in a project called AMS, which is a monitoring system for different services and applications.
                    This project is written with Python 3 and 
                    includes a backend and a Celery part where we fetch data continuously and are able to add services and applications for monitoring.
                    Relevant data is later shown in our frontend client, written with Angular 7.
                    The purpose with developing this application is to collect and show all different services currently running in one place,
                    called Alten Monitoring System."
                    
                    />

                    <Experience 
                    startYear={2011}
                    endYear={2018}
                    jobName="Repairer at Göteborgs Spårvägar"
                    jobDescription="I worked as service/repair man.
                    I made services and repaired trams, everything from changing windshields, 
                    repairing electric components and big security checks on trams before they enter daily traffic in Gothenburg. 
                    This work taught me to work independently but also to work as a team. 
                    I have a driver license for trams to be able to transport non-functional trams through the city. 
                    When working here I finished an education for emergency driving (same as the police) to be able to help our tram drivers out in traffic."
                    
                    />

                <hr style={{borderTop: '3px solid #c31432', width: '100%'}} />
                <h2>Primary qualifications</h2>
                
                <Skills 
                skill="Javascript"
                progress={80}
                />

                 <Skills 
                skill="Angular"
                progress={70}
                />

                <Skills 
                skill="React"
                progress={45}
                />

                 <Skills 
                skill="HTML/CSS"
                progress={85}
                />

                <Skills 
                skill="Java SE/EE"
                progress={50}
                />

                 <Skills 
                skill="SQL"
                progress={60}
                />

                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Resume;