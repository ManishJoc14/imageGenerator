import React,{ useRef } from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const refCloseHamB = useRef(null);
    const closeHamB=(e)=>{
        refCloseHamB.current.click();
    }
  return (
   <>
   <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand"to="/home">
                            ImageGenerator
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span ref={refCloseHamB} className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page"to="/home" onClick={closeHamB}>
                                        <strong>  Home </strong>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/about" onClick={closeHamB}>
                                        <strong>  About </strong>
                                    </Link>
                                </li>
                            </ul>
                            <div onClick={closeHamB} className={`form-check form-switch d-flex my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                            <input className="form-check-input ms-lg-0 me-3 " onClick={props.toggle} style={{ height: '1.5em', width: '3em', cursor:'pointer' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault"style={{ cursor: 'pointer' }}>Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                        </div>
                        </div>
                    </div>
                </nav>
   </>
  )
}

export default Navbar