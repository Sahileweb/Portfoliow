'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

/*
  HOW TO ADD REAL PROJECT SCREENSHOTS:
  1. Put images in /public/projects/  e.g. shopsphere.png
  2. Replace  img: null  with  img: '/projects/shopsphere.png'
  The <img> tag will automatically show it.
*/
const PROJECTS = [
  {
    id: 1,
    img: '/projects/syncedu.png',
    icon: 'fa-solid fa-graduation-cap',
    label: 'SyncEdu',
    title: 'SyncEdu',
    desc: 'Full-stack MERN platform with WebSockets enabling real-time collaboration, live updates, and seamless communication between students and educators.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'WebSockets'],
    demo: 'https://sync-edu.vercel.app/',
    code: 'https://github.com/Sahileweb/SyncEdu',
  },
  {
    id: 2,
    img: '/projects/clausebreaker.png',
    icon: 'fa-solid fa-robot',
    label: 'ClauseBreaker AI',
    title: 'ClauseBreaker AI',
    desc: 'ClauseBreaker AI is an intelligent web application that instantly converts complex legal jargon into plain English, highlights potential risks, and provides actionable advice. Powered by Googles Gemini AI, it helps users understand legal documents before they sign.',
    tags: ['React','TypeScript','Node.js','Express.js','Gemini AI'],
    code: 'https://github.com/Sahileweb/clausebreaker',
  },
  {
    id: 3,
    img: '/projects/ecomm.png',                        // e.g. '/projects/shopsphere.png'
    icon: 'fa-solid fa-cart-shopping',
    label: 'ShopSphere',
    title: 'ShopSphere',
    desc: 'Implemented frontend components such as product listing, cart layout, and checkout form using React.js andTailwind CSS. Integrated sample REST API endpoints for displaying product data and handling user actions.',
    tags: ['Javascript','Html','Css'],
    demo: 'https://sahileweb.github.io/ecommerce-site/',
    code: 'https://github.com/Sahileweb/ecommerce-site',
  },
  
];

const GAP        = 24;   // px — matches CSS gap:1.5rem
const CARDS_VISIBLE = 2; // 2 on desktop for bigger cards

export default function Projects() {
  const [idx, setIdx]     = useState(0);
  const trackRef          = useRef(null);
  const viewRef           = useRef(null);
  const dragData          = useRef(null);

  /* How many cards to show at this viewport width */
  const perView = useCallback(() => {
    if (typeof window === 'undefined') return CARDS_VISIBLE;
    if (window.innerWidth <= 900)  return 1;
    if (window.innerWidth <= 1024) return 2;
    return CARDS_VISIBLE;
  }, []);

  const maxIdx = useCallback(() => Math.max(0, PROJECTS.length - perView()), [perView]);

  /* Card pixel width = (viewport - gaps) / perView */
  const cardW = useCallback(() => {
    if (!viewRef.current) return 0;
    const vw = viewRef.current.clientWidth;
    const pv = perView();
    return (vw - GAP * (pv - 1)) / pv;
  }, [perView]);

  const applyTransform = useCallback((i, animate = true) => {
    const t = trackRef.current;
    if (!t) return;
    t.classList.toggle('dragging', !animate);
    t.style.transform = `translateX(-${i * (cardW() + GAP)}px)`;
  }, [cardW]);

  useEffect(() => { applyTransform(idx); }, [idx, applyTransform]);

  useEffect(() => {
    const onResize = () => {
      const safe = Math.min(idx, maxIdx());
      setIdx(safe);
      applyTransform(safe);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [idx, maxIdx, applyTransform]);

  const move = (dir) => setIdx(p => Math.min(Math.max(p + dir, 0), maxIdx()));

  /* Mouse drag */
  const onMouseDown = (e) => {
    dragData.current = { startX: e.clientX, startIdx: idx };
    applyTransform(idx, false);
  };
  const onMouseMove = (e) => {
    if (!dragData.current) return;
    const dx = dragData.current.startX - e.clientX;
    trackRef.current.style.transform =
      `translateX(-${dragData.current.startIdx * (cardW() + GAP) + dx}px)`;
  };
  const finishDrag = (endX) => {
    if (!dragData.current) return;
    const dx  = dragData.current.startX - endX;
    const thr = cardW() * 0.2;
    let next  = dragData.current.startIdx;
    if (dx >  thr) next = Math.min(next + 1, maxIdx());
    if (dx < -thr) next = Math.max(next - 1, 0);
    dragData.current = null;
    setIdx(next);
    applyTransform(next, true);
  };
  const onMouseUp    = (e)   => finishDrag(e.clientX);
  const onMouseLeave = ()    => { if (dragData.current) finishDrag(dragData.current.startX); };

  /* Touch drag */
  const onTouchStart = (e) => {
    dragData.current = { startX: e.touches[0].clientX, startIdx: idx };
    applyTransform(idx, false);
  };
  const onTouchMove = (e) => {
    if (!dragData.current) return;
    const dx = dragData.current.startX - e.touches[0].clientX;
    trackRef.current.style.transform =
      `translateX(-${dragData.current.startIdx * (cardW() + GAP) + dx}px)`;
  };
  const onTouchEnd = (e) => finishDrag(e.changedTouches[0].clientX);

  /* Scrollbar thumb width & position */
  const total   = PROJECTS.length;
  const pv      = perView();
  const thumbPct = Math.min(100, (pv / total) * 100);
  const thumbLeft = maxIdx() > 0 ? (idx / maxIdx()) * (100 - thumbPct) : 0;

  const dots = maxIdx() + 1;

  return (
    <section id="projects">
      {/* Centered heading */}
      <div className="projects-title-area">
         <h2 className="s-title s-title-light reveal">My <span>Projects</span></h2>
        <p className="s-subtitle-center reveal">A selection of my work. See something you like!</p>
        <div className="s-underline reveal" />
      </div>

      {/* Arrow-left  |  viewport  |  Arrow-right */}
      <div className="projects-carousel-root">
        <button
          className="proj-arrow proj-arrow-left"
          onClick={() => move(-1)}
          disabled={idx === 0}
          aria-label="Previous"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div
          className="projects-viewport"
          ref={viewRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="projects-track" ref={trackRef}>
            {PROJECTS.map(p => (
              <div className="project-card" key={p.id}>
                {/* Screenshot or placeholder */}
                {p.img
                  ? <img src={p.img} alt={p.title} className="project-img" />
                  : (
                    <div className="project-img-ph">
                      <i className={p.icon} />
                      <span>{p.label}</span>
                    </div>
                  )
                }

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-tags">
                    {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
                  </div>

                  <div className="project-links">
                    {p.demo && (
                      <a href={p.demo} className="plink plink-demo">
                        <i className="fa-solid fa-circle-play" /> Live Demo
                      </a>
                    )}
                    <a href={p.code} className="plink plink-code"
                       target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="proj-arrow proj-arrow-right"
          onClick={() => move(1)}
          disabled={idx >= maxIdx()}
          aria-label="Next"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      {/* Horizontal scrollbar */}
      <div className="projects-scrollbar-wrap">
        <div className="projects-scrollbar"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct  = (e.clientX - rect.left) / rect.width;
            setIdx(Math.round(pct * maxIdx()));
          }}
        >
          <div
            className="projects-scrollbar-thumb"
            style={{ width: `${thumbPct}%`, marginLeft: `${thumbLeft}%` }}
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {Array.from({ length: dots }).map((_, i) => (
          <button
            key={i}
            className={`cdot${i === idx ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}
