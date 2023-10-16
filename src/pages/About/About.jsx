import React from "react";
import './About.css';
import donutGuy from '../../images/donut-guy.svg';

const About = () =>{
    return(
        <>
            <div className="me-description">   
                <p className="me-description-text">Hi, I am <span className="name">Vineet</span>, a web developer.<img src={donutGuy} className="profile-pic" /> </p>  
            </div>
            <div className="detail-aboutme">
                <p className="aboutme">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic. Ipsum ut culpa id mollitia aspernatur aliquid, dolores enim vero, unde praesentium illum similique quidem asperiores consequuntur nemo labore libero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id in explicabo doloremque reiciendis libero eos architecto, accusantium porro repellat, incidunt maiores, neque repellendus officiis nisi natus nemo recusandae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas molestiae enim eos eveniet atque ullam quidem voluptatum non, exercitationem qui incidunt consectetur eius, dicta deserunt repellendus, doloribus tempora debitis.
                </p>
            </div>
        </>
    )
}

export default About;