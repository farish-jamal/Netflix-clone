import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [navScroll, setNavScroll] = useState(false);

    const transitionBar = ()=>{
         if(window.scrollY > 100){
            setNavScroll(true);
         }
         else{
            setNavScroll(false);
         }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionBar);
        // return () => {
            // window.removeEventListener('scroll', transitionBar);
        // }
    }, [])
    return (
        <div className={`nav ${navScroll && `nav__black`}`}>
            <div className="nav__content">
                <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="This is a logo" />
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="This is a avatar" />
            </div>
        </div>
    )
}

export default Nav
