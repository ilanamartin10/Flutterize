import React from "react";
import { Link } from "react-router-dom"

function Friend() {
    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Hey there!</h2>
                    <p className="text-white-50 mb-5">Enter your friend's phone number to see what they have been fluttering:</p>

                    <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="typeEmailX">Phone Number</label>
                    </div>

                    <Link to="/next">
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Next</button> 
                    </Link>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>

                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        );
        }

        export default Friend
