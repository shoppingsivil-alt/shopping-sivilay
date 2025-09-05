import { experiences } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export function PortfolioPage() {
  const gridRef = useReveal<HTMLDivElement>()
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <p>Selected projects and roles from my professional experience.</p>
      <div ref={gridRef} className="cards">
        {experiences.map((exp) => (
          <article className="card" key={`${exp.company}-${exp.from}`}>
            <header className="card-head">
              <div className="logo-stack">
                <img className="favicon" src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(exp.url ?? '')}`} alt="" width={32} height={32} loading="lazy" />
              </div>
              <div>
                <h3>{exp.url ? <a href={exp.url} target="_blank" rel="noreferrer">{exp.company}</a> : exp.company}</h3>
                <div className="muted">{exp.role} · {exp.from} – {exp.to}</div>
              </div>
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


