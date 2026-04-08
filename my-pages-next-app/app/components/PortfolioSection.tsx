const projects = [
  { href: "/projects/reimagining-reality", title: "Reimagining Reality", img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/699c4edd87706767a7c83aa8_preview.jpg", tags: ["Branding", "Design"] },
  { href: "/projects/beyond-the-screen", title: "Beyond the Screen", img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/694be629d54db68eb5c58bf0_preview.jpg", tags: ["Design", "Development"] },
  { href: "/projects/kaleidoscope", title: "Kaleidoscope", img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/694be63b21cb9d7d541f8aca_preview.jpg", tags: ["Branding", "Development"] },
  { href: "/projects/pixel-playground", title: "Pixel Playground", img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/694be64ba3156cbb166c6fbe_preview.jpg", tags: ["Branding", "Design"] },
];

const arrowIcon = "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68ac43ee4c78a2cd9bdcfcec_arrow-up-right.svg";

export default function PortfolioSection() {
  return (
    <section className="section section-box-shadow position-relative">
      <div className="w-layout-blockcontainer container-fluid w-container">
        <div className="margin-bottom-large">
          <div className="w-layout-grid grid-12-columns-small">
            <div className="section-title-wrapper">
              <h2 className="section-title">(Portfolio)</h2>
            </div>
            <div className="align-right">
              <div className="section-title-wrapper">
                <div className="section-title">/04</div>
              </div>
            </div>
            <div className="align-center">
              <h3 data-text-animation="section-heading-large" className="heading-medium">Selected Work<br />©2021 — 2026</h3>
            </div>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <a key={p.href} href={p.href} className="project-link w-inline-block">
              <img alt={p.title} loading="lazy" src={p.img} className="project-thumbnail" />
              <div className="project-content">
                <div className="project-content-header">
                  <div className="project-title-wrapper">
                    <div className="project-title-front">
                      <h4 className="project-title">{p.title}</h4>
                    </div>
                  </div>
                  <div className="project-arrow">
                    <img loading="lazy" src={arrowIcon} alt="" className="project-arrow-image" />
                  </div>
                </div>
                <div className="project-content-footer">
                  {p.tags.map((tag) => (
                    <div key={tag} className="project-label">
                      <div className="project-label-text">{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="margin-bottom-small">
          <p className="paragraph-small">Discover how our creativity transforms ideas into impactful digital experiences.</p>
        </div>
        <a href="/portfolio" className="button w-inline-block">
          <div className="button-container">
            <div className="overflow-hidden">
              <div className="button-inner">
                <div className="button-text-wrapper">
                  <div className="button-text-front">View all projects</div>
                  <div aria-hidden="true" className="button-text-back">View all projects</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
