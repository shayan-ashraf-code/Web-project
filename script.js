// --- 1. Header Component ---
function Header(props) {
    // NEW: Add state to track if the mobile menu is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Determine if a link is active based on currentPage state
    const isActive = (pageName) => props.currentPage === pageName ? 'active' : '';

    // NEW: Wrapper function to close menu when a link is clicked
    const handleLinkClick = (page) => {
        props.setPage(page);
        setIsMobileMenuOpen(false); // Close menu on navigation
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="#" onClick={() => handleLinkClick('home')}>
                        Dev<span>Forge</span>
                    </a>
                </div>

                {/* --- NAVIGATION LINKS --- */}
                {/* NEW: 
                  - Added `mobile-open` class conditionally
                  - Added a "Close" button inside
                  - Links now use `handleLinkClick`
                */}
                <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <div className="mobile-menu-header">
                        <div className="logo-mobile">
                            <a href="#" onClick={() => handleLinkClick('home')}>
                                Dev<span>Forge</span>
                            </a>
                        </div>
                        <button 
                            className="mobile-menu-close" 
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            &times; {/* This is a "X" icon */}
                        </button>
                    </div>

                    <a href="#" onClick={() => handleLinkClick('home')} className={isActive('home')}>Home</a>
                    <a href="#" onClick={() => handleLinkClick('services')} className={isActive('services')}>Services</a>
                    <a href="#" onClick={() => handleLinkClick('about')} className={isActive('about')}>About</a>
                    <a href="#" onClick={() => handleLinkClick('contact')} className={`btn btn-primary nav-cta ${isActive('contact')}`}>
                        Start Project
                    </a>
                </nav>

                {/* --- NEW: HAMBURGER TOGGLE BUTTON --- */}
                {/* This button is only visible on mobile */}
                <button 
                    className="mobile-menu-toggle" 
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                {/* --- NEW: OVERLAY --- */}
                {/* This darkens the page behind the menu */}
                {isMobileMenuOpen && (
                    <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
                )}

            </div>
        </header>
    );
}

// --- 2. Footer Component ---
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                </div>
                <p style={{ marginTop: '20px' }}>
                    &copy; {currentYear} DevForge. All rights reserved.
                </p> 
            </div>
        </footer>
    );
}

// --- 3. Page Components ---

function HomePage(props) {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h1>
                        Forge Your <span className="gradient-text">Digital Future.</span>
                    </h1>
                    <p className="hero-subheading">
                        We are a collective of elite developers and designers, crafting bespoke software solutions for the next generation of innovators.
                    </p>
                    <a href="#" className="btn btn-primary" style={{ minWidth: '200px' }} onClick={() => props.setPage('services')}>
                        Discover Solutions
                    </a>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <h2 className="section-heading">
                        Our <span className="gradient-text">Expertise.</span>
                    </h2>
                    <p className="section-subheading">
                        Leveraging cutting-edge technologies to deliver unparalleled results.
                    </p>
                    <div className="cards-grid">
                        <div className="card">
                            <h3>
                                {/* Icon: layout */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Web Platforms
                            </h3>
                            <p>Building scalable, high-performance web applications using React, Next.js, and serverless architectures.</p>
                        </div>
                        <div className="card">
                            <h3>
                                {/* Icon: cloud */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                Cloud Solutions
                            </h3>
                            <p>Designing, deploying, and managing robust cloud infrastructure on AWS, Azure, and Google Cloud.</p>
                        </div>
                        <div className="card">
                            <h3>
                                {/* Icon: pen-tool */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                    <path d="M18 13l-1.5-1.5"></path>
                                    <path d="M2 2l7.586 7.586"></path>
                                    <path d="M11 3.5L5.5 9 3 6.5 8.5 1z"></path>
                                </svg>
                                UI/UX Design
                            </h3>
                            <p>Creating intuitive, human-centered interfaces that engage users and deliver results.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServicesPage() {
    return (
        <div>
            <section className="section about-section">
                <div className="container">
                    <h2 className="section-heading">
                        Our <span className="gradient-text">Capabilities.</span>
                    </h2>
                    <p className="section-subheading">
                        We provide end-to-end solutions to transform your digital landscape.
                    </p>
                    <div className="cards-grid">
                        <div className="card">
                            <h3>
                                {/* Icon: layout */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Enterprise Web
                            </h3>
                            <p>Building large-scale, maintainable React applications with a focus on performance and testability.</p>
                        </div>
                        <div className="card">
                            <h3>
                                {/* Icon: cloud */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                Cloud & DevOps
                            </h3>
                            <p>Automating your infrastructure (CI/CD) on AWS, Vercel, or Netlify for seamless deployments.</p>
                        </div>
                        <div className="card">
                            <h3>
                                {/* Icon: pen-tool */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                    <path d="M18 13l-1.5-1.5"></path>
                                    <path d="M2 2l7.586 7.586"></path>
                                    <path d="M11 3.5L5.5 9 3 6.5 8.5 1z"></path>
                                </svg>
                                UI/UX & Animation
                            </h3>
                            <p>Creating pixel-perfect, responsive designs with fluid animations that bring your brand to life.</p>
                        </div>
                        <div className="card">
                            <h3>
                                {/* Icon: code */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                API Development
                            </h3>
                            <p>Designing and building secure, fast, and scalable REST and GraphQL APIs for your applications.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function AboutPage() {
    return (
        <div>
            <section className="section about-section">
                <div className="container">
                    <h2 className="section-heading">
                        We Are <span className="gradient-text">DevForge.</span>
                    </h2>
                    <p className="section-subheading">
                        We exist to help businesses thrive by building technology that is simple, effective, and human-centric.
                    </p>
                    <div className="about-content">
                        <h2>Who We Are</h2>
                        <p>Founded in 2023, DevForge was built on the idea that technology should be a tool for empowerment, not a source of frustration. We are a distributed team of engineers, designers, and strategists united by a passion for solving complex problems.</p>
                        <p>We reject "one-size-fits-all" solutions. Instead, we dive deep into your business to understand your unique challenges and opportunities. This allows us to craft custom software that delivers real, measurable results.</p>
                        
                        <h3 style={{ marginTop: '40px', color: 'var(--text-light)' }}>Our Core Values</h3>
                        <ul>
                            <li>**Transparency:** Open communication, always.</li>
                            <li>**Ownership:** We treat your project like it's our own.</li>
                            <li>**Excellence:** A commitment to quality in everything we do.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- 4. Main App Component ---
function App() {
    // Use React.useState to manage the current page view
    const [currentPage, setCurrentPage] = React.useState('home');

    let pageContent;
    
    // Simple state-based routing
    if (currentPage === 'home') {
        pageContent = <HomePage setPage={setCurrentPage} />;
    } else if (currentPage === 'services') {
        pageContent = <ServicesPage />;
    } else if (currentPage === 'about') {
        pageContent = <AboutPage />;
    } else if (currentPage === 'contact') {
        pageContent = (
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-heading">
                        Let's <span className="gradient-text">Talk.</span>
                    </h2>
                    <p className="section-subheading">We're always open to new ideas. Drop us a line at:</p>
                    <h2 style={{ fontSize: '2.5rem' }}>
                        <a href="mailto:hello@devforge.com">hello@devforge.com</a>
                    </h2>
                </div>
            </section>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header component receives the function to change the state (page) */}
            <Header setPage={setCurrentPage} currentPage={currentPage} />
            
            {/* Main content area */}
            <main className="main-content">
                {pageContent}
            </main>
            
            {/* Footer component */}
            <Footer />
        </div>
    );
}


// --- 5. Render the App ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);