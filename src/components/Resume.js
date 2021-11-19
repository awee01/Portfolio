import React from 'react'
import resumepdf from "../images/Adi Wee Resume.pdf"

const Resume = () => {
    return (
    <div className="resume" id = "Resume">
            
    <div>
        <h1> My Resume</h1>

        <br/>

        <button className="resumebutton"> <a className ="resumetext" href = {resumepdf}> Click This Link to Download my Resume </a></button>


        
    </div>

    <div className = "cardmaster">
            <div className = "card">
                
                <h1>Front End Technologies</h1>
                <ul>
                    <li>HTML </li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>

            <div className = "card">

            <h1>Front End Technologies</h1>
                <ul>
                    <li>HTML </li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            
            </div>

            <div className = "card">

            <h1>Front End Technologies</h1>
                <ul>
                    <li>HTML </li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            
            </div>

</div>   

         



    </div>
    )
}

export default Resume
