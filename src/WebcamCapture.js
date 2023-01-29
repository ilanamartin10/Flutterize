import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Link } from "react-router-dom"

function WebcamCapture() {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    console.log(imageSrc);
    console.log(typeof(imageSrc));
    localStorage.setItem("img", imageSrc);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Ready to Flutter?</h2>
                  <p className="text-white-50 mb-5">Today's Challenge: Find a stranger and spell a word with your hands!</p>

                  {imageSrc ? (
                    <img src={imageSrc} alt="Captured" style={{width: '320px', height: '240px'}}/>
                  ) : (
                    <Webcam
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      style={{ width: "320px", height: "240px"}}
                    />
                  )}
                  <br />
                  {imageSrc ? null : (
                    
                    <Link to="/dash" state={{imageSrc: "new_img"}}>
                    <button onClick={capture} className="btn btn-outline-light btn-lg px-5">Capture</button>
                    </Link>
                  )}

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

export default WebcamCapture;
