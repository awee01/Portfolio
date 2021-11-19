import React from 'react'
import me from  "../images/me.jpg"


const About = () => {
    return (
        <div>

        <section className="hero" id="About-Me">
        <div className="hero-title">
            <h2>About Me</h2>
            <br/>
        
       <div className = "paragraph">
            <p>
                My Name is Adi Wee. I am currently a student in the University of Toronto Computer
                Science bootcamp, learning how to code for the first time.

            </p>
            <br/>
        
            <p>
                
                Previously, I have had graduated with an Bachelor of Commerce in Accounting and Finance. I am a keen stock trader, gamer, and illustrative artist.
                
            </p>
            <br/>
            <p>
                I am mostly a beginner coder but am looking to constantly improve
                my skills. This is my first web portfolio, I look foward to continue returning to this webpage to update and
                improve upon it as I continue to develop my programming skills. 
            </p>
            <br/>

            <img src ={me} />
        

        </div>
            <br/>

        
        </div>


    </section>
            
            
            
        </div>
    )
}

export default About
