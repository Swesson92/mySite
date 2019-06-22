import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
            src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
            alt="avatar"
            style={{height: '200px'}} />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Robin Svensson</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>
                        wfjwaifiawifiawoawkgokawogkpaowgkoapwgkpoawgkpoawkgpao
                        gawgawgopawogopawgokpaowkgaokpgaopagopagawdawfga
                        wgawga
                        wgawgawg
                        awgawaw
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                    <p>Fjällgatan 30, Gothenburg</p>
                    <h5>Phone</h5>
                    <p>+467 06583177</p>
                    <h5>Email</h5>
                    <p>robin.svensson06@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
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
                    
                    startYear={2008}
                    endYear={2011}
                    schoolName="Jensen Education"
                    schoolDescription="Society Program"
                    
                    />
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                    <h2>Professional Experience</h2>
                    <Experience 
                    startYear={2018}
                    endYear={2019}
                    jobName="Web Developer at Alten Sweden"
                    jobDescription="Under a 6 month period I worked at a Consulting Company here in Sweden. Under these months i worked
                    in two different projects. The first project I built an backend service in Java/SpringBoot connected to an Android Application
                     written in Java. The second project I developed a Web Application in Angular 7, connected to a backend written in Python 3."
                    
                    />

                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Resume;