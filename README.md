<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TableStandards — Data-Driven Restaurant Operations</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --green:   #1c3d2e;
    --green2:  #2a5940;
    --green3:  #3d7a59;
    --gold:    #c8a84b;
    --cream:   #f5f0e8;
    --cream2:  #ede8dc;
    --warm:    #d4c9b0;
    --text:    #1a2418;
    --mid:     #4a6355;
    --light:   #8aab98;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
  }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(28, 61, 46, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(200, 168, 75, 0.2);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 64px;
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 20px; color: #fff; letter-spacing: 0.01em;
  }
  .nav-logo span { color: var(--gold); }
  .nav-links { display: flex; gap: 36px; align-items: center; }
  .nav-links a {
    color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500;
    letter-spacing: 0.06em; text-transform: uppercase;
    text-decoration: none; transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-cta {
    background: var(--gold); color: var(--green) !important;
    padding: 9px 20px; border-radius: 3px; font-weight: 600 !important;
    transition: opacity 0.2s !important;
  }
  .nav-cta:hover { opacity: 0.88; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    background: var(--green);
    display: flex; align-items: center;
    position: relative; overflow: hidden;
    padding: 120px 48px 80px;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 80% 50%, rgba(61,122,89,0.25) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 10% 80%, rgba(200,168,75,0.06) 0%, transparent 60%);
  }
  /* Subtle grid texture */
  .hero::after {
    content: '';
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hero-inner {
    position: relative; z-index: 2;
    max-width: 1200px; margin: 0 auto; width: 100%;
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
  }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
  }
  .hero-eyebrow-line { width: 32px; height: 1.5px; background: var(--gold); }
  .hero-eyebrow span {
    font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
  }
  .hero h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(42px, 5vw, 64px);
    color: #fff; line-height: 1.08; margin-bottom: 24px;
  }
  .hero h1 em { color: var(--gold); font-style: italic; }
  .hero-sub {
    font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.62);
    margin-bottom: 40px; max-width: 480px; font-weight: 300;
  }
  .hero-actions { display: flex; gap: 16px; align-items: center; }
  .btn-primary {
    background: var(--gold); color: var(--green);
    padding: 15px 32px; border-radius: 3px;
    font-size: 14px; font-weight: 600; letter-spacing: 0.04em;
    text-decoration: none; border: none; cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
    display: inline-block;
  }
  .btn-primary:hover { transform: translateY(-1px); opacity: 0.92; }
  .btn-ghost {
    color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500;
    text-decoration: none; letter-spacing: 0.04em;
    display: flex; align-items: center; gap: 8px;
    transition: color 0.2s;
  }
  .btn-ghost:hover { color: #fff; }
  .btn-ghost svg { width: 16px; height: 16px; }

  /* Hero right — stat cards */
  .hero-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .stat-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; padding: 24px 20px;
    backdrop-filter: blur(8px);
    animation: fadeUp 0.6s ease both;
  }
  .stat-card:nth-child(1) { animation-delay: 0.1s; }
  .stat-card:nth-child(2) { animation-delay: 0.2s; }
  .stat-card:nth-child(3) { animation-delay: 0.3s; }
  .stat-card:nth-child(4) { animation-delay: 0.4s; }
  .stat-card:nth-child(2) { margin-top: 24px; }
  .stat-card:nth-child(4) { margin-top: 24px; }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 36px; color: var(--gold); line-height: 1;
    margin-bottom: 6px;
  }
  .stat-label { font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 400; line-height: 1.4; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── INTRO STRIP ── */
  .intro-strip {
    background: var(--gold);
    padding: 20px 48px;
    display: flex; align-items: center; justify-content: center; gap: 16px;
  }
  .intro-strip p {
    font-size: 14px; font-weight: 600; color: var(--green);
    letter-spacing: 0.04em; text-align: center;
  }
  .intro-strip a {
    color: var(--green); font-weight: 700; text-decoration: underline;
    white-space: nowrap;
  }

  /* ── SECTION BASE ── */
  section { padding: 96px 48px; }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-label {
    display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
  }
  .section-label-line { width: 28px; height: 1.5px; background: var(--gold); }
  .section-label span {
    font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(32px, 4vw, 48px); line-height: 1.1;
    color: var(--green); margin-bottom: 20px;
  }
  .section-title.light { color: #fff; }
  .section-sub {
    font-size: 16px; line-height: 1.7; color: var(--mid);
    max-width: 560px; font-weight: 300;
  }
  .section-sub.light { color: rgba(255,255,255,0.6); }

  /* ── PROBLEM ── */
  .problem { background: var(--cream); }
  .problem-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: start; margin-top: 64px;
  }
  .problem-list { display: flex; flex-direction: column; gap: 20px; }
  .problem-item {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px; border: 1px solid var(--cream2);
    border-radius: 4px; background: #fff;
    transition: border-color 0.2s, transform 0.2s;
  }
  .problem-item:hover { border-color: var(--warm); transform: translateX(4px); }
  .problem-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    background: rgba(200,168,75,0.12); border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
  }
  .problem-icon svg { width: 18px; height: 18px; color: var(--gold); }
  .problem-item h4 { font-size: 14px; font-weight: 600; color: var(--green); margin-bottom: 4px; }
  .problem-item p { font-size: 13px; line-height: 1.6; color: var(--mid); }

  .problem-right { padding-top: 8px; }
  .big-quote {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(22px, 3vw, 32px); line-height: 1.35;
    color: var(--green); margin-bottom: 24px;
  }
  .big-quote em { color: var(--gold); font-style: italic; }
  .problem-body { font-size: 15px; line-height: 1.75; color: var(--mid); margin-bottom: 32px; }

  /* ── SERVICES ── */
  .services { background: var(--green); }
  .services-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 2px; margin-top: 64px;
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 6px; overflow: hidden;
  }
  .service-card {
    background: rgba(255,255,255,0.03);
    padding: 40px 36px;
    border-right: 1px solid rgba(255,255,255,0.07);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    transition: background 0.25s;
    position: relative; overflow: hidden;
  }
  .service-card:hover { background: rgba(255,255,255,0.06); }
  .service-card::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 3px; height: 0;
    background: var(--gold);
    transition: height 0.3s ease;
  }
  .service-card:hover::before { height: 100%; }
  .service-num {
    font-family: 'DM Serif Display', serif;
    font-size: 48px; color: rgba(255,255,255,0.06);
    line-height: 1; margin-bottom: 16px;
  }
  .service-icon {
    width: 44px; height: 44px;
    background: rgba(200,168,75,0.12);
    border-radius: 4px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 20px;
  }
  .service-icon svg { width: 22px; height: 22px; color: var(--gold); }
  .service-card h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px; color: #fff; margin-bottom: 12px;
  }
  .service-card p { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.55); }
  .service-tag {
    display: inline-block; margin-top: 16px;
    padding: 4px 10px; border: 1px solid rgba(200,168,75,0.3);
    border-radius: 2px; font-size: 10px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold);
  }

  /* ── HOW IT WORKS ── */
  .how { background: var(--cream2); }
  .steps {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; margin-top: 64px;
    position: relative;
  }
  .steps::before {
    content: '';
    position: absolute; top: 28px; left: 10%; right: 10%;
    height: 1px; background: var(--warm); z-index: 0;
  }
  .step { text-align: center; padding: 0 20px; position: relative; z-index: 1; }
  .step-num {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--green); color: var(--gold);
    font-family: 'DM Serif Display', serif; font-size: 22px;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px; border: 3px solid var(--cream2);
  }
  .step h4 { font-size: 15px; font-weight: 600; color: var(--green); margin-bottom: 10px; }
  .step p { font-size: 13px; line-height: 1.65; color: var(--mid); }

  /* ── OFFER ── */
  .offer { background: var(--green); }
  .offer-box {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(200,168,75,0.25);
    border-radius: 8px; padding: 64px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: center;
    position: relative; overflow: hidden;
  }
  .offer-box::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), transparent);
  }
  .offer-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(200,168,75,0.15); border: 1px solid rgba(200,168,75,0.3);
    border-radius: 2px; padding: 6px 14px; margin-bottom: 24px;
  }
  .offer-badge span { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); }
  .offer-box h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 36px; color: #fff; line-height: 1.15; margin-bottom: 16px;
  }
  .offer-box h2 em { color: var(--gold); font-style: italic; }
  .offer-box p { font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.6); }
  .offer-items { display: flex; flex-direction: column; gap: 16px; }
  .offer-item {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px 24px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 4px;
  }
  .offer-check {
    width: 28px; height: 28px; flex-shrink: 0;
    background: rgba(200,168,75,0.15); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .offer-check svg { width: 14px; height: 14px; color: var(--gold); }
  .offer-item h4 { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 3px; }
  .offer-item p { font-size: 12.5px; line-height: 1.55; color: rgba(255,255,255,0.5); }

  /* ── CTA ── */
  .cta-section { background: var(--cream); text-align: center; }
  .cta-inner { max-width: 640px; margin: 0 auto; }
  .cta-inner .section-title { margin-bottom: 16px; }
  .cta-inner p { font-size: 16px; line-height: 1.7; color: var(--mid); margin-bottom: 40px; }
  .cta-form { display: flex; gap: 12px; justify-content: center; }
  .cta-form input {
    padding: 14px 20px; border: 1.5px solid var(--warm);
    border-radius: 3px; font-size: 14px; font-family: 'DM Sans', sans-serif;
    color: var(--text); background: #fff; outline: none;
    width: 280px; transition: border-color 0.2s;
  }
  .cta-form input:focus { border-color: var(--green3); }
  .cta-form input::placeholder { color: var(--light); }

  /* ── FOOTER ── */
  footer {
    background: var(--green);
    border-top: 3px solid var(--gold);
    padding: 40px 48px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 18px; color: #fff;
  }
  .footer-logo span { color: var(--gold); }
  .footer-links { display: flex; gap: 28px; }
  .footer-links a { font-size: 12px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--gold); }
  .footer-right { font-size: 12px; color: rgba(255,255,255,0.3); }

  /* ── ANIMATIONS ── */
  .fade-in {
    opacity: 0; transform: translateY(24px);
    animation: fadeUp 0.7s ease forwards;
  }
  .fade-in-1 { animation-delay: 0.1s; }
  .fade-in-2 { animation-delay: 0.25s; }
  .fade-in-3 { animation-delay: 0.4s; }
  .fade-in-4 { animation-delay: 0.55s; }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">Table<span>Standards</span></div>
  <div class="nav-links">
    <a href="#services">Services</a>
    <a href="#how">How It Works</a>
    <a href="#offer">Free Engagement</a>
    <a href="#contact" class="nav-cta">Book a Call</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow fade-in fade-in-1">
        <div class="hero-eyebrow-line"></div>
        <span>Data-Driven Restaurant Operations</span>
      </div>
      <h1 class="fade-in fade-in-2">
        Your restaurant runs on <em>instinct.</em><br>
        It should run on data.
      </h1>
      <p class="hero-sub fade-in fade-in-3">
        TableStandards delivers operational analytics, compliance infrastructure, and labor intelligence built specifically for restaurant operators — so every decision is backed by numbers, not gut feeling.
      </p>
      <div class="hero-actions fade-in fade-in-4">
        <a href="#contact" class="btn-primary">Book a Free Consultation</a>
        <a href="#services" class="btn-ghost">
          See Services
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-card">
        <div class="stat-num">34%</div>
        <div class="stat-label">Average reduction in food cost variance after 90 days</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">2.1×</div>
        <div class="stat-label">Labor efficiency improvement through data-driven scheduling</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">100%</div>
        <div class="stat-label">Inspection-ready compliance documentation at all times</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">48hr</div>
        <div class="stat-label">From raw data to your first actionable analytics report</div>
      </div>
    </div>
  </div>
</section>

<!-- INTRO STRIP -->
<div class="intro-strip">
  <p>🎁 &nbsp;Limited offer: Complimentary Data Intelligence engagement for qualifying restaurants — <a href="#offer">see what's included →</a></p>
</div>

<!-- PROBLEM -->
<section class="problem" id="services">
  <div class="section-inner">
    <div class="section-label">
      <div class="section-label-line"></div>
      <span>The Problem</span>
    </div>
    <h2 class="section-title">Most restaurants are flying blind<br>on the numbers that matter most.</h2>

    <div class="problem-grid">
      <div class="problem-list">
        <div class="problem-item">
          <div class="problem-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h4>Food Cost Variance You Can't Explain</h4>
            <p>POS data and inventory don't talk to each other. Waste, over-ordering, and theft hide in the gap.</p>
          </div>
        </div>
        <div class="problem-item">
          <div class="problem-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h4>Labor Scheduled on Assumption</h4>
            <p>Staffing decisions based on last week's feeling rather than this week's cover projections and historical traffic patterns.</p>
          </div>
        </div>
        <div class="problem-item">
          <div class="problem-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <div>
            <h4>Compliance That Lives in a Binder</h4>
            <p>Health inspection prep is manual, reactive, and undocumented. One bad inspection resets everything.</p>
          </div>
        </div>
        <div class="problem-item">
          <div class="problem-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h4>Incident Exposure Without Documentation</h4>
            <p>Guest incidents tracked informally — or not at all — until there's a claim and no paper trail to support you.</p>
          </div>
        </div>
      </div>

      <div class="problem-right">
        <p class="big-quote">"We know something's wrong with the numbers. We just don't know <em>where to look.</em>"</p>
        <p class="problem-body">This is the most common thing we hear from operators. Not that the data doesn't exist — it does, scattered across your POS, scheduling software, and logbooks. The problem is it's never been connected, structured, or turned into something you can act on.</p>
        <p class="problem-body">TableStandards connects those systems and delivers a single operational picture your management team can use daily, not quarterly.</p>
        <a href="#contact" class="btn-primary" style="background:var(--green); color:#fff;">Start the Conversation</a>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="services" id="services-detail">
  <div class="section-inner">
    <div class="section-label">
      <div class="section-label-line"></div>
      <span>What We Do</span>
    </div>
    <h2 class="section-title light">Four areas. One operational picture.</h2>
    <p class="section-sub light">Every engagement is built around your existing data — no new systems required to get started.</p>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-num">01</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h3>Food Cost & Waste Analytics</h3>
        <p>We connect your POS, inventory, and receiving data to identify exactly where food cost variance is occurring — by category, by station, by shift. Waste patterns, over-ordering cycles, and portion drift made visible.</p>
        <span class="service-tag">Cost Reduction</span>
      </div>
      <div class="service-card">
        <div class="service-num">02</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Labor & Scheduling Optimization</h3>
        <p>Historical cover data, daypart traffic patterns, and labor cost targets combined into scheduling intelligence that reduces overtime, closes understaffing gaps, and gets your labor percentage where it needs to be.</p>
        <span class="service-tag">Labor Efficiency</span>
      </div>
      <div class="service-card">
        <div class="service-num">03</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <h3>Health Inspection Compliance</h3>
        <p>Structured documentation of your compliance posture — temperature logs, corrective actions, training records — delivered as an audit-ready package before the inspector walks in, not after.</p>
        <span class="service-tag">Risk Management</span>
      </div>
      <div class="service-card">
        <div class="service-num">04</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3>Guest Incident & Liability Reporting</h3>
        <p>A structured incident documentation system that captures what happened, when, and what response was taken — creating the paper trail that protects you when a claim arrives months later.</p>
        <span class="service-tag">Liability Protection</span>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how" id="how">
  <div class="section-inner">
    <div class="section-label">
      <div class="section-label-line"></div>
      <span>The Process</span>
    </div>
    <h2 class="section-title">From your data to actionable insight<br>in 48 hours.</h2>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <h4>Share Your Data</h4>
        <p>Export from your existing POS, scheduling, and logbook systems. We work with whatever format you have.</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h4>We Structure & Analyze</h4>
        <p>Our team normalizes, connects, and runs analysis across your operational data within 48 hours.</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h4>Receive Your Report</h4>
        <p>A clean, management-ready analytics package delivered with a walkthrough call to explain every finding.</p>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <h4>Act on It</h4>
        <p>Specific, prioritized recommendations your team can implement immediately — no consultant-speak.</p>
      </div>
    </div>
  </div>
</section>

<!-- OFFER -->
<section class="offer" id="offer">
  <div class="section-inner">
    <div class="offer-box">
      <div>
        <div class="offer-badge">
          <span>Limited Availability</span>
        </div>
        <h2>Complimentary Data Intelligence <em>Engagement</em></h2>
        <p>We're offering a free full-scope operational analytics engagement to a select group of restaurant operators this season. Your data, analyzed and delivered as a complete management-ready package — at no cost.</p>
        <br>
        <p style="color:rgba(255,255,255,0.45); font-size:13px;">No pitch at the end. No obligation to continue. Just something genuinely useful for your operation.</p>
        <br>
        <a href="#contact" class="btn-primary" style="margin-top:8px;">Claim Your Free Engagement</a>
      </div>
      <div class="offer-items">
        <div class="offer-item">
          <div class="offer-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <h4>Food Cost Variance Analysis</h4>
            <p>Full breakdown of where your food cost is leaking and what's driving it.</p>
          </div>
        </div>
        <div class="offer-item">
          <div class="offer-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <h4>Labor Efficiency Snapshot</h4>
            <p>How your labor spend maps to actual traffic and where the gaps are by daypart.</p>
          </div>
        </div>
        <div class="offer-item">
          <div class="offer-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <h4>Compliance Posture Review</h4>
            <p>A plain-language summary of where your documentation stands and what's exposed.</p>
          </div>
        </div>
        <div class="offer-item">
          <div class="offer-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <h4>50% Off Audits — First Year</h4>
            <p>New partners receive half off our full operational audit program in year one.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
  <div class="section-inner">
    <div class="cta-inner">
      <div class="section-label" style="justify-content:center;">
        <div class="section-label-line"></div>
        <span>Get Started</span>
        <div class="section-label-line"></div>
      </div>
      <h2 class="section-title">Ready to see what your<br>data actually says?</h2>
      <p>Book a 20-minute call. We'll tell you exactly what we'd look at first and what we'd expect to find — before you share a single number.</p>
      <div class="cta-form">
        <input type="email" placeholder="your@restaurant.com">
        <a href="mailto:hello@tablestandards.com" class="btn-primary">Book a Call</a>
      </div>
      <p style="margin-top:16px; font-size:12px; color:var(--light);">Or email directly: hello@tablestandards.com</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Table<span>Standards</span></div>
  <div class="footer-links">
    <a href="#services">Services</a>
    <a href="#how">How It Works</a>
    <a href="#offer">Free Engagement</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="footer-right">© 2025 TableStandards. All rights reserved.</div>
</footer>

</body>
</html>
