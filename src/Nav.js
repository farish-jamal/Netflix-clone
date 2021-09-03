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
                <img className="nav__logo" src="https://gray-wxix-prod.cdn.arcpublishing.com/resizer/ytbK2YmwVJ1k8-Twhwf75z54G3s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="This is a logo" />
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="This is a avatar" />
            </div>
        </div>
    )
}

export default Nav
