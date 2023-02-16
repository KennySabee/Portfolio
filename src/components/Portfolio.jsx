import React from 'react'
import Card from './Card'
import landingpage from './../assets/images/landingpage.png';
import crudApp from './../assets/images/crudApp.png';
import dashboard from './../assets/images/dashboard.png';
// import restaurantapp from './../assets/images/restaurantapp.png';
import ecommerce from './../assets/images/ecommerce.png';

function Portfolio() {
    return (

        <section id="two">

            <h2 className="text-2xl">Portfolio</h2>
            <div className="row">
                {/* portfolio cards */}
                <Card link="#" img={landingpage} title="Landing Page de Indumentaria Marcial" description="Construida con HTML y CSS." repo="https://github.com/KennySabee/Proyecto1-Landing-Page" />

                <Card link="#" img={crudApp} title="CRUD App" description="Construida con HTML, CSS y Javascript." repo="https://github.com/KennySabee/Proyecto2-CRUD" />

                <Card link="https://kennysabee.github.io/Proyecto3-DBapp/" img={dashboard} title="Dashboard App " description="Construida con React y se consumio una API." repo="https://github.com/KennySabee/Proyecto3-DBapp" />

                {/* <Card link="#" img={restaurantapp} title="Restaurant App - Horno de Leña" description="Esta página fue construida con React, React Router, en conjunto con Firebase como base de datos" repo="https://github.com/KennySabee/Proyecto4-HornoDeLe-a" /> */}

                <Card link="https://kennysabee.github.io/folie-final-front/?classId=39b87aea-01cf-49fd-ba3b-1a6573bc794e&assignmentId=beeb9f6e-824d-49c3-9a3d-3e6bcb9792ae&submissionId=b8808fe0-29cb-2b01-a805-ffb7cfebc030" img={ecommerce} title="eCommerce App - Folie" description="Construida con React (front) en conjunto con una API construida con Express y Node.js (back), además de usar MongoDB como base de datos." repo="https://github.com/KennySabee/folie-final-front" />

            </div>
            <ul >
                <li><a href="https://github.com/KennySabee?tab=repositories" className="button" target="_blank">Full Portfolio</a></li>
            </ul>
        </section>
    )
}

export default Portfolio