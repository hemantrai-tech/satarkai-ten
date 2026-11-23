import { useState } from 'react';
import { Menu, ShieldCheck, X } from 'lucide-react';
import type { UIStrings } from '../i18n/translations.ts';

interface NavbarProps {
  strings: UIStrings;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ strings, activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: 'overview', label: strings.navOverview },
    { id: 'problem', label: 'Scam signals' },
    { id: 'tracker', label: strings.navTracker },
    { id: 'playbook', label: strings.navPlaybook },
  ];
  const go = (id: string) => { setMobileOpen(false); onNavigate(id); };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand-mark" href="#overview" onClick={(event) => { event.preventDefault(); go('overview'); }} aria-label="Satark Live Guard home">
          <span className="brand-icon"><ShieldCheck size={17} aria-hidden="true" /></span><span>SATARK<span className="brand-small">LIVE GUARD</span></span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} aria-current={activeSection === link.id ? 'page' : undefined} onClick={(event) => { event.preventDefault(); go(link.id); }}>{link.label}</a>)}
        </nav>
        <a className="nav-call" href="tel:1930"><span>CYBER FRAUD</span>1930</a>
        <button className="mobile-nav-toggle" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={(event) => { event.preventDefault(); go(link.id); }}>{link.label}</a>)}<a className="mobile-call" href="tel:1930">Call cyber fraud helpline · 1930</a></nav>}
    </header>
  );
}
