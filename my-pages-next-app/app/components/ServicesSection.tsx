const services = [
  {
    num: "/001",
    title: "Branding",
    desc: "We craft compelling brand identities that resonate with your audience and leave a lasting impression.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/6915fcb857bb3bb99732d5a7_1.jpg",
    tags: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Rebranding", "Packaging Design"],
  },
  {
    num: "/002",
    title: "Design",
    desc: "Our design services bring creativity and function together, delivering user-friendly experiences and products.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/6915fcb703aeebc7bcf6c999_2.jpg",
    tags: ["Graphic Design", "UI/UX Design", "Motion Design", "Print Design", "Environmental Design"],
  },
  {
    num: "/003",
    title: "Engineering",
    desc: "From robust websites to cutting-edge web applications, our development team builds fast, secure, and scalable digital solutions.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/6915fcb7cb78ff2fd8c7b05d_3.jpg",
    tags: ["Front-End", "Back-End", "E-Commerce", "CMS Development", "Web Applications"],
  },
  {
    num: "/004",
    title: "Art Direction",
    desc: "Our art direction service brings your brand's vision to life through a cohesive visual narrative.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/6915fcb7ef4902e82295e8e7_4.jpg",
    tags: ["Creative Concept", "Storyboarding", "Photoshoot", "Brand Aesthetic", "Video Production"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section section-box-shadow">
      <div className="margin-bottom-large">
        <div className="w-layout-blockcontainer container-fluid w-container">
          <div className="w-layout-grid grid-12-columns-small">
            <div className="section-title-wrapper">
              <h2 className="section-title">(Services)</h2>
            </div>
            <div className="align-right">
              <div className="section-title-wrapper">
                <div className="section-title">/02</div>
              </div>
            </div>
            <div className="align-center">
              <p data-text-animation="section-heading" className="paragraph-large">No fluff, no noise — just sharp design, smart strategy, and a deep love for creativity.</p>
            </div>
          </div>
        </div>
      </div>
      <div data-carousel="wrapper" className="services-carousel">
        <div data-carousel="inner" className="services-carousel-inner">
          {services.map((s) => (
            <div key={s.num} className="services-carousel-item">
              <div className="services-carousel-content">
                <div className="number-wrapper">
                  <div className="block-number">{s.num}</div>
                </div>
                <div className="margin-bottom-small">
                  <h3 className="heading-small">{s.title}</h3>
                </div>
                <div className="services-carousel-bottom">
                  <p className="paragraph-small">{s.desc}</p>
                </div>
              </div>
              <div className="services-carousel-thumbnail">
                <div className="services-carousel-image-wrapper">
                  <img src={s.img} loading="lazy" alt={s.title} className="services-carousel-image" />
                </div>
                <div className="services-carousel-tags">
                  {s.tags.map((tag) => (
                    <div key={tag} className="services-carousel-tag">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
