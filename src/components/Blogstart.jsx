import React from 'react';
import ReactWOW from 'react-wow'; // For the fade-in animation (if you're using the React-WOW library)
import { Link } from 'react-router-dom'; // Use Link for React Router navigation

const Blogstart = () => {
    return (
        <div className="container-fluid blog py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Blog</h5>
                    <h1>Latest Blog & News</h1>
                </div>

                <div className="row g-5 justify-content-center">
                    {/* Blog Item 1 */}
                    <div className="col-lg-6 col-xl-4">
                        <ReactWOW animation="fadeIn" delay=".3s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt="Blog 1" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px' }}>
                                    Web Design
                                </span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <Link to="/blog/1" className="btn text-white">Read More</Link>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="#" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="Author" />
                                    <h5>By Daniel Martin</h5>
                                    <span className="text-secondary">24 March 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="#" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="#" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Blog Item 2 */}
                    <div className="col-lg-6 col-xl-4">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="/img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt="Blog 2" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px' }}>
                                    Development
                                </span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <Link to="/blog/2" className="btn text-white">Read More</Link>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="#" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="Author" />
                                    <h5>By Daniel Martin</h5>
                                    <span className="text-secondary">23 April 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="#" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="#" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Blog Item 3 */}
                    <div className="col-lg-6 col-xl-4">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt="Blog 3" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px' }}>
                                    Mobile App
                                </span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <Link to="/blog/3" className="btn text-white">Read More</Link>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="#" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="#" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="Author" />
                                    <h5>By Daniel Martin</h5>
                                    <span className="text-secondary">30 Jan 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="#" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="#" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogstart;