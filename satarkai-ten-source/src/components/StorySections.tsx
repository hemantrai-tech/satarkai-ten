import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowUpRight, Plus, ShieldAlert, X } from 'lucide-react';
import type { ThreatCue } from '../types.ts';

export function WordReveal({ text }: { text: string }) {
  return (
    <p className="word-paragraph" aria-label={text}>
      {text.split(/\s+/).map((word, index) => (
        <span className="word-mask" key={`${word}-${index}`} aria-hidden="true">
          <span className="word-reveal">{word}</span>{' '}
        </span>
      ))}
    </p>
  );
}

export function TurningPoint() {
  const lines = [
    'A real authority will let you verify.',
    'A real refund never needs your UPI PIN.',
    'A real emergency does not demand secrecy.',
    'Pause. Hang up. Verify independently.',
  ];
  return (
    <section id="turning" className="story-chapter turning-chapter" data-story-index="4">
      <div className="turning-stage">
        <div className="turning-meta"><span>THE TURNING POINT</span><span>04 / 07</span></div>
        <div className="turning-backdrop" aria-hidden="true">PAUSE</div>
        <div className="turning-copy">
          {lines.map((line, index) => (
            <p className="turn-line" key={line} aria-label={line}>
              <span className="turn-index">0{index + 1}</span>{line}
            </p>
          ))}
        </div>
        <div className="turning-foot"><span>SECONDS CAN BREAK THE SCRIPT</span><ArrowDown size={17} aria-hidden="true" /></div>
      </div>
    </section>
  );
}

const patterns = [
  ['01', 'Borrowed authority', 'Police, CBI, ED, TRAI, court, digital arrest'],
  ['02', 'Credential bait', 'OTP, KYC, SIM block, Aadhaar, PAN, CVV'],
  ['03', 'Payment reversal', 'UPI refund, QR scan, collect request, safe account'],
  ['04', 'Parcel pressure', 'Customs, courier, seized parcel, illegal package'],
  ['05', 'Remote access', 'AnyDesk, screen share, APK, quick support'],
  ['06', 'Fast money promise', 'Task deposit, guaranteed return, trading group'],
  ['07', 'Fake recovery', 'Recovery agent, fee to unlock, chargeback service'],
  ['08', 'Personal leverage', 'Romance pressure, blackmail, secrecy, isolation'],
];

export function ProblemStory({
  cues,
  onAdd,
  onRemove,
}: {
  cues: ThreatCue[];
  onAdd: (phrase: string, category: string) => void;
  onRemove: (id: string) => void;
}) {
  const [phrase, setPhrase] = useState('');
  const [category, setCategory] = useState('New or emerging scam');
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (phrase.trim().length < 3) return;
    onAdd(phrase.trim(), category);
    setPhrase('');
  };
  return (
    <section id="problem" className="story-chapter problem-chapter" data-story-index="3">
      <div className="chapter-inner">
        <div className="chapter-meta"><span>03 / THE PROBLEM</span><span>Patterns change. Pressure repeats.</span></div>
        <div className="problem-heading-grid">
          <h2 className="line-reveal"><span className="line-reveal-inner">The story keeps changing.<br /><em>The pressure stays familiar.</em></span></h2>
          <p>Scammers borrow authority, rush a decision, isolate the target, then ask for a code, a transfer or remote access. Satark looks at the whole statement for the pattern, not a single magic word.</p>
        </div>
        <div className="pattern-ledger" aria-label="Common scam pressure patterns">
          {patterns.map(([number, name, cues]) => (
            <article className="pattern-row" key={number}>
              <span className="pattern-number">{number}</span><h3>{name}</h3><p>{cues}</p>
              <ShieldAlert className="pattern-icon" size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="cue-editor">
          <div className="cue-editor-copy">
            <span className="eyebrow">YOUR PRIVATE WATCHLIST</span>
            <h3>Add a new phrase as scam language evolves.</h3>
            <p>These clues stay in this browser and are sent with your next check as extra context. They guide the prompt; they do not retrain model weights.</p>
          </div>
          <form className="cue-form" onSubmit={submit}>
            <label htmlFor="threat-phrase">A phrase or pressure cue</label>
            <input id="threat-phrase" value={phrase} maxLength={120} onChange={(e) => setPhrase(e.target.value)} placeholder="e.g. ‘refund processing fee’" />
            <div className="cue-form-row">
              <select aria-label="Scam category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>New or emerging scam</option><option>Impersonation</option><option>OTP or account access</option><option>Payment or UPI</option><option>Investment or task</option><option>Threat or blackmail</option>
              </select>
              <button type="submit" disabled={phrase.trim().length < 3}><Plus size={16} aria-hidden="true" /> Save clue</button>
            </div>
            {cues.length > 0 && <ul className="cue-list" aria-label="Saved threat clues">{cues.map((cue) => <li key={cue.id}><span><b>{cue.phrase}</b><small>{cue.category}</small></span><button type="button" aria-label={`Remove ${cue.phrase}`} onClick={() => onRemove(cue.id)}><X size={15} /></button></li>)}</ul>}
          </form>
        </div>
      </div>
    </section>
  );
}

export function BigIdea() {
  return (
    <section id="big-idea" className="story-chapter idea-chapter" data-story-index="2">
      <div className="chapter-inner idea-inner">
        <div className="chapter-meta"><span>02 / THE BIG IDEA</span><span>Safety begins before the transfer.</span></div>
        <div className="idea-layout">
          <div className="idea-number" aria-hidden="true">01</div>
          <div>
            <h2 className="line-reveal"><span className="line-reveal-inner">Give people back<br />their next move.</span></h2>
            <WordReveal text="Satark turns a frightening message into a moment to pause, a plain-language explanation, and a safer action the person can take right now." />
            <a className="text-link" href="#tracker">Check a statement <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="idea-foot"><span>BUILT FOR REAL PRESSURE, MIXED LANGUAGES AND SMALL SCREENS</span><span>1930 · INDIA CYBER HELPLINE</span></div>
      </div>
    </section>
  );
}

export function FinalStatement() {
  return (
    <section className="final-statement" data-story-index="7">
      <div className="final-orbit" aria-hidden="true" />
      <span className="eyebrow">SATARK / STAY IN CONTROL</span>
      <h2 className="closing-headline"><span>Don’t let urgency</span><br /><em>make the decision.</em></h2>
      <p>Take a breath. Save the message. Verify through an official channel. If money has been lost, call the national cyber fraud helpline now.</p>
      <a className="final-call" href="tel:1930">Call 1930 <ArrowUpRight size={16} aria-hidden="true" /></a>
      <a className="final-report" href="https://cybercrime.gov.in/" target="_blank" rel="noreferrer">Report at cybercrime.gov.in ↗</a>
      <span className="final-note">A pattern score is guidance, not proof or a guaranteed probability.</span>
    </section>
  );
}
