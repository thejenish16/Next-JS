const benefits = [
  {
    num: "/001",
    title: "Creative\nExcellence",
    desc: "We combine imagination with expertise to craft bold and innovative ideas that elevate your brand's identity.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/69540b1b97ce5705c6da2520_benefit-1.jpg",
    alt: "A person wearing a red hooded garment.",
  },
  {
    num: "/002",
    title: "Co-creative\nApproach",
    desc: "Your input is invaluable. We work closely with you, maintaining open communication and refining ideas.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/69540b1b1925b64ce6b26c49_benefit-2.jpg",
    alt: "A diverse group of people in colorful modern clothing.",
  },
  {
    num: "/003",
    title: "On-Time\nDelivery",
    desc: "We respect your deadlines and commit to delivering high-quality work on schedule.",
    img: "https://cdn.prod.website-files.com/68ac43ee4c78a2cd9bdcfc63/69540b1d604ebea009ed95ac_benefit-3.jpg",
    alt: "A laptop placed on a modern chair.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section no-padding">
      <div className="section-with-background">
        <div className="benefits">
          <div className="w-layout-blockcontainer container-fluid w-container">
            <div className="w-layout-grid grid-12-columns-small">
              <h2 className="section-title">(Benefits)</h2>
              <div className="align-right">
                <div className="section-title">/05</div>
              </div>
              <div>
                <h3 className="heading-medium">Beyond Just<br />Websites</h3>
              </div>
              <div className="align-right">
                <h3 className="heading-medium">The Impact<br />We Deliver</h3>
              </div>
            </div>
            <div className="benefits-list">
              {benefits.map((b) => (
                <div key={b.num} className="benefits-item">
                  <div className="number-wrapper">
                    <div className="block-number">{b.num}</div>
                  </div>
                  <div className="benefits-top">
                    <div className="benefits-title">
                      <h4 data-text-animation="section-heading-small" className="heading-small">{b.title}</h4>
                    </div>
                    <div className="benefits-text">
                      <p data-text-animation="paragraph-small" className="paragraph-small no-text-indent">{b.desc}</p>
                    </div>
                  </div>
                  <div className="benefits-bottom">
                    <div className="benefits-image-wrapper">
                      <div className="benefits-image-inner">
                        <img className="image-cover" src={b.img} alt={b.alt} loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
