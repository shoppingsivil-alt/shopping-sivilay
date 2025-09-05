import { experiences } from '../data/resume'

export function PortfolioPage() {
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <p>Selected projects and roles from my professional experience.</p>
      <div className="cards">
        {experiences.map((exp) => (
          <article className="card" key={`${exp.company}-${exp.from}`}>
            <header>
              <h3>{exp.company}</h3>
              <div className="muted">{exp.role} · {exp.from} – {exp.to}</div>
            </header>
            <ul>
              {exp.bullets.slice(0, 3).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {exp.tags && (
              <div className="tags">
                {exp.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}


