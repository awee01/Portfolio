import React from 'react'
import p1 from  "../images/dashboard.jpg"
import p2 from  "../images/COVID.jpg"
import p3 from  "../images/onlinetherapy.jpg"
import p4 from  "../images/runbuddy.jpg"
import p5 from  "../images/squidgame.jpg"
import p6 from  "../images/workscheduler.jpg"


function Projects() {
    return (
 

        <section className="workssection" id="Works">
        <div className="flex-row">
            <h2 className="section-title">
                My Work So Far:
            </h2>
        </div>

        <div className="webapps">
            <article className="webapp">
                <a href="https://github.com/awee01/Project-6">
                    <img src={p1} />
                </a>
                <div className="webapp-bio">
                    <h3>Weather Dashboard</h3>
                    <br/>
                    <p> An application that searches cities and returns the 5 day forecast through a web API.
                        Click the image to view the website on github.</p>
                </div>
            </article>

            <article className="webapp">
                <a href="https://bootcampproject.github.io/Group5-COVID-Coders/">
                    <img src={p2}/>
                </a>
                <div className="webapp-bio">
                    <h3>COVID-19 Web APP</h3>
                    <br/>
                    <p> A Group project I helped worked on for week 7-8 of my coding bootcamp.
                        Click the image to view the website on github.</p>
                </div>
            </article>

            <article className="webapp">
                <a href="https://github.com/theteam44444/online-therapy">
                    <img src={p3}/>
                </a>
                <div className="webapp-bio">
                    <h3>Online Therapy App</h3>
                    <br/>
                    <p> My Second group project that I worked on for week 15-16 of my coding bootcamp.
                        Click the image to view the website on github.</p>
                </div>
            </article>

        </div>

        <div className="webapps">
            <article className="webapp">
                <a href="https://awee01.github.io/run-buddy/">
                    <img src={p4} />
                </a>
                <div className="webapp-bio">
                    <h3>Run-Buddy</h3>
                    <br/>
                    <p> I helped create a new website for an exercise program through the learning modules. Click the
                        image to
                        view the website on github.</p>
                </div>
            </article>

            <article className="webapp">
                <a href="https://github.com/TPhondeth/the-squid-store">
                    <img src={p5}/>
                </a>
                <div className="webapp-bio">
                    <h3>The Squid Store</h3>
                    <br/>
                    <p> My Third group project that I worked on for week 23-24 of my coding bootcamp. Click
                        on the image for a link to the raw code on github.</p>
                </div>
            </article>

            <article className="webapp">
                <a href="https://github.com/awee01/Project-5">
                    <img src={p6}/>
                </a>
                <div className="webapp-bio">
                    <h3>Work Scheduler</h3>
                    <br/>
                    <p> An application that allows users to keep track their daily activities by the hour. Provides local storage and delete functions. Click
                        on the image for a link to the raw code on github.</p>
                </div>
            </article>

        </div>



    </section>


    )
}

export default Projects
