import React from 'react'
import resumepdf from "../images/Adi Wee Resume.pdf"

const Resume = () => {
    return (
    <div className="resume" id = "Resume">
            
    <div>
        <h1> My Resume and Technical Skills</h1>

        <br/>

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
