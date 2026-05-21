import './App.css'

const heroSignals = ['AI systems', 'Operator tools', 'Workflow engines', 'Decision layers']

const proofStats = [
  {
    value: '12 days',
    label: 'Average first live prototype',
    text: 'Fast enough to create momentum, structured enough to survive real use.',
  },
  {
    value: '03 layers',
    label: 'Product, AI, and operations thinking',
    text: 'We design the interface, the intelligence, and the workflow around it together.',
  },
  {
    value: '100%',
    label: 'Custom delivery',
    text: 'No template stack, no generic automation theatre, no fake complexity.',
  },
]

const capabilities = [
  {
    title: 'AI Product Design',
    text: 'We shape user journeys where AI is useful, legible, and worth trusting.',
  },
  {
    title: 'Internal Operating Tools',
    text: 'Dashboards, copilots, review layers, and automation systems built around how teams actually work.',
  },
  {
    title: 'Workflow Intelligence',
    text: 'Document parsing, lead routing, support resolution, and decision support designed for repeatability.',
  },
  {
    title: 'Launch-Ready Experiences',
    text: 'Premium sites, client portals, and product surfaces that signal quality before a pitch even starts.',
  },
]

const principles = [
  'Opinionated product thinking',
  'Interfaces that explain the system',
  'Automation without losing human control',
  'Sharper brand presence at every touchpoint',
]

const featuredWork = [
  {
    name: 'Revenue Triage Console',
    type: 'Lead qualification and routing',
    summary: 'An AI-assisted intake system that scores inbound demand, highlights urgency, and pushes the right next step to operators.',
  },
  {
    name: 'Knowledge Operator',
    type: 'Internal assistant for service teams',
    summary: 'A grounded assistant that answers process questions from verified company material instead of hallucinating through meetings.',
  },
  {
    name: 'Document Action Engine',
    type: 'Intake, extraction, and review',
    summary: 'A review-first pipeline for invoices, onboarding files, and operational paperwork where teams need speed and traceability.',
  },
]

const buildSteps = [
  'Frame the business tension',
  'Map the operator and user flow',
  'Prototype the system shape quickly',
  'Build the production-grade version',
]

const signals = [
  {
    title: 'Looks premium because the system is clear',
    text: 'Strong UX is not just polish. It signals maturity, confidence, and control.',
  },
  {
    title: 'AI is visible where it helps and silent where it should be',
    text: 'We avoid the common mistake of turning every screen into a chatbot demo.',
  },
  {
    title: 'Motion is used to guide attention, not perform intelligence',
    text: 'The site should feel alive, but never fake or overloaded.',
  },
]

const contactReasons = [
  'A startup product that needs a stronger first impression',
  'An internal team buried under repeated manual work',
  'A service business ready to operationalize with AI',
]

function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="orilto.ai home">
          <span className="brand-mark">O</span>
          <span>orilto.ai</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/#capabilities">Capabilities</a>
          <a href="/#work">Work</a>
          <a href="/#process">Process</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@orilto.ai">Email</a>
      </header>

      <section className="contact-hero">
        <div className="contact-backdrop" />
        <div className="contact-grid">
          <div className="contact-hero-copy">
            <p className="eyebrow">Start a conversation</p>
            <h1>Bring the messy version. We are used to shaping it.</h1>
            <p>
              If you are building an AI product, modernizing an operation, or trying to turn
              a half-clear idea into a credible system, this is the right place to start.
            </p>
            <div className="contact-mini-list">
              {contactReasons.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="contact-card">
            <p className="eyebrow">Direct contact</p>
            <h2>hello@orilto.ai</h2>
            <p>Share the problem, the goal, the constraint, or the current setup. A rough brief is enough.</p>
            <div className="status-row">
              <span className="status-dot" />
              <span>Reply within 1 business day</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-copy">
          <p className="eyebrow">What to send</p>
          <h2>The best first message is honest, specific, and incomplete.</h2>
          <p>
            You do not need a polished requirements document. We only need enough truth to
            understand what is stuck, what matters, and what success should look like.
          </p>
          <div className="contact-points">
            <article>
              <strong>01</strong>
              <h3>What is breaking down right now?</h3>
              <p>Manual work, slow teams, weak product perception, poor onboarding, unreliable handoffs.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>What are you trying to build?</h3>
              <p>An AI-first startup site, an internal tool, a workflow system, or a customer-facing product layer.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>What matters most?</h3>
              <p>Speed, conversion, trust, operational clarity, launch date, or better team leverage.</p>
            </article>
          </div>
        </div>

        <form className="contact-form" action="mailto:hello@orilto.ai" method="post" encType="text/plain">
          <div className="form-header">
            <p className="eyebrow">Project inquiry</p>
            <h2>Tell us what you are building.</h2>
          </div>

          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </label>

          <label>
            <span>Project type</span>
            <select name="project_type" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>AI startup website</option>
              <option>AI product or feature</option>
              <option>Internal operations tool</option>
              <option>Automation or workflow system</option>
              <option>Existing product redesign</option>
            </select>
          </label>

          <label>
            <span>Brief</span>
            <textarea
              name="message"
              rows="6"
              placeholder="What are you building, what is not working yet, and what should this solve?"
              required
            />
          </label>

          <button className="button primary form-button" type="submit">Send inquiry</button>
          <p className="form-note">Your email app will open so you can review the message before sending.</p>
        </form>
      </section>
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
        <a className="brand" href="#home" aria-label="orilto.ai home">
          <span className="brand-mark">O</span>
          <span>orilto.ai</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Start a project</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-noise" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-copy">
          <p className="eyebrow">AI systems with product taste</p>
          <h1>AI experiences built to feel sharp, useful, and unmistakably premium.</h1>
          <p className="hero-text">
            orilto.ai designs modern websites, AI workflows, and operator tools for startups and
            teams that want real leverage, not another generic AI facade.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="/contact">Start a project</a>
            <a className="button secondary" href="#work">See featured work</a>
          </div>

          <div className="hero-signal-row" aria-label="Core service signals">
            {heroSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-frame">
            <div className="panel-header">
              <span>Live system view</span>
              <span>orilto.ai</span>
            </div>
            <div className="panel-body">
              <div className="panel-column">
                <div className="metric-card accent-coral">
                  <strong>Faster decisions</strong>
                  <span>Reduce manual triage with clear AI-assisted workflows.</span>
                </div>
                <div className="metric-card accent-gold">
                  <strong>Higher trust</strong>
                  <span>Interfaces that explain what the system is doing and why.</span>
                </div>
              </div>
              <div className="panel-timeline">
                <div className="timeline-node">
                  <span>01</span>
                  <p>Signal enters the system</p>
                </div>
                <div className="timeline-node">
                  <span>02</span>
                  <p>AI organizes, extracts, or recommends</p>
                </div>
                <div className="timeline-node">
                  <span>03</span>
                  <p>Human operators act with context</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band">
        {proofStats.map((item, index) => (
          <article className="proof-card" key={item.label} style={{ '--delay': `${index * 90}ms` }}>
            <span>{item.value}</span>
            <h2>{item.label}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="editorial-section" id="capabilities">
        <div className="editorial-intro">
          <p className="eyebrow">What we build</p>
          <h2>A sharper standard for AI startups and ambitious teams.</h2>
          <p>
            The job is not just to add AI. The job is to design an experience, a system, and a
            perception of quality that can survive investor demos, client scrutiny, and daily use.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card" key={item.title} style={{ '--delay': `${index * 100}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-feature">
        <div className="feature-note">
          <p className="eyebrow">Why the work feels different</p>
          <h2>We do not treat design as garnish on top of AI infrastructure.</h2>
          <p>
            The interface is where confidence is earned. If the product looks confused, the system
            feels untrustworthy, even when the backend is strong. We design both together.
          </p>
          <div className="principle-list">
            {principles.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="feature-visual" aria-hidden="true">
          <div className="visual-stack">
            <div className="visual-card visual-card-main">
              <small>Operator console</small>
              <strong>Human review stays in the loop</strong>
            </div>
            <div className="visual-card visual-card-side">
              <small>System layer</small>
              <strong>Signals, prompts, confidence, actions</strong>
            </div>
            <div className="visual-grid">
              <span>Inputs</span>
              <span>Context</span>
              <span>Routing</span>
              <span>Review</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected directions</p>
          <h2>The kind of systems we are built to shape.</h2>
        </div>

        <div className="work-grid">
          {featuredWork.map((item, index) => (
            <article className="work-card" key={item.name} style={{ '--delay': `${index * 100}ms` }}>
              <p className="work-type">{item.type}</p>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">How we move</p>
          <h2>Fast enough for momentum. Serious enough for launch.</h2>
        </div>

        <div className="process-track">
          {buildSteps.map((step, index) => (
            <article className="process-step" key={step} style={{ '--delay': `${index * 100}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="signal-section">
        <div className="section-heading">
          <p className="eyebrow">Experience standard</p>
          <h2>Every layer should communicate control.</h2>
        </div>
        <div className="signal-grid">
          {signals.map((item, index) => (
            <article className="signal-card" key={item.title} style={{ '--delay': `${index * 100}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <p className="eyebrow">Built for teams with taste</p>
        <h2>If you want the work to feel generic, we are not the right fit.</h2>
        <p>
          If you want a site or AI product surface that makes the company feel sharper, more
          credible, and more advanced, let us build it properly.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/contact">Start a project</a>
          <a className="button secondary dark" href="mailto:hello@orilto.ai">hello@orilto.ai</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="orilto.ai home">
            <span className="brand-mark">O</span>
            <span>orilto.ai</span>
          </a>
          <p>AI product design, workflow systems, operator tools, and modern brand surfaces.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="/contact">Project inquiry</a>
          <a href="mailto:hello@orilto.ai">hello@orilto.ai</a>
        </div>
      </footer>
    </main>
  )
}

export default App
