import React from "react";
import "./Navbar.css"



const Navbars = () => {
    return(
    
        <section data-bs-version="5.1" className="menu menu1 cid-sFGzlAXw3z" once="menu" id="menu1-2">
    

        <nav className="navbar navbar-dropdown navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <a href="/">
                            <img src="/assets/images/gastu-96x96.png" alt="" />
                        </a>
                    </span>
                    <span className="navbar-caption-wrap"><a className="navbar-caption text-danger display-7" href="/">gastusoluciones</a></span>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
            <li className="nav-item"><a className="nav-link link text-danger display-4" href="/"><span className="mobi-mbri mobi-mbri-home mbr-iconfont mbr-iconfont-btn"></span>Inicio</a></li>
            <li className="nav-item"><a className="nav-link link text-danger text-primary display-4" href="http://localhost:4000" aria-expanded="false"><span className="mobi-mbri mobi-mbri-desktop mbr-iconfont mbr-iconfont-btn"></span>Administrador</a></li>
            <li className="nav-item"><a className="nav-link link text-danger text-primary display-4" href="gastusoluciones.html#features20-4"><span className="mobi-mbri mobi-mbri-question mbr-iconfont mbr-iconfont-btn"></span>Preguntas Frecuentes</a></li>
            <li className="nav-item"><a className="nav-link link text-danger show text-primary display-4" href="gastusoluciones.html#contacts3-1l" aria-expanded="false"><span className="mobi-mbri mobi-mbri-contact-form mbr-iconfont mbr-iconfont-btn"></span>Contacto</a></li></ul>
                    
                    
                </div>
            </div>
        </nav>
    </section>
     
  );
}


export default Navbars;



