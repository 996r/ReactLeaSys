export default function Feature () {

    return (
        <section className="featured" id="featured">
        <div className="featured-container">
            <div className="featured-hero">
                <div className="featured-content">
                    <span className="label">Selected with Passion</span>
                    <h2>Exlusive Services</h2>
                    <p>Car Leasing Bulgaria has over 25 years of experience and combines 100% discretion with a global exclusive network to offer tailored brokerage and consignment services for high-end cars. Whether it's Porsche, Audi, Bentley, BMW, Mercedes, Range Rover, or rare hypercars and limited-edition models that can't simply be resold we guarantee a personal approach and a possible off-market sales process that is fully tailored to your needs.</p>
                    
                    <div className="feature-highlights">
                        <div className="highlight-item">
                            <div className="highlight-icon"></div>
                            <div className="highlight-title">Pick-up and return service</div>
                            <div className="highlight-desc">Naturally any car you buy from us will need servicing from time to time. We will be happy to carry out that service for you. </div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon"></div>
                            <div className="highlight-title">Worldwide shipment</div>
                            <div className="highlight-desc">We can deliver our exclusive cars anywhere in the world, be it a desert in Qatar or an exotic Caribbean island</div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon"></div>
                            <div className="highlight-title">Tax-free delivery</div>
                            <div className="highlight-desc">Do you live or work outside the EU? Or do you have a diplomatic statute? If so, Car Leasing Bulgaria can supply your car tax-free.</div>
                        </div>
                    </div>
                    
                    <a href="#collections" className="feature-cta">Discover Our Collection</a>
                </div>
                
                <div className="featured-image-section">
                    <div className="featured-image-grid">
                        <div className="featured-img">
                            <img src="images/pickup_delivery.jpeg" alt="Pickup And Delivery"/>
                        </div>
                        <div className="featured-img">
                            <img src="images/worldwide_shipping.jpeg" alt="WorldWide Shipment"/>
                        </div>
                        <div className="featured-img">
                            <img src="images/tax_free_delivery.jpeg" alt="Tax-free Delivery"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="testimonials">
                <div className="testimonials-header">
                    <h3>What Our Customers Say</h3>
                    <p className="section-subtitle">Real stories from car enthusiasts</p>
                </div>
                
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <div className="testimonial-quote">
                            "Car Leasing Bulgaria has completely transformed my sens for cars. The quality and attention to detail is unmatched."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">S</div>
                            <div className="author-info">
                                <h4>Sarah Chen</h4>
                                <p>Fashion Blogger</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <div className="testimonial-quote">
                            "Car Lease Bulgaria proves you don't have to compromise."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">M</div>
                            <div className="author-info">
                                <h4>Marcus Rodriguez</h4>
                                <p>Creative Director</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <div className="testimonial-quote">
                            "I've been a customer for three years now, and each collection keeps exceeding my expectations."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">A</div>
                            <div className="author-info">
                                <h4>Alexandra Kim</h4>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}