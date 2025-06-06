import React, { useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

export default function Carousel() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        time: "",
        message: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    const togglePopup = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="container-fluid px-0 position-relative">
            {/* Carousel */}
            <div
                id="carouselId"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ position: "relative" }}
            >
                <ol className="carousel-indicators">
                    <li
                        data-bs-target="#carouselId"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="First slide"
                    ></li>
                    <li
                        data-bs-target="#carouselId"
                        data-bs-slide-to="1"
                        aria-label="Second slide"
                    ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {/* First Carousel Item */}
                    <div className="carousel-item active">
                        <img
                            src="/img/carousel-1.jpg"
                            className="img-fluid"
                            alt="First slide"
                            style={{ height: "100vh", width: "100%" }}
                        />
                        <div className="carousel-caption">
                            <div className="container carousel-content car-cont" style={{ width: "70%" }}>
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInRight">
                                    An Innovative IT Solutions
                                </h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                                    interdum. Pellentesque aliquam dolor eget urna ultricies
                                    tincidunt.
                                </p>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Link href="" className="me-2">
                                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">
                                            <span className='btnb' >Read More</span>
                                        </button>
                                    </Link>
                                    <Link href="" className="ms-2">
                                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">
                                            <span className='btnb'>Contact Us</span>
                                        </button>
                                    </Link>
                                </div>
                                {/* Test Button */}
                                <button className="btn btn-danger popup-btn" onClick={togglePopup}>
                                    Get in Touch
                                </button>
                            </div>

                            {/* Callback Request Form */}
                            <div
                                className="container mt-5 car-form"
                                style={{
                                    width: "40%",
                                    justifyContent: "flex-end",
                                    boxShadow: "2px 2px 10px blue, -2px -2px 10px green",
                                    padding: "10px",
                                    marginLeft: "50px",
                                }}
                            >
                                <h2 className="text-center mb-4 text-white">Request a Callback</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Full Name */}
                                        <div className="col-md-6 mb-3 ca">
                                            <input
                                                type="text"
                                                className="forminput form-control"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="forminput form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Phone Number */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="forminput form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Your phone number"
                                                required
                                            />
                                        </div>
                                        {/* Preferred Callback Time */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="datetime-local"
                                                className="forminput form-control"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Any additional information or message"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary btn-lg w-100 ">
                                        <img src="https://media.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif" alt="" height={"30px"} width={"30px"} style={{ background:"#1842b6" ,marginRight:"40px" }}/>
                                        Send Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                        className="carousel-control-prev car-arrow"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next car-arrow"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                    {/* Second Carousel Item */}
                    <div className="carousel-item">
                        <img
                            src="/img/carousel-2.jpg"
                            className="img-fluid"
                            alt="Second slide"
                            style={{ height: "100vh", width: "100%" }}
                        />
                        <div className="carousel-caption">
                            <div className="container carousel-content car-cont" style={{ width: "70%", justifyContent: "flex-start" }}>
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services!</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                                    interdum. Pellentesque aliquam dolor eget urna ultricies
                                    tincidunt.
                                </p>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Link href="" className="me-2">
                                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">
                                            <span className="btnb">Read More</span>
                                        </button>
                                    </Link>
                                    <Link href="" className="ms-2">
                                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">
                                            <span className="btnb">Contact Us</span>
                                        </button>
                                    </Link>
                                </div>
                                {/* Test Button */}
                                <button className="btn btn-danger popup-btn" onClick={togglePopup}>
                                    Get in Touch
                                </button>
                            </div>


                            {/* Callback Request Form */}
                            <div
                                className="container mt-5 car-form"
                                style={{
                                    width: "40%",
                                    justifyContent: "flex-end",
                                    boxShadow: "2px 2px 10px blue, -2px -2px 10px green",
                                    padding: "10px",
                                    marginLeft: "50px",
                                }}
                            >
                                <h2 className="text-center mb-4 text-white">Request a Callback</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Full Name */}
                                        <div className="col-md-6 mb-3 ca">
                                            <input
                                                type="text"
                                                className="forminput form-control"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="forminput form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Phone Number */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="forminput form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Your phone number"
                                                required
                                            />
                                        </div>
                                        {/* Preferred Callback Time */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="datetime-local"
                                                className="forminput form-control"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Any additional information or message"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary btn-lg w-100 ">
                                        <img src="https://media.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif" alt="" height={"30px"} width={"30px"} style={{ background: "#1842b6", marginRight: "40px" }} />
                                        Send Request
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                        className="carousel-control-prev car-arrow"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next car-arrow"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            {/* Test Modal */}
            {showModal && (
                <div className="modal" tabIndex="-1" style={{ display: 'block', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1050 }}>
                    <div className="modal-dialog" style={{ maxWidth: '600px' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Request a Callback</h5>
                                <button type="button" className="btn-close" onClick={togglePopup}></button>
                            </div>
                            <div className="modal-body">
                                {/* Callback Request Form */}
                                <div className="container" style={{ marginTop: "-25px", padding: "0" }}>
                                    <h2 className="text-center text-white">Request a Callback</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Full Name */}
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    required
                                                />
                                            </div>
                                            {/* Email */}
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Your email address"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Phone Number */}
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Your phone number"
                                                    required
                                                />
                                            </div>
                                            {/* Preferred Callback Time */}
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Any additional information or message"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-primary btn-lg w-100">
                                            <i className="bi bi-telephone ringing" style={{ marginRight: "20px" }}></i>
                                            Send Request
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
