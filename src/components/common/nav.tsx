import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-sm dark-mode sticky-top" data-bs-theme="dark" style={{ backgroundColor: "#000a12" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">Acerca de mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exercise">Ejercicio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


