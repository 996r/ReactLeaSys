export default function Hero() {
    return(
        <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-container">
            <div className="hero-left">
                <div className="hero-badge">New Collection 2025</div>
                <h1 className="hero-title">
                    <span className="line"><span>Get</span></span>
                    <span className="line"><span>Your <span className="accent">Dream</span></span></span>
                    <span className="line"><span>Car</span></span>
                </h1>
                <p className="hero-description">
                    Discover our avant-garde collection where high standarts meets street culture. 
                    Each car tells a story of rebellion, elegance, and innovation.
                </p>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Exclusive Pieces</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">48H</span>
                        <span className="stat-label">Fast Delivery</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Guarantee</span>
                    </div>
                </div>
                <div className="cta-group">
                    <a href="#collections" className="cta-button primary">Explore Collection</a>
                    <a href="#featured" className="cta-button outline">Watch Runway</a>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-image-wrapper">
                    <div className="hero-carousel">
                        <div className="carousel-slide active">
                            <img src="images/porsche_911_cup.jpeg" alt="Fashion Model 1"/>
                        </div>
                        <div className="carousel-slide">
                            <img src="images/porsche_911_cup.jpeg" alt="Fashion Model 2"/>
                        </div>
                        <div className="carousel-slide">
                            <img src="images/porsche_911_cup.jpeg" alt="Fashion Model 3"/>
                        </div>
                        <div className="carousel-overlay"></div>
                        <div className="carousel-indicators">
                            <span className="indicator active" data-slide="0"></span>
                            <span className="indicator" data-slide="1"></span>
                            <span className="indicator" data-slide="2"></span>
                        </div>
                    </div>
                    <div className="floating-tags">
                        <div className="tag">Limited Edition</div>
                        <div className="tag">Handcrafted</div>
                        <div className="tag">Premium Quality</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="scroll-indicator">
            <span></span>
        </div>
    </section>
    )
}