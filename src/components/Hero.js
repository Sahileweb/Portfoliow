'use client';
import { useEffect, useRef } from 'react';

const PHRASES = [
  'Full Stack Developer & AI / ML Enthusiast',
];

const MARQUEE_ITEMS = [
  { icon: 'fa-solid fa-code',           text: 'Full Stack Developer' },
  { icon: 'fa-solid fa-brain',          text: 'AI / ML Enthusiast' },
  { icon: 'fa-brands fa-react',         text: 'React & Next.js' },
  { icon: 'fa-solid fa-database',       text: 'MongoDB & Node.js' },
  { icon: 'fa-solid fa-graduation-cap', text: 'SFIT Mumbai 2027' },
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let pi = 0, ci = 0, del = false, t;
    function tick() {
      const el = typedRef.current;
      if (!el) return;
      const w = PHRASES[pi];
      el.textContent = del ? w.slice(0, ci--) : w.slice(0, ci++);
      if (!del && ci > w.length)  { t = setTimeout(() => { del = true; tick(); }, 1800); return; }
      if (del  && ci < 0)         { del = false; pi = (pi + 1) % PHRASES.length; }
      t = setTimeout(tick, del ? 55 : 85);
    }
    tick();
    return () => clearTimeout(t);
  }, []);

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section id="home">
      <div className="hero-grid" />
      <div className="hero-glow-a" />
      <div className="hero-glow-b" />
      <div className="hero-glow-center" />

      <div className="hero-inner">
        {/* ── Left text ── */}
        <div className="hero-text">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            Sahil&nbsp;<span className="grad">Mundhe</span>
          </h1>

          <div className="hero-typewriter">
            <span ref={typedRef} />
            <span className="cursor">|</span>
          </div>

          <p className="hero-tagline">
            Full Stack Developer skilled in building responsive web applications.
            Focused on clean code, great UX, and turning ideas into real products.
          </p>

          <div className="hero-marquee-wrap">
            <div className="hero-marquee">
              {doubled.map((m, i) => (
                <span key={i}><i className={m.icon} />{m.text}</span>
              ))}
            </div>
          </div>

          <div className="hero-btns">
            <a className="btn btn-fill" href="#projects">
              <i className="fa-solid fa-briefcase" /> View My Work
            </a>
            <a className="btn btn-ghost-light" href="#contact">
              <i className="fa-solid fa-paper-plane" /> Get In Touch
            </a>
          </div>
          </div>

        {/* ── Right photo ── */}
        <div className="hero-photo-side">
          {/*
            ── REMOVED floating chips (Mumbai / MERN) ──
            If you want them back, add:
              <div className="hero-chip hero-chip-tl">
                <i className="fa-solid fa-code" /> MERN Stack Dev
              </div>
            before the ring, and add the CSS back from globals.css
          */}

          <div className="hero-ring">
            <div className="hero-ring-inner">
              {/*
                ── ADD YOUR PHOTO ──
                1. Save your photo to:  public/images/profile.jpg
                2. Replace the div below with:
                   <img
                     src="/images/profile.jpg"
                     alt="Sahil Mundhe"
                     style={{ width:'100%', height:'100%',
                              objectFit:'cover', borderRadius:'50%' }}
                   />
              */}
              <div className="hero-initials-box">
                <span className="hero-initials">SM</span>
                <span className="hero-initials-hint">add your photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
