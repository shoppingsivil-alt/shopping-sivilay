import { profile } from '../data/resume'

export function ContactPage() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out via email or phone.</p>
      <ul className="contact-list">
        <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>Phone: {profile.phones.join(' · ')}</li>
        <li>GitHub: <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
      </ul>
    </section>
  )
}


