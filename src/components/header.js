import React, {Component} from 'react';
import '../components/css/header.css';
import Logo from '../logo.png';

class Header extends Component {
    render() {
        return (

            <div className="container">


                <div className="row">

                    <div className="col">
                        <img className="logo" src={Logo}/>

                        <nav className="navbar navbar-expand-lg navbar-light bg-light1">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            </div>
                        </nav>
                    </div>
                    <div className="col1">
                        <nav className="navbar1 navbar-expand-lg navbar-light bg-light">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav" style={{textAlign: 'right'}}>
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">City</a>
                                    </li>
                                </ul>
                                <div id="password">
                                    <input type="password" placeholder="Password" name="psw"/>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header