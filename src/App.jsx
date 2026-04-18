import './App.css'

const services = [
  {
    title: 'Digital Products',
    text: 'Websites, apps, portals, booking systems, customer platforms, and internal tools built for real use.',
  },
  {
    title: 'AI Solutions',
    text: 'Chatbots, document tools, business assistants, automation flows, and AI features that save daily effort.',
  },
  {
    title: 'Custom Software',
    text: 'Software shaped around your exact workflow instead of forcing your team into generic tools.',
  },
  {
    title: 'Tech Problem Solving',
    text: 'Fix, improve, automate, rebuild, or launch the technology that your work depends on.',
  },
]

const values = [
  'Clear communication',
  'Practical pricing',
  'Fast prototypes',
  'Custom solutions',
  'Long-term support',
]

const aiUses = [
  'Customer support assistant',
  'Invoice and document automation',
  'Lead qualification system',
  'Business data dashboard',
  'Internal knowledge chatbot',
  'Workflow automation',
]

const motionSignals = [
  'Prototype',
  'Automate',
  'Launch',
  'Improve',
]

const contactReasons = [
  {
    title: 'Build something new',
    text: 'Websites, apps, dashboards, portals, booking systems, and business tools.',
  },
  {
    title: 'Add AI or automation',
    text: 'Chatbots, document workflows, internal assistants, and repeated task automation.',
  },
  {
    title: 'Fix a tech problem',
    text: 'Slow systems, broken workflows, confusing tools, or ideas that need a practical path.',
  },
]

const contactSignals = [
  'Reply within 1 business day',
  'Clear next steps',
  'No pressure call',
  'Practical budget guidance',
]

const projectStats = [
  {
    value: '28+',
    label: 'Completed projects',
    text: 'Websites, tools, dashboards, and automation systems delivered for real business needs.',
  },
  {
    value: '06',
    label: 'Running projects',
    text: 'Active builds across AI workflows, service platforms, and custom internal software.',
  },
  {
    value: '14',
    label: 'AI and automation flows',
    text: 'Repeated tasks converted into faster, cleaner, and easier daily systems.',
  },
]

const processSteps = [
  'Understand the problem',
  'Design the solution',
  'Build the product',
  'Test with real users',
  'Launch and improve',
]

const examples = [
  {
    title: 'Local Service Booking',
    problem: 'Customers were calling for every appointment.',
    solution: 'A mobile-friendly booking flow with payment and reminders.',
  },
  {
    title: 'AI Support Desk',
    problem: 'Repeated questions were taking hours each week.',
    solution: 'An assistant trained on business information and service rules.',
  },
  {
    title: 'Operations Dashboard',
    problem: 'Daily work was spread across sheets, calls, and messages.',
    solution: 'A custom dashboard for tasks, inventory, leads, and reports.',
  },
]

const testimonials = [
  {
    quote: 'Omekum turned a messy idea into a working product plan and then built it without making the process complicated.',
    name: 'Rohan Mehta',
    role: 'Founder, Local Services Platform',
  },
  {
    quote: 'The AI assistant saved our team hours every week. The best part was how clearly everything was explained before launch.',
    name: 'Anika Sharma',
    role: 'Operations Lead, Support Team',
  },
  {
    quote: 'We needed practical software, not a long agency process. Omekum gave us a clean dashboard that our team actually uses.',
    name: 'Vikram Rao',
    role: 'Director, Growing Retail Business',
  },
]

function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Omekum home">
          <span className="brand-mark">O</span>
          Omekum
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#ai">AI Solutions</a>
          <a href="/#about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@omekum.com">Email Us</a>
      </header>

      <section className="contact-hero">
        <img
          className="contact-hero-image"
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
          alt="Team discussing a digital project plan"
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <p className="eyebrow">Contact Omekum</p>
          <h1>Tell us the problem. We will help shape the solution.</h1>
          <p>
            Start with a rough idea, a stuck workflow, or a product you want to launch.
            We will respond with clear next steps, practical options, and a path that fits your stage.
          </p>
        </div>
        <div className="contact-status" aria-label="Contact response promise">
          <span className="status-light" />
          <strong>Open for new projects</strong>
          <span>First reply within 1 business day</span>
        </div>
      </section>

      <section className="contact-main" aria-label="Contact form and project details">
        <div className="contact-copy">
          <p className="eyebrow">Start here</p>
          <h2>A useful first message gets you a useful first answer.</h2>
          <p>
            Share what you want to build, improve, automate, or fix. You do not need a perfect brief.
            A few honest details are enough to begin.
          </p>

          <div className="contact-reasons">
            {contactReasons.map((reason, index) => (
              <article className="contact-reason" key={reason.title} style={{ '--delay': `${index * 90}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>

          <div className="contact-direct">
            <h3>Prefer a direct note?</h3>
            <a href="mailto:hello@omekum.com">hello@omekum.com</a>
            <p>Use this for project ideas, support questions, partnerships, or follow-ups.</p>
          </div>
        </div>

        <form className="contact-form" action="mailto:hello@omekum.com" method="post" encType="text/plain">
          <div className="form-header">
            <p className="eyebrow">Project inquiry</p>
            <h2>Let us know what you need.</h2>
          </div>

          <label>
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </label>

          <label>
            <span>Email address</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </label>

          <label>
            <span>What do you need help with?</span>
            <select name="project_type" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>Website or app</option>
              <option>AI solution</option>
              <option>Automation</option>
              <option>Custom software</option>
              <option>Fix or improve existing tech</option>
            </select>
          </label>

          <label>
            <span>Project details</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what is happening, what you want to change, and any deadline or budget range you already know."
              required
            />
          </label>

          <button className="button primary form-button" type="submit">Send Project Details</button>

          <p className="form-note">
            Your message opens in your email app so you can review it before sending.
            We only use your details to respond to your inquiry.
          </p>
        </form>
      </section>

      <section className="contact-confidence">
        <div className="section-heading">
          <p className="eyebrow">What happens next</p>
          <h2>No confusing process. Just a clear first step.</h2>
        </div>
        <div className="confidence-grid">
          {contactSignals.map((signal, index) => (
            <article className="confidence-card" key={signal} style={{ '--delay': `${index * 90}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{signal}</h3>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="/" aria-label="Omekum home">
            <span className="brand-mark">O</span>
            Omekum
          </a>
          <p>Digital products, AI tools, and custom technology solutions.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="/#services">Digital Products</a>
          <a href="/#ai">AI Solutions</a>
          <a href="/#services">Custom Software</a>
          <a href="/#services">Automation</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/#about">About</a>
          <a href="/#work">Work</a>
          <a href="/contact">Contact</a>
          <a href="mailto:hello@omekum.com">hello@omekum.com</a>
        </div>
      </footer>
    </main>
  )
}

function App() {
  if (window.location.pathname === '/contact') {
    return <ContactPage />
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Omekum home">
          <span className="brand-mark">O</span>
          Omekum
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#ai">AI Solutions</a>
          <a href="#about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Start a Project</a>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
          alt="People working together in a modern digital studio"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Digital agency for practical technology</p>
          <h1>Digital products for real-world problems.</h1>
          <p className="hero-copy">
            Omekum builds websites, apps, AI tools, and custom technology for people and businesses who need practical solutions that work.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">Start a Project</a>
            <a className="button secondary" href="#services">See What We Build</a>
          </div>
          <p className="trust-line">AI, automation, websites, apps, dashboards, and custom software.</p>
        </div>
        <div className="signal-strip" aria-hidden="true">
          {motionSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </section>

      <section className="stats-section" aria-label="Omekum project numbers">
        <div className="stats-intro">
          <p className="eyebrow">Project momentum</p>
          <h2>Work delivered, work in motion, and systems improving every week.</h2>
        </div>
        <div className="stats-grid">
          {projectStats.map((stat, index) => (
            <article className="stat-card" key={stat.label} style={{ '--delay': `${index * 90}ms` }}>
              <span className="stat-value">{stat.value}</span>
              <h3>{stat.label}</h3>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-band" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>We build the technology your work needs.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ '--delay': `${index * 90}ms` }}>
              <span className="service-dot" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="about">
        <div className="split-copy">
          <p className="eyebrow">For everyday builders</p>
          <h2>Advanced tech should not feel out of reach.</h2>
          <p>
            We work with founders, shop owners, creators, service businesses, teams, and individuals who need clear technical help without confusing process or inflated promises.
          </p>
          <div className="value-list" aria-label="Omekum values">
            {values.map((value, index) => (
              <span key={value} style={{ '--delay': `${index * 80}ms` }}>{value}</span>
            ))}
          </div>
        </div>
        <div className="image-panel">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
            alt="Small team planning a digital product together"
          />
        </div>
      </section>

      <section className="ai-section" id="ai">
        <div className="ai-copy">
          <p className="eyebrow">AI without the buzzwords</p>
          <h2>AI that saves time, reduces manual work, and improves decisions.</h2>
          <p>
            We use AI where it makes sense: automating repeated tasks, answering customer questions, searching documents, generating reports, and connecting business data.
          </p>
        </div>
        <div className="ai-board" aria-label="AI solution examples">
          {aiUses.map((item, index) => (
            <span key={item} style={{ '--delay': `${index * 70}ms` }}>{item}</span>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>Simple process. Serious execution.</h2>
          <p>You bring the problem. We shape the product, build the system, and stay close until it works in the real world.</p>
        </div>
        <div className="process-track">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step} style={{ '--delay': `${index * 90}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Solution examples</p>
          <h2>Built around real needs.</h2>
        </div>
        <div className="work-layout">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
            alt="Laptop showing a digital dashboard"
          />
          <div className="work-list">
            {examples.map((example, index) => (
              <article className="work-item" key={example.title} style={{ '--delay': `${index * 90}ms` }}>
                <h3>{example.title}</h3>
                <p><strong>Problem:</strong> {example.problem}</p>
                <p><strong>Solution:</strong> {example.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Client words</p>
          <h2>People come to us when technology needs to become simpler.</h2>
          <p>
            These sample testimonials show the kind of trust we want every Omekum project to earn.
            Replace them with real client quotes as projects go live.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name} style={{ '--delay': `${index * 90}ms` }}>
              <span className="quote-mark">"</span>
              <p>{testimonial.quote}</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <p className="eyebrow">Start with the problem</p>
        <h2>Have a tech problem? Let's solve it.</h2>
        <p>
          Tell us what you are trying to build, fix, automate, or improve. We will help you find the right solution.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/contact">Start a Project</a>
          <a className="button secondary dark" href="/contact">Talk to Omekum</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="Omekum home">
            <span className="brand-mark">O</span>
            Omekum
          </a>
          <p>Digital products, AI tools, and custom technology solutions.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">Digital Products</a>
          <a href="#ai">AI Solutions</a>
          <a href="#services">Custom Software</a>
          <a href="#services">Automation</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="/contact">Contact</a>
          <a href="mailto:hello@omekum.com">hello@omekum.com</a>
        </div>
      </footer>
    </main>
  )
}

export default App
