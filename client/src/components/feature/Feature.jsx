export default function Feature () {

    return (
        <section className="featured" id="featured">
        <div className="featured-container">
            <div className="featured-hero">
                <div className="featured-content">
                    <span className="label">Crafted with Passion</span>
                    <h2>The Art of Fashion</h2>
                    <p>Where tradition meets innovation. Our master craftsmen blend centuries-old techniques with cutting-edge design to create pieces that transcend time and trends. This template is proudly crafted by TemplateMo, featuring beautiful imagery from Unsplash.</p>
                    
                    <div className="feature-highlights">
                        <div className="highlight-item">
                            <div className="highlight-icon">👑</div>
                            <div className="highlight-title">Premium Quality</div>
                            <div className="highlight-desc">Only the finest materials and fabrics make it into our collections</div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon">🌱</div>
                            <div className="highlight-title">Sustainable</div>
                            <div className="highlight-desc">Ethically sourced materials with carbon-neutral production</div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon">✨</div>
                            <div className="highlight-title">Handcrafted</div>
                            <div className="highlight-desc">Each piece is carefully crafted by skilled artisans</div>
                        </div>
                    </div>
                    
                    <a href="#collections" className="feature-cta">Discover Our Craft</a>
                </div>
                
                <div className="featured-image-section">
                    <div className="featured-image-grid">
                        <div className="featured-img">
                            <img src="images/art-of-fashion-01.avif" alt="Fashion Collection Showcase"/>
                        </div>
                        <div className="featured-img">
                            <img src="images/art-of-fashion-02.avif" alt="Luxury Fashion Details"/>
                        </div>
                        <div className="featured-img">
                            <img src="images/art-of-fashion-03.avif" alt="Artisan Craftsmanship"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="testimonials">
                <div className="testimonials-header">
                    <h3>What Our Customers Say</h3>
                    <p className="section-subtitle">Real stories from fashion enthusiasts</p>
                </div>
                
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <div className="testimonial-quote">
                            "NOIR has completely transformed my wardrobe. The quality and attention to detail is unmatched. Every piece feels like a work of art."
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
                            "The sustainable approach combined with luxury design is exactly what I was looking for. NOIR proves you don't have to compromise."
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
                            "I've been a customer for three years now, and each collection keeps exceeding my expectations. The fit and quality are consistently outstanding."
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