import React from 'react'
import a1 from  "../images/a1.jpg"
import a2 from  "../images/a2.jpg"
import a3 from  "../images/a3.jpg"
import a4 from  "../images/a4.jpg"
import a5 from  "../images/a5.jpg"
import a6 from  "../images/a6.jpg"
import a7 from  "../images/a7.jpg"
import a8 from  "../images/a8.jpg"
import a9 from  "../images/a9.jpg"
import a10 from  "../images/a10.jpg"

function Artwork() {
    return (
        
        <section className="artprojects" id="artprojects">
        <div className="flex-row">
            <h2 className="section-title">
                Artwork
            </h2>
        </div>

        <div className="webapps">
            <article className="artapp">
                <a href = "a1.jpg">
                    <img src={a1} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a2} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a3} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a4} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a5} />
                </a>
           
            </article>

        </div>

        <div className="webapps">
        <article className="artapp">
                <a href>
                    <img src={a6} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a7} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a8} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a9} />
                </a>
           
            </article>

            <article className="artapp">
                <a href>
                    <img src={a10} />
                </a>
           
            </article>

        </div>
            
        </section>
    )
}

export default Artwork
