import React from 'react'

const Portfolio = () => {
  return (
      <section className="portfolio">
          <div className="container">

              <header className="section-header">
                  <h3 className="section-title">Our Portfolio</h3>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper pharetra ligula nec hendrerit. Ut eu libero nec magna placerat fringilla.
                  </p>
              </header>

              <div className="row">
                  <div className="col-lg-12">
                      <ul id="portfolio-flters">
                          <li data-filter="*" className="filter-active">All</li>
                          <li data-filter=".web-des">Web Design</li>
                          <li data-filter=".web-dev">Web Development</li>
                          <li data-filter=".app-des">App Design</li>
                          <li data-filter=".app-dev">App Development</li>
                      </ul>
                  </div>
              </div>

              <div className="row portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item web-des">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-1.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Lorem ipsum dolor" className="link-preview" title="Preview"><i className="fa-regular fa-eye text-danger"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Lorem ipsum dolor</h4>
                              <p>Web Design</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-2.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i className="fa-regular fa-eye"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Nulla ullamcorper pharetra</h4>
                              <p>Web Development</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item app-des">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-3.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i className="fa-regular fa-eye"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Phasellus eget dictum</h4>
                              <p>App Design</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item app-dev">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-4.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-4.jpg" data-lightbox="portfolio" data-title="Lorem ipsum dolor" className="link-preview" title="Preview"><i className="fa-regular fa-eye"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Donec mattis vestibulum</h4>
                              <p>App Development</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item web-des">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-5.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i className="fa-regular fa-eye"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Pellentesque ullamcorper</h4>
                              <p>Web Design</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                      <div className="portfolio-wrap">
                          <figure>
                              <img src="/img/portfolio-6.jpg" className="img-fluid" alt="Portfolio" />
                              <a href="/img/portfolio-6.jpg" className="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i className="fa-regular fa-eye"></i></a>
                              <a href="" className="link-details" title="More Details"><i className="fa-solid fa-up-right-from-square"></i></a>
                          </figure>

                          <div className="portfolio-info">
                              <h4>Sed pretium sapien</h4>
                              <p>Web Development</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
  )
}

export default Portfolio