// import React from "react";
import { Link } from 'react-scroll';
import Type from 'typewriter-effect';
const Hero = () => {
    const style = {
        link__:{
            color:"black",
            textDecoration:'none'
        }
    }
    return (
        <>
            <section id="hero" className="hero">
                <div className="content">
                    <h1><Type onInit={(typewriter)=>{typewriter.typeString('Empowerment').start()}} /></h1>
                    <p>Unlock the Secrets to a Healthier Mind</p>
                    <br/>
                    <p>     
                        <Link href='#about' style={style.link__} to='about' smooth={true} duration={800}>
                            <b>Scroll Down</b>
                            <br/>
                            <box-icon name='chevrons-down'></box-icon>
                        </Link>
                    </p>      
                </div>
            </section>
        </>
    )
}
export default Hero