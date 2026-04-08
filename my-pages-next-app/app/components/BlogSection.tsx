const posts = [
  {
    href: "/blog-posts/rethink-is-on-the-quest-for-exceptional-talent-to-join-our-team",
    title: "Rydge is on the Quest for Exceptional Talent to Join Our Team",
    date: "March 20, 2026",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/695d0a260fc3534476dc2a10_blog-thumbnail-1.jpg",
  },
  {
    href: "/blog-posts/crafting-the-design-for-beyond-the-screen-digital-products-marketplace",
    title: "Crafting the Design for Beyond the Screen Digital Products Marketplace",
    date: "March 20, 2026",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/695d0a35ad1052a192a8722e_blog-thumbnail-2.jpg",
  },
  {
    href: "/blog-posts/reimagining-reality-claims-site-of-the-week-at-awwwards",
    title: "Reimagining Reality Claims Site of the Week at Awwwards!",
    date: "March 20, 2026",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc7f/695d0a6c7e43723c3a6550f0_blog-thumbnail-3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="section">
      <div className="overflow-hidden">
        <div className="w-layout-blockcontainer container-fluid w-container">
          <div className="margin-bottom-large">
            <div className="w-layout-grid grid-12-columns-small">
              <div className="section-title-wrapper">
                <h2 className="section-title">(Blog)</h2>
              </div>
              <div className="align-right">
                <div className="section-title">/06</div>
              </div>
              <div className="align-center">
                <p data-text-animation="section-heading" className="paragraph-large">Stay up to date with our latest projects, awards, press features, and studio happenings.</p>
              </div>
            </div>
          </div>
          <div className="margin-bottom-large">
            <div className="w-layout-grid grid-3-columns">
              {posts.map((post) => (
                <div key={post.href} className="blog-list-wrapper">
                  <div className="blog-item">
                    <a href={post.href} className="blog-link w-inline-block">
                      <div className="blog-thumbnail-wrapper">
                        <div className="blog-thumbnail">
                          <div className="blog-thumbnail-inner">
                            <img loading="lazy" alt={post.title} src={post.img} className="blog-thumbnail-image" />
                          </div>
                        </div>
                      </div>
                      <div className="blog-intro-wrapper">
                        <div className="blog-item-intro">
                          <div className="margin-bottom-extra-small">
                            <h3 className="blog-item-title">{post.title}</h3>
                          </div>
                          <div className="blog-item-date">{post.date}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/blog" className="button w-inline-block">
            <div className="button-container">
              <div className="overflow-hidden">
                <div className="button-inner">
                  <div className="button-text-wrapper">
                    <div className="button-text-front">View Our Blog</div>
                    <div aria-hidden="true" className="button-text-back">View Our Blog</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
