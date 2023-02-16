import React from 'react'

function Card({ link, img, title, description, repo}) {
    return (
        <div>
            <article className="card-container">
                <a href={link} className="image " target="_blank">
                    <img src={img} alt="deploy" className="imgProject" />
                </a>
                <div>
                    <h3 className='third-title'>{title}</h3>
                    <p className='body-card'>{description}</p>
                </div>

                <a href={repo} className="button" target="_blank">Repository</a>
            </article>

        </div>
    )
}

export default Card