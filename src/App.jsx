import {
  profile, mailto, hero, problems, services, pricingNote, process,
  reasons, projects, skills, supportStrengths, terms, enquiryChecklist,
} from './content.js';

function External({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function SectionHead({ id, kicker, title, children }) {
  return (
    <header className="section-head">
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </header>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
            <span className="brand-mark" aria-hidden="true">SS</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <nav aria-label="Sections">
            <ul className="nav">
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact" className="nav-cta">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title">{hero.title}</h1>
              <p className="lead">{hero.lead}</p>
              <div className="actions">
                <a className="btn btn-primary" href={mailto}>Discuss your project</a>
                <a className="btn btn-ghost" href="#work">View project work</a>
              </div>
            </div>
            <aside className="facts" aria-label="At a glance">
              <h2 className="facts-title">At a glance</h2>
              <dl>
                {hero.facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" aria-labelledby="problems-title">
          <div className="wrap">
            <SectionHead id="problems-title" kicker="Where I can help" title="Problems I solve" />
            <div className="grid-3">
              {problems.map((p) => (
                <article className="card problem" key={p.q}>
                  <h3>{p.q}</h3>
                  <p>{p.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <SectionHead id="services-title" kicker="Services" title="What I can deliver, and roughly what it costs">
              Three clearly bounded jobs. Each has a written quote before any work starts.
            </SectionHead>
            <div className="grid-3">
              {services.map((s) => (
                <article className="card service" key={s.id} aria-labelledby={`svc-${s.id}`}>
                  <h3 id={`svc-${s.id}`}>{s.title}</h3>
                  <p className="outcome">{s.outcome}</p>
                  <p className="price">
                    <span className="price-label">Estimated from</span>
                    <span className="price-value">{s.range}</span>
                  </p>
                  <h4>Typical scope</h4>
                  <ul className="ticks">
                    {s.examples.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                  <h4>Not included</h4>
                  <p className="muted">{s.excludes}</p>
                </article>
              ))}
            </div>
            <p className="note" role="note">{pricingNote}</p>
          </div>
        </section>

        <section className="section" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <SectionHead id="process-title" kicker="How I work" title="From first message to handover" />
            <ol className="steps">
              {process.map((p, i) => (
                <li className="step" key={p.step}>
                  <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.step}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section alt" aria-labelledby="why-title">
          <div className="wrap">
            <SectionHead id="why-title" kicker="Why work with me" title="Dependable, clear and careful" />
            <div className="grid-4">
              {reasons.map((r) => (
                <article className="reason" key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <SectionHead id="work-title" kicker="Proof" title="Project work">
              Live demos and personal projects you can open and inspect. Concept sites use fictional brands; none of these are client projects.
            </SectionHead>
            <div className="grid-3">
              {projects.map((p) => (
                <article className="card project" key={p.title}>
                  <p className="tag">{p.label}</p>
                  <h3>{p.title}</h3>
                  <dl className="project-dl">
                    <dt>Problem</dt><dd>{p.problem}</dd>
                    <dt>What I built</dt><dd>{p.built}</dd>
                    <dt>What it shows</dt><dd>{p.shows}</dd>
                    <dt>Status</dt><dd>{p.status}</dd>
                  </dl>
                  <ul className="chips" aria-label="Technologies">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <p className="project-links">
                    {p.live && <External className="link" href={p.live}>View live site</External>}
                    {p.repo && <External className="link" href={p.repo}>View source on GitHub</External>}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" aria-labelledby="skills-title">
          <div className="wrap two-col">
            <div>
              <SectionHead id="skills-title" kicker="Toolkit" title="Technologies" />
              <dl className="skills">
                {skills.map((g) => (
                  <div className="skill-row" key={g.group}>
                    <dt>{g.group}</dt>
                    <dd>
                      <ul className="chips">
                        {g.items.map((i) => <li key={i}>{i}</li>)}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <SectionHead id="support-title" kicker="How I deliver" title="Working strengths" />
              <ul className="ticks">
                {supportStrengths.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="terms-title">
          <div className="wrap">
            <div className="terms">
              <SectionHead id="terms-title" kicker="Contract terms" title="Fair for both sides" />
              <ul className="ticks">
                {terms.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <SectionHead id="contact-title" kicker="Contact" title="Tell me what you need">
                Email is the quickest way to start. I reply with questions or a written quote.
              </SectionHead>
              <a className="btn btn-primary btn-lg" href={mailto}>Discuss your project</a>
              <ul className="contact-links">
                <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><External href={profile.linkedin}>LinkedIn</External></li>
                <li><External href={profile.github}>GitHub</External></li>
              </ul>
            </div>
            <aside className="card checklist" aria-labelledby="checklist-title">
              <h3 id="checklist-title">Useful in a first message</h3>
              <ul className="ticks">
                {enquiryChecklist.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
          <p><a href="#top">Back to top</a></p>
        </div>
      </footer>
    </>
  );
}
