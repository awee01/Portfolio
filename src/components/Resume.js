import React from 'react'
import resumepdf from "../images/Adi Wee Resume.pdf"
import bluepage from  "../images/bluepage.jpg"


const Resume = () => {
    return (
    <div className="resume" id = "Resume" >
            
    <div>
       
        <div className="flex-row">
            <h2 className="section-titlewhite">
                My Resume and Technical skills
            </h2>
        </div>

        <button className="resumebutton"> <a className ="resumetext" href = {resumepdf}> Click to Download my Resume </a></button>

        
    </div>


    <br/>

    <div className = "cardmaster">
            <div className = "card">
                
                <h2>Front End Technologies</h2>
                
                <ul>
                    <li>HTML </li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                </ul>

            </div>

            <div className = "card">

            <h2>Back End Technologies</h2>
                <ul>
                    <li>jQuery </li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                </ul>
            
            </div>



    </div>   

         



    </div>
    )
}

export default Resume
