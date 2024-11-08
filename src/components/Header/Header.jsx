import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <dev className="flexCenter paddings innerWidth h-container">


                <img src="./logo.png" alt="logo" width={100} />

                <div className="flexCenter h-menu">

                    <a href=" ">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>

                    <button className="button"> 
                        <a href="">Contact</a>
                    </button>

                </div>

            </dev>
        </section>
    )
}

export default Header

