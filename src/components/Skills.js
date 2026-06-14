'use client';
import { useState } from 'react';

const TABS = [
  { id: 'programming', label: 'Programming' },
  { id: 'databases',   label: 'Databases' },
  { id: 'frameworks',  label: 'Frameworks' },
  { id: 'ml',          label: 'Machine Learning' },
  { id: 'tools',       label: 'Tools & Deployment' },
];

const SKILLS = {
  programming: [
    { icon: 'fa-brands fa-js',     color: '#f7df1e', name: 'JavaScript' },
    { icon: 'fa-solid fa-c',       color: '#6699cc', name: 'C' },
    { icon: 'fa-solid fa-c',       color: '#6699cc', name: 'C++' },
    { icon: 'fa-brands fa-python', color: '#3776AB', name: 'Python' },
  ],
  databases: [
    { icon: 'fa-solid fa-database', color: '#4479A1', name: 'MySQL' },
    { icon: 'fa-solid fa-fire',     color: '#FFCA28', name: 'Firebase' },
    { icon: 'fa-solid fa-leaf',     color: '#47A248', name: 'MongoDB' },
  ],
  frameworks: [
    { icon: 'fa-brands fa-react',     color: '#61DAFB', name: 'React' },
    { icon: 'fa-solid fa-n',          color: '#ffffff', name: 'Next.js' },
    { icon: 'fa-solid fa-wind',       color: '#38B2AC', name: 'Tailwind CSS' },
    { icon: 'fa-brands fa-node-js',   color: '#339933', name: 'Node.js' },
     { icon: 'fa-solid fa-server', color: '#ffffff', name: 'Express.js' },
  ],
  ml: [
    { icon: 'fa-solid fa-table',               color: '#9B59B6', name: 'Pandas' },
    { icon: 'fa-solid fa-book-journal-whills', color: '#F37626', name: 'Jupyter' },
  ],
  tools: [
    { icon: 'fa-brands fa-git-alt', color: '#F05032', name: 'Git' },
    { icon: 'fa-brands fa-figma',   color: '#F24E1E', name: 'Figma' },
    { icon: 'fa-solid fa-caret-up', color: '#ffffff', name: 'Vercel' },
  ],
};

export default function Skills() {
  const [active, setActive] = useState('programming');
  return (
    <section id="skills">
      <div className="section-inner text-center">
        <span className="s-label-dark reveal">Tech Arsenal</span>
        <h2 className="s-title s-title-dark reveal" style={{ textAlign: 'center' }}>
          My Tech <span>Stack</span>
        </h2>
        <p className="reveal" style={{ color: 'var(--light-muted)', marginBottom: '2.5rem', fontSize: '.94rem' }}>
          Technologies I use to bring ideas to life.
        </p>

        <div className="skills-tabs reveal">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
              suppressHydrationWarning
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="skills-content reveal">
          <div className="skill-pane active" key={active}>
            {SKILLS[active].map(s => (
              <div className="skill-card" key={s.name}>
                <i className={s.icon} style={{ color: s.color }} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
