import React from 'react'
import {Link} from "react-scroll"

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1>
                Indhumathi Ganesan
            </h1>
            <p>I am Professional Web And Full Stack Developer..</p>
            {/* Download Resume */}
            <a href='/assets/Indhumathi G Resume.pdf'>
                <button className='topContent_download'>Download CV</button>
            </a>
            {/* React-scroll Link */}
            {/* <Link to="project" smooth={true} duration={500}> */}
            <button className='topContent_Project'>My Projects</button>
            {/* </Link> */}
        </div>
        
    </div>
  )
}

export default TopContent