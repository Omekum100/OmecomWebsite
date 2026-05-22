import './App.css'

const studioPillars = [
  'AI websites',
  'AI systems',
  'Automation',
  'Technical support',
  'Social operations',
]

const operatingNodes = [
  { label: 'Website', status: 'Live presence', tone: 'blue' },
  { label: 'Leads', status: 'Captured and routed', tone: 'green' },
  { label: 'Automation', status: 'Manual work reduced', tone: 'amber' },
  { label: 'Support', status: 'Questions resolved', tone: 'violet' },
  { label: 'Content', status: 'Social output organized', tone: 'pink' },
]

const services = [
  {
    title: 'AI Websites',
    text: 'Premium business websites, landing pages, product pages, and conversion flows that explain the offer clearly.',
    signal: 'Brand + conversion',
  },
  {
    title: 'AI Systems',
    text: 'Assistants, copilots, dashboards, intake tools, and decision layers designed around real business work.',
    signal: 'Useful intelligence',
  },
  {
    title: 'Workflow Automation',
    text: 'Automations that connect forms, documents, messages, spreadsheets, CRMs, and internal handoffs.',
    signal: 'Less repeated work',
  },
  {
    title: 'Technical Support',
    text: 'Website fixes, integrations, tooling setup, deployment support, and ongoing technical problem solving.',
    signal: 'Reliable execution',
  },
  {
    title: 'Social Media Support',
    text: 'Technical and operational support for digital presence, content systems, posting workflows, and campaign pages.',
    signal: 'Better consistency',
  },
  {
    title: 'Innovation Builds',
    text: 'New product ideas, internal prototypes, AI experiments, and business tools shaped from rough ideas into usable systems.',
    signal: 'From idea to launch',
  },
]

const useCases = [
  {
    name: 'Launch a sharper business website',
    summary: 'Position the offer, design the experience, build the site, connect inquiry flows, and make the brand feel credible.',
  },
  {
    name: 'Automate the busy work',
    summary: 'Turn repeated admin, lead sorting, document handling, and follow-ups into workflows that run with less manual effort.',
  },
  {
    name: 'Build an AI assistant or internal tool',
    summary: 'Create a focused AI layer for support, operations, sales, content, or team knowledge with human control built in.',
  },
  {
    name: 'Stabilize technical operations',
    summary: 'Help with the practical technical work that blocks growth: systems, integrations, deployment, content, and support.',
  },
]

const processSteps = [
  'Diagnose the business need',
  'Map the technical system',
  'Prototype the useful version',
  'Build and connect the workflow',
  'Launch, support, and improve',
]

const contactReasons = [
  'A better website or product surface',
  'Automation for repeated business tasks',
  'AI support, content, or operations tooling',
  'Technical help that needs a product-studio brain',
]

function Header() {
  const isContact = window.location.pathname === '/contact'

  return (
    <header className="topbar">
      <a className="brand" href={isContact ? '/' : '#home'} aria-label="orilto.ai home">
        <span className="brand-mark">o</span>
        <span>orilto.ai</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href={isContact ? '/#services' : '#services'}>Services</a>
        <a href={isContact ? '/#systems' : '#systems'}>Systems</a>
        <a href={isContact ? '/#studio' : '#studio'}>Studio</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="nav-cta" href="/contact">Start a project</a>
    </header>
  )
}

function OperatingLayer() {
  return (
    <div className="operating-layer" aria-label="orilto.ai operating layer preview">
      <div className="layer-topline">
        <span>Business operating layer</span>
        <strong>orilto.ai</strong>
      </div>
      <div className="layer-canvas">
        <div className="core-node">
          <span>AI studio</span>
          <strong>Plan, build, automate, support</strong>
        </div>
        {operatingNodes.map((node, index) => (
          <div className={`orbit-node ${node.tone}`} key={node.label} style={{ '--i': index }}>
            <span>{node.label}</span>
            <strong>{node.status}</strong>
          </div>
        ))}
      </div>
      <div className="layer-console">
        <div>
          <span className="console-dot active" />
          <p>New inquiry sorted into website + automation track</p>
        </div>
        <div>
          <span className="console-dot" />
          <p>Support questions grouped for AI assistant training</p>
        </div>
        <div>
          <span className="console-dot" />
          <p>Social content workflow connected to weekly campaigns</p>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <Header />

      <section className="contact-hero">
        <div className="contact-copy">
          <p className="eyebrow">Start with the problem</p>
          <h1>Bring us the business problem. We will shape the technical system.</h1>
          <p>
            Tell us what you are trying to improve: website, AI, automation, support,
            social operations, or a new technical idea that needs structure.
          </p>
          <div className="reason-list">
            {contactReasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </div>

        <aside className="contact-panel">
          <span className="panel-label">Direct contact</span>
          <h2>hello@orilto.ai</h2>
          <p>Send the rough version. A messy brief is enough when the goal is real.</p>
          <div className="availability">
            <span />
            Reply within 1 business day
          </div>
        </aside>
      </section>

      <section className="contact-main">
        <div className="contact-guidance">
          <p className="eyebrow">What helps</p>
          <h2>Useful first messages are specific, honest, and unfinished.</h2>
          <div className="guidance-grid">
            <article>
              <strong>01</strong>
              <h3>What needs to work better?</h3>
              <p>Website, leads, support, documents, content, admin work, internal tools, or a new idea.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>What is the current setup?</h3>
              <p>Tools, links, screenshots, spreadsheets, workflows, or anything your team already uses.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>What would success look like?</h3>
              <p>More trust, faster work, better conversion, fewer mistakes, cleaner operations, or a launch.</p>
            </article>
          </div>
        </div>

        <form className="contact-form" action="mailto:hello@orilto.ai" method="post" encType="text/plain">
          <div>
            <p className="eyebrow">Project inquiry</p>
            <h2>Tell us what you need built or fixed.</h2>
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
            <span>Need</span>
            <select name="need" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>AI website</option>
              <option>AI system or assistant</option>
              <option>Workflow automation</option>
              <option>Technical support</option>
              <option>Social media or digital operations</option>
              <option>New product or innovation build</option>
            </select>
          </label>
          <label>
            <span>Brief</span>
            <textarea
              name="message"
              rows="6"
              placeholder="What is happening now, what should improve, and what do you want this system to do?"
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
      <Header />

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">AI-first product studio</p>
          <h1>The technical layer modern businesses need to grow.</h1>
          <p className="hero-text">
            orilto.ai builds AI websites, AI systems, automations, technical support
            workflows, social media operations, and new digital products for businesses
            that want sharper execution.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">Start a project</a>
            <a className="button secondary" href="#services">Explore services</a>
          </div>
          <div className="studio-pills" aria-label="Core services">
            {studioPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
        </div>

        <OperatingLayer />
      </section>

      <section className="proof-strip">
        <article>
          <span>01</span>
          <strong>Business-first technical thinking</strong>
          <p>We start from the operational problem, not from a fashionable tool.</p>
        </article>
        <article>
          <span>02</span>
          <strong>Design, build, automate, support</strong>
          <p>One studio brain across the website, product surface, AI layer, and daily systems.</p>
        </article>
        <article>
          <span>03</span>
          <strong>Built for practical outcomes</strong>
          <p>Cleaner presence, faster workflows, better handoffs, and more useful digital operations.</p>
        </article>
      </section>

      <section className="problem-section" id="systems">
        <div className="section-heading">
          <p className="eyebrow">The gap we close</p>
          <h2>Most businesses do not need more tools. They need their tools to work together.</h2>
        </div>
        <div className="comparison-grid">
          <article className="before-panel">
            <span>Before</span>
            <h3>Scattered technical work</h3>
            <ul>
              <li>Website separate from leads and follow-up</li>
              <li>Social content handled without a repeatable system</li>
              <li>Support questions answered manually again and again</li>
              <li>AI ideas stuck as demos instead of useful workflows</li>
            </ul>
          </article>
          <article className="after-panel">
            <span>After</span>
            <h3>A connected operating layer</h3>
            <ul>
              <li>Website, inquiry, CRM, support, and content flows aligned</li>
              <li>Automations remove repeated handoffs and admin work</li>
              <li>AI systems help teams decide, respond, organize, and act</li>
              <li>Technical support keeps the system improving after launch</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we handle</p>
          <h2>One product studio for the technical work behind modern business.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span>{service.signal}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="usecase-section">
        <div className="section-heading">
          <p className="eyebrow">Use cases</p>
          <h2>The work can start with a website, a workflow, a support problem, or a new idea.</h2>
        </div>
        <div className="usecase-list">
          {useCases.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-copy">
          <p className="eyebrow">Studio model</p>
          <h2>Strategy when the problem is unclear. Execution when it is time to build.</h2>
          <p>
            orilto.ai works like a product studio for businesses that need technical support
            without turning every decision into a long software project. We clarify the need,
            design the system, build the useful version, and keep improving it.
          </p>
        </div>
        <div className="process-stack">
          {processSteps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <p className="eyebrow">Build the next layer</p>
        <h2>Bring the business problem. We will shape the technical system.</h2>
        <p>
          Websites, AI systems, automation, support, social operations, and new product ideas
          all work better when they are designed as one operating layer.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/contact">Start a project</a>
          <a className="button secondary dark" href="mailto:hello@orilto.ai">hello@orilto.ai</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="orilto.ai home">
            <span className="brand-mark">o</span>
            <span>orilto.ai</span>
          </a>
          <p>AI websites, AI systems, automation, technical support, social operations, and product-studio builds.</p>
        </div>
        <div>
          <h3>Studio</h3>
          <a href="#services">Services</a>
          <a href="#systems">Systems</a>
          <a href="#studio">Process</a>
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
