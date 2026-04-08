export default function Navbar() {
  return (
    <div data-animation="default" className="navigation navigation-home w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-duration="400" id="navbar">
      <div className="container-fluid w-container">
        <div className="navigation-inner">
          <a href="/" className="logo home w-nav-brand">
            <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68b824d885a039394009e6bf_logo-white.svg" loading="eager" width={82} height={29} alt="Rydge Logo" />
          </a>
          <div className="location home">
            <img src="https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/68ac43ee4c78a2cd9bdcfcc8_globe-white.svg" loading="eager" alt="location" className="location-icon" />
            <div className="text-block">50.4509° N, 30.5225° E</div>
          </div>
          <nav role="navigation" className="navigation-menu home w-nav-menu">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="navigation-link home w-inline-block">
                <div className="navigation-link-inner">
                  <div className="navigation-link-text">{label}</div>
                  <div aria-hidden="true" className="navigation-link-text-hover">{label}</div>
                </div>
              </a>
            ))}
          </nav>
          <div className="menu-button home w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon-top home"></div>
              <div className="menu-icon-middle home"></div>
              <div className="menu-icon-bottom home"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
