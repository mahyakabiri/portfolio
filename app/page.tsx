import { profile } from "@/data/profile";
import Enhancements from "@/components/Enhancements";
import ProjectThumb from "@/components/ProjectThumb";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
);

export default function Home() {
  const p = profile;
  const ringOffset = 176 - (176 * p.lighthouse) / 100;
  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <header className="nav">
        <div className="wrap">
          <a href="#top" className="logo"><span className="logo-mark">{p.initials}</span>{p.name}</a>
          <nav className="nav-links" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="keep">Contact</a>
            <button className="theme-btn" data-theme-toggle aria-label="Toggle color theme">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            </button>
          </nav>
        </div>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <div>
            {p.available && (
              <span className="status rise"><span className="status-dot" />Available for new roles · {p.location}</span>
            )}
            <h1 className="rise d1">
              {p.name}
              <span className="role"><span className="typed" data-typed>{p.roles[0]}</span><span className="caret" aria-hidden="true" /></span>
            </h1>
            <p className="lede rise d2" dangerouslySetInnerHTML={{ __html: p.lede }} />
            <div className="cta-row rise d3">
              <a href="#work" className="btn btn-primary">See my work <Arrow /></a>
              <a href={p.resumeUrl} className="btn">Download résumé</a>
            </div>
          </div>

          <div className="console rise d4" role="img" aria-label={`Lighthouse mobile results for this site, Lighthouse score ${p.lighthouse}`}>
            <div className="console-bar"><i /><i /><i /><span>lighthouse · mobile · this site</span></div>
            <div className="console-body">
              {p.vitals.map((v) => (
                <div className="vital" key={v.name}>
                  <span className="vital-name">{v.name}</span>
                  <span className="vital-track"><span className="vital-fill" style={{ ["--w" as string]: `${v.pct}%` }} /></span>
                  <span className="vital-val">{v.value}</span>
                </div>
              ))}
              <div className="score">
                <svg className="ring" viewBox="0 0 64 64">
                  <circle className="bg" cx="32" cy="32" r="28" />
                  <circle className="fg" cx="32" cy="32" r="28" style={{ strokeDashoffset: ringOffset }} />
                  <text x="32" y="38" textAnchor="middle">{p.lighthouse}</text>
                </svg>
                <p><b>Lighthouse performance</b>Every metric in the green on mobile.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="stats">
          {p.stats.map((s) => (
            <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>

        <section className="block" id="work">
          <div className="section-head">
            <div><span className="eyebrow">Selected work</span><h2>Work with measurable results</h2></div>
            <p>Highlights from Snapp, Kian Digital and Shab, with the numbers that changed.</p>
          </div>
          <div className="projects">
            {p.projects.map((pr) => (
              <article key={pr.title} className={`project${"feature" in pr && pr.feature ? " feature" : ""}`}>
                <div className="thumb"><ProjectThumb variant={pr.thumb} /></div>
                <div className="project-meta">
                  <span className="project-context">{pr.context}</span>
                  <h3>{pr.title}</h3>
                  <p>{pr.description}</p>
                  <div className="impact">{pr.impact.map((m) => <span key={m}>{m}</span>)}</div>
                  <div className="tags">{pr.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="block" id="skills">
          <div className="section-head">
            <div><span className="eyebrow">Toolkit</span><h2>Skills</h2></div>
          </div>
          <div className="skills">
            {p.skills.map((g) => (
              <div className="skill-group" key={g.title}>
                <h3>{g.title}</h3><p>{g.note}</p>
                <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="block" id="experience">
          <div className="section-head">
            <div><span className="eyebrow">Career</span><h2>Experience</h2></div>
          </div>
          <div className="timeline">
            {p.experience.map((j) => (
              <article className={`job${"current" in j && j.current ? " current" : ""}`} key={j.period}>
                <time>{j.period}</time>
                <div>
                  <h3>{j.role} <span>· {j.company}</span></h3>
                  {j.points.length > 0 && <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build something fast.</h2>
            <p>I&apos;m open to full-time roles and freelance projects. The quickest way to reach me is email.</p>
          </div>
          <div className="contact-list">
            {p.contacts.map((c) => (
              <a key={c.label} href={c.href} className="contact-item" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span><small>{c.label}</small><br /><span className="val">{c.value}</span></span>
                {"copy" in c && c.copy ? <button type="button" className="copy-btn" data-copy={c.value}>Copy</button> : <span aria-hidden="true">↗</span>}
              </a>
            ))}
          </div>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} {p.name}</span>
          <span>Built with Next.js, TypeScript and care for performance.</span>
        </footer>
      </main>
      <Enhancements roles={p.roles} />
    </>
  );
}
