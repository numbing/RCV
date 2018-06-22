import React, {Component} from 'react';
import '../components/css/footer.css'

class Footer extends Component {
    render() {

        return (
            <footer className="bg-dark footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="two">WHAT WE DO</a>
                            <a href="#" className="tree">SUPPORT US</a>
                            <a href="#" className="four">TAKE ACTION</a>
                            <a href="#" className="five">DONATE</a>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-danger">Join Newsletter</button>

                            <a href="#" className="contact">Contact us!</a>
                        </div>
                        <div className="col">
                            <div className="navbar">
                                <a href="#" className="list-group-item"> <i className="fa fa-facebook-official"></i>
                                </a>
                                <a href="#" className="list-group-item"> <i className="fab fa-twitter-square"></i> </a>
                                <a href="#" className="list-group-item"> <i className="fab fa-instagram"></i> </a>
                                <a href="#" className="list-group-item"> <i className="fab fa-linkedin-in"></i> </a>
                                <a href="#" className="list-group-item"> <i className="fab fa-youtube"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;