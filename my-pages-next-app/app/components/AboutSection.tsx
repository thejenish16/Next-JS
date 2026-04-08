export default function AboutSection() {
  return (
    <section className="section no-padding-bottom-mobile">
      <div className="w-layout-blockcontainer container-fluid w-container">
        <div className="w-layout-grid grid-12-columns">
          <div id="w-node-about-content">
            <div className="about-content">
              <div className="margin-bottom-medium">
                <div className="position-relative">
                  <div className="paragraph-caption">
                    <h2 className="section-title">(About)</h2>
                  </div>
                  <p data-text-animation="paragraph-large" className="paragraph-large">
                    <span className="text-indent-large">     </span>Full-service creative studio that loves making beautiful websites and premium products. We&apos;re really good at creating brands, designing cool stuff, and making things work just right. At our core, we believe in the power of simplicity, innovations and effectiveness.
                  </p>
                </div>
              </div>
              <a href="#" className="button w-inline-block">
                <div className="button-container">
                  <div className="overflow-hidden">
                    <div className="button-inner">
                      <div className="button-text-wrapper">
                        <div className="button-text-front">More about us</div>
                        <div aria-hidden="true" className="button-text-back">More about us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="about-images-wrapper">
            <div className="about-image-one-wrapper">
              <div className="about-image-one-inner">
                <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/69133f7eb6b4bfa23f8e612b_about-1.jpg" loading="lazy" alt="A young man in yellow shirt." className="image-cover" />
              </div>
            </div>
            <div className="about-image-two-wrapper">
              <div className="about-image-two-inner">
                <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/69133f7e19ef16ea3cd0cb3b_about-2.jpg" loading="lazy" alt="Young man in an orange jacket." className="image-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {Array(8).fill(null).map((_, i) => (
              <div key={i} className="marquee-item marquee-margin-large">
                <div className="marquee-heading">Our Story</div>
                <div className="marquee-heading-number">/01</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
