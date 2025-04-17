import React from 'react'

const BlogNews = () => {
    return (
        <section className="section features" id="features">
            <div className="container">
                <h2 className="h2 section-title underline">Our Features</h2>
                <ul className="features-list">

                    <li>
                        <div className="features-card">
                            <div className="icon">
                                <ion-icon name="bulb-outline"></ion-icon>
                            </div>
                            <div className="content">
                                <h3 className="h3 title">Idea & Analysis</h3>
                                <p className="text">
                                    Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="features-card">                                 <div className="icon">
                            {/* <ion-icon name="color-palette-outline"></ion-icon> */}
                            <ion-icon name="color-palette-outline" role="img" className="md hydrated" aria-label="color palette outline"></ion-icon>



                        </div>
                            <div className="content">
                                <h3 className="h3 title">Designing</h3>
                                <p className="text">
                                    Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
                <figure className="features-banner">
                    <img src="/images/feautres-banner.png" width="369" height="318" loading="lazy" alt="Features Banner"
                        className="w-100 banner-animation" />
                </figure>

                <ul className="features-list">
                    <li>
                        <div className="features-card">
                            <div className="icon">
                                <ion-icon name="code-slash-outline"></ion-icon>
                            </div>
                            <div className="content">
                                <h3 className="h3 title">Development</h3>
                                <p className="text">
                                    Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="features-card">
                            <div className="icon">
                                <ion-icon name="rocket-outline"></ion-icon>
                            </div>
                            <div className="content">
                                <h3 className="h3 title">Testing & Launching</h3>
                                <p className="text">
                                    Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BlogNews