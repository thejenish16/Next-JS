export default function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-content-top">
        <div className="container-fluid">
          <div className="hero-heading-wrapper-home">
            <div data-animation-ease="power2.out" data-animation="char-3d" data-animation-duration="0.75" data-animation-delay="0.325" data-animation-stagger="0.0625" className="hero-heading-rotation">
              <div className="hero-heading-front">
                <h1 className="hero-heading">Rydge Studio</h1>
              </div>
              <div aria-hidden="true" className="hero-heading-back">
                <div className="hero-heading">Rydge Studio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-content-middle">
        <div className="container-fluid">
          <div className="opacity-80">
            <div className="hero-services">
              {["Branding", "Art Direction", "Design", "Development", "Production"].map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-content-bottom">
        <div className="w-layout-blockcontainer container-fluid w-container">
          <div className="opacity-80">
            <div className="w-layout-grid grid-12-columns-small gutter-on-mobile">
              <div className="hero-caption-first">
                <div className="hero-caption">Portfolio / ©2026</div>
              </div>
              <div className="hero-text-wrapper">
                <div className="hero-text-container">
                  <div className="align-center">
                    <div className="margin-bottom-small">
                      <p className="paragraph-small no-text-indent">Rydge is a full-service creative studio crafting beautiful digital experiences. We are an award-winning design and art collective specializing in branding and digital engineering.</p>
                    </div>
                    <a href="/portfolio" className="button white w-inline-block">
                      <div className="button-container">
                        <div className="overflow-hidden">
                          <div className="button-inner">
                            <div className="button-text-wrapper">
                              <div className="button-text-front">View Our Works</div>
                              <div aria-hidden="true" className="button-text-back">View Our Works</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-caption-third">
                <div className="hero-caption-inner">
                  <div className="hero-caption">Scroll Down</div>
                  <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68ac43ee4c78a2cd9bdcfd34_arrow-down-right-small-white.svg" loading="lazy" alt="" className="hero-caption-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-inner">
          <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68dd63d2dbb5e5320f629828_aa39a81b0ae22a69ffba5b9ab4472ca8_hero-plus.jpg" loading="eager" alt="Portrait of a man in white sunglasses." className="hero-image" />
        </div>
        <div className="hero-image-overlay"></div>
      </div>
    </section>
  );
}
