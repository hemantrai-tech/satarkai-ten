import { useState } from 'react';
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import type { UIStrings } from '../i18n/translations.ts';
import heroPhoto from '../assets/images/satark_calm_pause_1795170348004.jpg';

interface HeroSectionProps {
  strings: UIStrings;
  onStartCheck: () => void;
  onViewPlaybook: () => void;
}

export function HeroSection({ strings, onStartCheck, onViewPlaybook }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const titleLines = strings.heroHeadline === 'Pause before panic takes over.'
    ? ['Pause before', 'panic takes over.']
    : [strings.heroHeadline];

  return (
    <section id="overview" className="story-chapter hero-section" data-story-index="1">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy-column">
          <p className="hero-kicker"><ShieldCheck size={15} aria-hidden="true" /> SATARK LIVE GUARD <span>·</span> INDIA</p>
          <h1 className="hero-title">
            {titleLines.map((line) => <span className="hero-line-mask" key={line}><span className="hero-line-inner">{line}</span></span>)}
          </h1>
          <p className="hero-copy">{strings.heroBody}</p>
          <div className="hero-actions">
            <button type="button" className="hero-primary" onClick={onStartCheck}>{strings.heroPrimaryBtn}<ArrowRight size={17} aria-hidden="true" /></button>
            <button type="button" className="hero-secondary" onClick={onViewPlaybook}>{strings.heroSecondaryBtn}</button>
          </div>
          <p className="hero-safety-note"><span /> No caller can demand your OTP, UPI PIN or silence.</p>
        </div>
        <figure className="hero-visual">
          <div className="hero-photo-frame">
            {!imgFailed ? <img src={heroPhoto} alt="A woman pauses and sets her phone down before deciding what to do next" onError={() => setImgFailed(true)} /> : <div className="hero-photo-fallback"><ShieldCheck size={42} aria-hidden="true" /><span>Pause. Verify. Choose.</span></div>}
            <div className="photo-caption"><span>THE MOMENT BEFORE YOU ACT</span><p>Let urgency pass. Keep control.</p></div>
          </div>
          <div className="hero-seal"><span>CHECK THE<br />PRESSURE</span><i>12<br />LANGUAGES</i></div>
        </figure>
      </div>
      <button className="hero-scroll-hint" type="button" onClick={() => document.getElementById('big-idea')?.scrollIntoView({ behavior: 'smooth' })}>
        <span>SCROLL TO EXPLORE</span><ArrowDown size={15} aria-hidden="true" />
      </button>
      <p className="hero-footnote">A calm second opinion for suspicious calls, messages and notices.</p>
    </section>
  );
}
