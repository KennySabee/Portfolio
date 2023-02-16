import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

function Icons() {
    return (
        <>
            <ul className="icons">
                <li>
                    <a href="https://github.com/KennySabee" target="_blank" >
                        <DiGithubBadge />
                        <span className="label">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kenny-merizalde/" target="_blank"  ><AiFillLinkedin />
                        <span className="label">LinkedIn</span></a>
                </li>
                
            </ul>
        </>
    )
}

export default Icons