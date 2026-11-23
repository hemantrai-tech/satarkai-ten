import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { AiTrackerWorkspace } from './components/AiTrackerWorkspace.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { GuardiansAndHistory } from './components/GuardiansAndHistory.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { Navbar } from './components/Navbar.tsx';
import { PlaybookSection } from './components/PlaybookSection.tsx';
import { BigIdea, ProblemStory, TurningPoint } from './components/StorySections.tsx';
import { SUPPORTED_LANGUAGES, UI_STRINGS } from './i18n/translations.ts';
import type {
  AlertRecord,
  LanguageCode,
  LanguageSelection,
  ThreatCue,
  TrustedContact,
  UserProfile,
} from './types.ts';

gsap.registerPlugin(ScrollTrigger);

const CUE_STORAGE_KEY = 'satark-threat-watchlist-v1';

export default function App() {
  const [uiLanguage, setUiLanguage] = useState<LanguageCode>('en-IN');
  const [aiLanguage, setAiLanguage] = useState<LanguageSelection>('auto');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [activeChapter, setActiveChapter] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [customThreats, setCustomThreats] = useState<ThreatCue[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);

  const [user, setUser] = useState<UserProfile | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [alerts, setAlerts] = useState<AlertRecord[]>([]);
  const [contacts, setContacts] = useState<TrustedContact[]>([]);
  const strings = UI_STRINGS[uiLanguage];
  const saveThreatCues = (cues: ThreatCue[]) => {
    try { localStorage.setItem(CUE_STORAGE_KEY, JSON.stringify(cues)); } catch { /* Keep the current session usable if storage is blocked. */ }
  };

  const loadWorkspaceData = useCallback(async () => {
    try {
      const [meRes, alertsRes, contactsRes] = await Promise.all([
        fetch('/api/me'), fetch('/api/alerts'), fetch('/api/contacts'),
      ]);
      if (meRes.ok) setUser(((await meRes.json()) as { user: UserProfile | null }).user);
      if (alertsRes.ok) setAlerts(((await alertsRes.json()) as { alerts: AlertRecord[] }).alerts || []);
      if (contactsRes.ok) setContacts(((await contactsRes.json()) as { contacts: TrustedContact[] }).contacts || []);
    } catch {
      // Keep the interface usable if the private workspace is unavailable.
    }
  }, []);

  useEffect(() => { loadWorkspaceData(); }, [loadWorkspaceData]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CUE_STORAGE_KEY) || '[]') as ThreatCue[];
      if (Array.isArray(saved)) setCustomThreats(saved.slice(0, 16));
    } catch { setCustomThreats([]); }
  }, []);

  const addThreatCue = (phrase: string, category: string) => {
    const entry = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, phrase: phrase.slice(0, 120), category };
    setCustomThreats((current) => {
      const next = [entry, ...current].slice(0, 16);
      saveThreatCues(next);
      return next;
    });
  };

  const removeThreatCue = (id: string) => setCustomThreats((current) => {
    const next = current.filter((cue) => cue.id !== id);
    saveThreatCues(next);
    return next;
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (!element) return;
    if (lenisRef.current) lenisRef.current.scrollTo(element, { offset: -68 });
    else element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis: Lenis | null = null;
    let context: gsap.Context | null = null;
    let rafId = 0;
    let onTick: ((time: number) => void) | null = null;

    if (!reducedMotion) {
      lenis = new Lenis({ autoRaf: false, smoothWheel: true, anchors: true, lerp: 0.09 });
      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      onTick = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      context = gsap.context(() => {
        gsap.from('.hero-line-inner', {
          yPercent: 112, opacity: 0, duration: 1.05, stagger: 0.14, ease: 'power3.out', delay: 0.12,
        });
        gsap.from('.hero-kicker, .hero-copy, .hero-actions, .hero-visual', {
          y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.35,
        });
        gsap.to('.word-reveal', {
          opacity: 1, color: '#f2f0e8', stagger: 0.16, ease: 'none',
          scrollTrigger: { trigger: '#big-idea', start: 'top 72%', end: 'bottom 35%', scrub: 0.6 },
        });
        gsap.from('.line-reveal-inner', {
          yPercent: 105, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.problem-heading-grid', start: 'top 76%', once: true },
        });
        gsap.to('.idea-number', {
          yPercent: -30, ease: 'none',
          scrollTrigger: { trigger: '#big-idea', start: 'top bottom', end: 'bottom top', scrub: true },
        });
        gsap.to('.problem-backdrop', {
          yPercent: -18, ease: 'none',
          scrollTrigger: { trigger: '#problem', start: 'top bottom', end: 'bottom top', scrub: true },
        });

        const lines = gsap.utils.toArray<HTMLElement>('.turn-line');
        const turning = gsap.timeline({
          scrollTrigger: {
            trigger: '#turning', start: 'top top', end: window.matchMedia('(max-width: 760px)').matches ? '+=1100' : '+=2300', pin: window.matchMedia('(max-width: 760px)').matches ? false : '.turning-stage', scrub: 0.8, anticipatePin: 1,
          },
        });
        lines.forEach((line, index) => {
          const position = index * 0.9;
          turning.fromTo(line, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.34, ease: 'power2.out' }, position);
          if (index < lines.length - 1) turning.to(line, { autoAlpha: 0, y: -22, duration: 0.26, ease: 'power2.in' }, position + 0.58);
        });
        gsap.to('.turning-backdrop', {
          xPercent: -8, ease: 'none', scrollTrigger: { trigger: '#turning', start: 'top top', end: '+=2300', scrub: true },
        });
        gsap.from('.pattern-row', {
          y: 24, opacity: 0, stagger: 0.06, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: '.pattern-ledger', start: 'top 78%', once: true },
        });
        gsap.from('.closing-headline > span, .closing-headline em', {
          y: 26, opacity: 0, stagger: 0.14, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.final-statement', start: 'top 72%', once: true },
        });
      }, storyRef);
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    }

    const updateProgress = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = Number((visible.target as HTMLElement).dataset.storyIndex || 1);
      setActiveChapter(index);
      setActiveSection((visible.target as HTMLElement).id || (index === 1 ? 'overview' : activeSection));
    }, { threshold: [0.2, 0.45, 0.7] });
    document.querySelectorAll('[data-story-index]').forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      observer.disconnect();
      cancelAnimationFrame(rafId);
      context?.revert();
      if (onTick) gsap.ticker.remove(onTick);
      lenis?.destroy();
      lenisRef.current = null;
    };
    // The story timeline is created once for the mounted page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAddContact(input: { name: string; phone: string; relationship: string }) {
    const res = await fetch('/api/contacts', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
    });
    const data = (await res.json()) as { contact?: TrustedContact; error?: string };
    if (!res.ok || !data.contact) throw new Error(data.error || 'Could not save trusted contact.');
    setContacts((prev) => [data.contact!, ...prev]);
  }
  async function handleDeleteContact(id: string) {
    const res = await fetch(`/api/contacts/${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (res.ok) setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }
  async function handleCloseAlert(id: string) {
    const res = await fetch(`/api/alerts/${encodeURIComponent(id)}/close`, { method: 'POST' });
    if (res.ok) setAlerts((prev) => prev.map((alert) => alert.id === id ? { ...alert, closed: true } : alert));
  }
  async function handleDeleteAlert(id: string) {
    const res = await fetch(`/api/alerts/${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (res.ok) setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }
  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
    setUser(null);
    loadWorkspaceData();
  }

  const latestHighAlert = alerts.find((alert) => alert.severity === 'critical' || alert.severity === 'high');

  return (
    <div ref={storyRef} className="site-shell">
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${scrollProgress / 100})` }} /></div>
      <Navbar strings={strings} activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="language-strip">
        <label htmlFor="ui-language">Interface language</label>
        <select id="ui-language" value={uiLanguage} onChange={(event) => setUiLanguage(event.target.value as LanguageCode)}>
          {SUPPORTED_LANGUAGES.map((language) => <option key={language.code} value={language.code}>{language.nativeName} · {language.englishName}</option>)}
        </select>
        <div className="account-controls">
          {user ? <><span>{user.name}</span><button type="button" onClick={handleLogout}>{strings.signOutBtn}</button></> : <button type="button" onClick={() => setAuthOpen(true)}>{strings.signInBtn}</button>}
        </div>
      </div>

      <main className="site-story">
        <HeroSection strings={strings} onStartCheck={() => scrollToSection('tracker')} onViewPlaybook={() => scrollToSection('playbook')} />
        <BigIdea />
        <ProblemStory cues={customThreats} onAdd={addThreatCue} onRemove={removeThreatCue} />
        <TurningPoint />
        <AiTrackerWorkspace
          strings={strings} selectedLanguage={aiLanguage} onSelectLanguage={setAiLanguage}
          customThreats={customThreats}
          onAlertCreated={(alert) => setAlerts((prev) => [alert, ...prev])}
        />
        <GuardiansAndHistory
          strings={strings} contacts={contacts} alerts={alerts}
          latestProblemSummary={latestHighAlert ? latestHighAlert.detectedProblem : null}
          onAddContact={handleAddContact} onDeleteContact={handleDeleteContact}
          onCloseAlert={handleCloseAlert} onDeleteAlert={handleDeleteAlert}
        />
        <PlaybookSection strings={strings} />
      </main>

      <div className="chapter-counter" aria-label={`Story chapter ${activeChapter} of 7`} aria-live="polite">
        <span>{String(activeChapter).padStart(2, '0')}</span><i />07
      </div>

      <footer className="site-footer">
        <div><b>Satark Live Guard</b><p>Pause before you act. Verify through an official channel.</p></div>
        <nav aria-label="Official resources"><a href="tel:1930">Cyber fraud helpline · 1930</a><a href="https://cybercrime.gov.in/" target="_blank" rel="noreferrer">National Cyber Crime Reporting Portal ↗</a></nav>
        <small>Pattern guidance is an aid, not proof of fraud. Do not share OTPs, UPI PINs or remote access.</small>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onAuthenticated={(loggedInUser) => { setUser(loggedInUser); loadWorkspaceData(); }} />
    </div>
  );
}
