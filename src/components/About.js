export default function About() {
  const stats = [
    { num: '2+',   label: 'Projects Built' },
    { num: '1',    label: 'Internship' },
    { num: '5+',   label: 'Technologies' },
    { num: '2027', label: 'Graduation' },
  ];
  const highlights = [
    { icon: 'fa-graduation-cap', text: 'B.E. Electronics & Telecom — SFIT, Mumbai (2023–2027)' },
    { icon: 'fa-briefcase',      text: 'Frontend Developer Intern — QuickYearning Pvt. Ltd (2025)' },
    { icon: 'fa-microphone',text: 'Strong public speaking & team collaboration skills' },
  ];
  return (
    <section id="about">
      <div className="section-inner">
        <span className="s-label-light reveal">Get to know </span>
        <h2 className="s-title s-title-light reveal">About <span>Me</span></h2>
        <div className="s-line-light reveal" />
        <div className="about-grid">
          <div className="reveal">
            <p className="about-bio">
              I&apos;m a passionateand results-driven Full Stack Developer 
              and Machine Learning enthusiast, currently pursuing a 
              degree in Electronics & Telecommunication Engineering at St. Francis 
              Institute of Technology, where I’m also doing an honors track in AI and Machine Learning.
               I have a strong foundation in software development and a 
               problem-solving mindset. I recently put these skills into 
               practice as an intern at Quick Yearning Pvt. Ltd, where I
                worked on fintech dashboards. I enjoy crafting intuitive
               web experiences, exploring the potential of AI/ML, 
               and developing solutions that bridge innovation with impact.
            </p>
            
          </div>
          <div className="about-highlights-box reveal">
            <div className="about-highlights">
              {highlights.map(h => (
                <div className="highlight-item" key={h.text}>
                  <div className="hi-icon"><i className={`fa-solid ${h.icon}`} /></div>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
