import { experiences, profile, skills, summary, education, links, spokenLanguages } from '../data/resume'

export function ResumePage() {
  return (
    <section className="resume">
      <div className="hero">
        <h1 className="name">{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <div className="contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span> · {profile.phones.join(' · ')}</span>
          <span> · </span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <p className="summary">{summary}</p>

      <div className="grid two">
        <div>
          <h2>Experience</h2>
          <ul className="experience-list">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.from}`} className="experience-item">
                <div className="exp-head">
                  <h3>{exp.role}</h3>
                  <span className="exp-meta">{exp.company} · {exp.from} – {exp.to}</span>
                </div>
                <ul className="bullets">
                  {exp.bullets.map((b, i) => (
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
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <h2>Skills</h2>
          <div className="skills">
            <div>
              <h3>Languages</h3>
              <p>{skills.languages.join(', ')}</p>
            </div>
            <div>
              <h3>Frameworks & Libraries</h3>
              <p>{skills.frameworks.join(', ')}</p>
            </div>
            <div>
              <h3>Technologies</h3>
              <p>{skills.technologies.join(', ')}</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>{skills.tools.join(', ')}</p>
            </div>
            <div>
              <h3>Soft Skills</h3>
              <p>{skills.softSkills.join(', ')}</p>
            </div>
            <div>
              <h3>Languages</h3>
              <p>{spokenLanguages.join(', ')}</p>
            </div>
          </div>

          <h2>Education</h2>
          <ul className="education-list">
            {education.map((ed) => (
              <li key={`${ed.school}-${ed.year}`}>
                <strong>{ed.degree}</strong>
                <div>{ed.school} · {ed.year}</div>
              </li>
            ))}
          </ul>

          <h2>Links</h2>
          <ul className="links">
            {links.map((l) => (
              <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}


