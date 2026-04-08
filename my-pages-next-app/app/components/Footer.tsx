export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-rows">
        <div className="footer-row-top">
          <div className="w-layout-blockcontainer container-fluid w-container">
            <div className="w-layout-grid grid-12-columns-small">
              <div className="footer-widget">
                <div className="margin-bottom-tiny">
                  <div>Have a project in mind?</div>
                </div>
                <a href="/contact" className="button white small w-inline-block">
                  <div className="button-container small">
                    <div className="overflow-hidden">
                      <div className="button-text-wrapper">
                        <div className="button-text-front">Let&apos;s Talk</div>
                        <div aria-hidden="true" className="button-text-back">Let&apos;s Talk</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <div className="w-layout-grid grid-12-columns-zero">
                  <div className="footer-widget">
                    <div className="footer-links-wrapper">
                      <a href="http://facebook.com/" target="_blank" className="footer-link w-inline-block">
                        <div className="footer-link-inner">
                          <div className="footer-link-front"><div>Facebook</div></div>
                          <div className="footer-link-back"><div>Facebook</div></div>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" className="footer-link w-inline-block">
                        <div className="footer-link-inner">
                          <div className="footer-link-front"><div>Instagram</div></div>
                          <div className="footer-link-back"><div>Instagram</div></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="footer-widget">
                    <div className="footer-links-wrapper">
                      <a href="https://x.com/" target="_blank" className="footer-link w-inline-block">
                        <div className="footer-link-inner">
                          <div className="footer-link-front"><div>x.com</div></div>
                          <div className="footer-link-back"><div>x.com</div></div>
                        </div>
                      </a>
                      <a href="https://linkedin.com/" target="_blank" className="footer-link w-inline-block">
                        <div className="footer-link-inner">
                          <div className="footer-link-front"><div>LinkedIn</div></div>
                          <div className="footer-link-back"><div>LinkedIn</div></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-widget align-right">
                <a href="#top" className="back-top-link w-inline-block">
                  <div className="back-top-icon">
                    <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68ac43ee4c78a2cd9bdcfcf4_arrow-up.svg" loading="lazy" alt="" className="back-top-icon-image" />
                  </div>
                  <div className="back-top-text">Back to top</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-row-middle">
          <div className="overflow-hidden">
            <div className="marquee">
              <div className="marquee-track gutter-large">
                {Array(6).fill(null).map((_, i) => (
                  <div key={i} className="marquee-item">
                    <div className="footer-heading">Rydge</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-row-bottom">
          <div className="w-layout-blockcontainer container-fluid w-container">
            <div className="w-layout-grid grid-12-columns-extra-small">
              <div className="footer-credits">
                <div className="footer-credits-item">
                  <div>Designed by <a href="https://webflow.com/templates/designers/bestlooker" target="_blank" className="link-inverse">Bestlooker</a>.</div>
                </div>
                <div className="footer-credits-item">
                  <div>Powered by <a href="https://webflow.com/" target="_blank" className="link-inverse">Webflow</a>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
