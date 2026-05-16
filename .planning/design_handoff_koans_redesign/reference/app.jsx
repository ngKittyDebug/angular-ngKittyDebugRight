/* global React, ReactDOM */
const { useState, useEffect, useMemo, useCallback, useRef } = React;

/* ── tiny syntax highlighter ─────────────────────────────── */
function highlight(code) {
  const KW = /\b(function|const|let|var|if|else|return|new|class|extends|this|null|undefined|true|false|async|await|for|of|in|while|break|continue|try|catch|finally|throw|typeof|instanceof|delete|void|yield|import|export|from|default|switch|case)\b/g;
  let s = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  // strings (single quotes, double, backticks)
  s = s.replace(/(`[^`]*`|'[^']*'|"[^"]*")/g, '\x01STR\x01$1\x02STR\x02');
  // comments
  s = s.replace(/(\/\/[^\n]*)/g, '\x01COM\x01$1\x02COM\x02');
  // numbers
  s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="c-num">$1</span>');
  // keywords
  s = s.replace(KW, '<span class="c-kw">$1</span>');
  // function names (simple)
  s = s.replace(/([a-zA-Z_][a-zA-Z_0-9]*)\s*\(/g, '<span class="c-fn">$1</span>(');
  // restore markers
  s = s.replace(/\x01STR\x01([^]*?)\x02STR\x02/g, '<span class="c-str">$1</span>');
  s = s.replace(/\x01COM\x01([^]*?)\x02COM\x02/g, '<span class="c-com">$1</span>');
  return s;
}

/* ── icons ───────────────────────────────────────────────── */
const Icon = {
  search: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5l3 3" strokeLinecap="round" />
    </svg>
  ),
  prev: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M10 3l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  next: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  link: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6.5 9.5l3-3M4 8.5l-1 1a2 2 0 0 0 2.8 2.8l1-1M12 7.5l1-1a2 2 0 0 0-2.8-2.8l-1 1" strokeLinecap="round" />
    </svg>
  ),
  shuffle: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 4h2l8 8h2M2 12h2l3-3M9 7l3-3h2M11 2l3 2-3 2M11 10l3 2-3 2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sun: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="8" r="3"/>
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3" strokeLinecap="round"/>
    </svg>
  ),
  moon: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5z" strokeLinejoin="round"/>
    </svg>
  ),
};

/* ── Enso brushstroke logo ────────────────────────────────── */
function Enso() {
  return (
    <svg className="k-brand-enso" viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="enso-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--ink-strong)" stopOpacity="0.95"/>
          <stop offset="60%" stopColor="var(--ink)" stopOpacity="0.9"/>
          <stop offset="92%" stopColor="var(--ink)" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="var(--ink)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path
        d="M 33 14 C 38 24, 30 35, 19 34 C 8 33, 4 22, 9 13 C 14 4, 26 4, 31 11"
        stroke="url(#enso-stroke)"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="34" cy="12" r="1.6" fill="var(--vermillion)" />
    </svg>
  );
}

/* ── Categories ─────────────────────────────────────────── */
const CATEGORY_INFO = {
  javascript: { label: 'JavaScript', kanji: '言' },
  angular:    { label: 'Angular',    kanji: '骨' },
  philosophy: { label: 'Философия',  kanji: '道' },
};
const CATEGORY_ORDER = ['javascript', 'angular', 'philosophy'];

/* ── Sidebar ─────────────────────────────────────────────── */
function Sidebar({
  koans, filtered, selectedSlug, onSelect,
  categories, activeCategory, onCategoryToggle,
  tags, activeTags, onTagToggle, readSet,
  query,
}) {
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const VISIBLE_TAGS = 18;

  // Group filtered koans by category
  const groups = useMemo(() => {
    const byCat = {};
    filtered.forEach(k => {
      const c = k.category || 'other';
      (byCat[c] = byCat[c] || []).push(k);
    });
    return CATEGORY_ORDER.filter(c => byCat[c]).map(c => ({
      cat: c,
      items: byCat[c],
    }));
  }, [filtered]);

  const tagsToShow = tagsExpanded ? tags : tags.slice(0, VISIBLE_TAGS);

  return (
    <aside className="k-sidebar" aria-label="Навигация">
      <div className="k-sb-section">
        <div className="k-sb-label">
          <span>Раздел</span>
          <span className="k-sb-label-kanji">部</span>
        </div>
        <ul className="k-cat-list">
          {CATEGORY_ORDER.filter(c => categories[c]).map(c => (
            <li key={c}>
              <button
                className={`k-cat-btn ${activeCategory === c ? 'is-on' : ''}`}
                onClick={() => onCategoryToggle(c)}
              >
                <span className="k-cat-dot"></span>
                <span className="k-cat-name">{CATEGORY_INFO[c]?.label || c}</span>
                <span className="k-cat-count">{categories[c]}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              className={`k-cat-btn ${!activeCategory ? 'is-on' : ''}`}
              onClick={() => onCategoryToggle(null)}
            >
              <span className="k-cat-dot"></span>
              <span className="k-cat-name">Все</span>
              <span className="k-cat-count">{koans.length}</span>
            </button>
          </li>
        </ul>
      </div>

      {tags.length > 0 && (
        <div className="k-sb-section">
          <div className="k-sb-label">
            <span>Метки</span>
            <span className="k-sb-label-kanji">標</span>
          </div>
          <div className="k-tag-chips">
            {tagsToShow.map(([t, n]) => (
              <button
                key={t}
                className={`k-tag ${activeTags.has(t) ? 'is-on' : ''}`}
                onClick={() => onTagToggle(t)}
              >{t}</button>
            ))}
            {tags.length > VISIBLE_TAGS && (
              <button
                className="k-tag k-tag-more"
                onClick={() => setTagsExpanded(v => !v)}
              >{tagsExpanded ? '— меньше' : `+${tags.length - VISIBLE_TAGS}`}</button>
            )}
          </div>
        </div>
      )}

      <div className="k-sb-section" style={{paddingLeft: 0, paddingRight: 0}}>
        <div className="k-sb-label" style={{paddingLeft: 28, paddingRight: 28}}>
          <span>Свитки</span>
          <span className="k-sb-label-kanji">巻 · {filtered.length}</span>
        </div>

        {filtered.length === 0 ? (
          <div className="k-list-empty">Ничего не найдено{query ? ` по «${query}»` : ''}.</div>
        ) : (
          <ul className="k-list">
            {groups.map(g => (
              <li key={g.cat} className="k-list-group">
                <div className="k-list-grouphead">
                  <span>{CATEGORY_INFO[g.cat]?.kanji}</span>
                  <span>{CATEGORY_INFO[g.cat]?.label || g.cat}</span>
                </div>
                <ul className="k-list">
                  {g.items.map(k => (
                    <li key={k.slug} className="k-list-item">
                      <button
                        className={`k-list-btn ${k.slug === selectedSlug ? 'is-active' : ''} ${readSet.has(k.slug) ? 'is-read' : ''}`}
                        onClick={() => onSelect(k.slug)}
                      >
                        <span className="k-list-num">№{String(k.n).padStart(2, '0')}</span>
                        <span className="k-list-title">{k.title}</span>
                        <span className="k-list-seal" aria-label={readSet.has(k.slug) ? 'прочитано' : ''}></span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

/* ── Reader ─────────────────────────────────────────────── */
function Reader({ koan, onTagClick, onShare, onPrev, onNext, hasPrev, hasNext }) {
  if (!koan) {
    return (
      <main className="k-reader-wrap">
        <div className="k-empty">
          <span className="k-empty-kanji">空</span>
          Выбери коан из списка слева — или нажми «Дай знак».
        </div>
      </main>
    );
  }

  return (
    <main className="k-reader-wrap">
      <article className="k-reader" aria-labelledby="koan-title">
        <div className="k-reader-meta">
          <span className="k-reader-meta-kanji">公案</span>
          <span>№{String(koan.n).padStart(3, '0')}</span>
          {koan.category && (
            <>
              <span className="k-reader-meta-dot">·</span>
              <span>{CATEGORY_INFO[koan.category]?.label || koan.category}</span>
            </>
          )}
        </div>

        <h1 className="k-reader-title" id="koan-title">{koan.title}</h1>

        {koan.source && (
          <div className="k-reader-source-head">— {koan.source}</div>
        )}

        {koan.tags && koan.tags.length > 0 && (
          <div className="k-reader-tags">
            {koan.tags.map(t => (
              <button key={t} className="k-reader-tag" onClick={() => onTagClick(t)}>{t}</button>
            ))}
          </div>
        )}

        <div className="k-segments">
          {koan.segments.map((seg, i) => <Segment key={i} seg={seg} />)}
        </div>

        <footer className="k-reader-foot">
          <div className="k-foot-nav">
            <button className="k-foot-btn" disabled={!hasPrev} onClick={onPrev}>
              <Icon.prev /> Предыдущий
            </button>
            <button className="k-foot-btn" disabled={!hasNext} onClick={onNext}>
              Следующий <Icon.next />
            </button>
          </div>
          <div className="k-foot-share">
            <button className="k-share-btn" onClick={() => onShare('link')}>
              <Icon.link /> Скопировать ссылку
            </button>
          </div>
        </footer>
      </article>
    </main>
  );
}

function Segment({ seg }) {
  if (seg.k === 'source')   return <p className="k-seg k-seg-source">{seg.t}</p>;
  if (seg.k === 'master')   return <p className="k-seg k-seg-master">{seg.t}</p>;
  if (seg.k === 'student')  return <p className="k-seg k-seg-student">{seg.t}</p>;
  if (seg.k === 'action')   return <p className="k-seg k-seg-action">{seg.t}</p>;
  if (seg.k === 'haiku')    return <figure className="k-seg k-seg-haiku">{seg.t}</figure>;
  if (seg.k === 'question') return (
    <p className="k-seg k-seg-question">
      <span className="k-seg-question-mark" aria-hidden="true">問</span>
      {seg.t}
    </p>
  );
  if (seg.k === 'code') {
    return (
      <pre className="k-seg k-seg-code">
        <code dangerouslySetInnerHTML={{ __html: highlight(seg.t) }} />
      </pre>
    );
  }
  return null;
}

/* ── Toast ────────────────────────────────────────────────── */
function Toast({ message, show }) {
  return (
    <div className={`k-share-toast ${show ? 'is-on' : ''}`} role="status" aria-live="polite">
      <span className="kanji">写</span>
      {message}
    </div>
  );
}

/* ── Tweaks ───────────────────────────────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "washi",
  "japanDose": 55,
  "showWidget": false,
  "accent": "vermillion",
  "compactList": false
}/*EDITMODE-END*/;

function TweaksUI({ tweaks, setTweak }) {
  const { TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakToggle, TweakColor } = window;
  if (!TweaksPanel) return null;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio
          label="Палитра"
          value={tweaks.theme}
          options={[
            { value: 'washi', label: 'Washi' },
            { value: 'sumi',  label: 'Sumi' },
          ]}
          onChange={v => setTweak('theme', v)}
        />
      </TweakSection>
      <TweakSection title="Акцент">
        <TweakColor
          label="Печать / акценты"
          value={tweaks.accent}
          options={[
            { value: 'vermillion', color: '#b03a2a' },
            { value: 'gold',       color: '#a87527' },
            { value: 'indigo',     color: '#33507a' },
            { value: 'jade',       color: '#5f7a5e' },
          ]}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>
      <TweakSection title="Японский шарм">
        <TweakSlider
          label="Интенсивность"
          min={0} max={100} step={10}
          value={tweaks.japanDose}
          onChange={v => setTweak('japanDose', v)}
        />
      </TweakSection>
      <TweakSection title="Опции">
        <TweakToggle
          label="Виджет «коан дня» сверху"
          value={tweaks.showWidget}
          onChange={v => setTweak('showWidget', v)}
        />
        <TweakToggle
          label="Компактный список"
          value={tweaks.compactList}
          onChange={v => setTweak('compactList', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* ── Apply tweak side-effects to root ─────────────────────── */
function useApplyTweaks(tweaks) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = tweaks.theme;

    // accent override
    const accentMap = {
      vermillion: { v: '#b03a2a', v2: '#c25140' },
      gold:       { v: '#a87527', v2: '#c39a4f' },
      indigo:     { v: '#33507a', v2: '#4f6e98' },
      jade:       { v: '#5f7a5e', v2: '#7a967a' },
    };
    const sumiAccentMap = {
      vermillion: { v: '#c25040', v2: '#d76858' },
      gold:       { v: '#d6a850', v2: '#e7c47b' },
      indigo:     { v: '#7a9cd2', v2: '#9ab4e0' },
      jade:       { v: '#8aa783', v2: '#a8c0a2' },
    };
    const a = (tweaks.theme === 'sumi' ? sumiAccentMap : accentMap)[tweaks.accent] || accentMap.vermillion;
    root.style.setProperty('--vermillion', a.v);
    root.style.setProperty('--vermillion-soft', a.v2);

    // japan dose
    const dose = tweaks.japanDose / 100;
    root.style.setProperty('--japan-dose', dose);
    document.body.dataset.dose = dose < 0.2 ? 'low' : (dose > 0.7 ? 'high' : 'mid');
  }, [tweaks.theme, tweaks.accent, tweaks.japanDose]);
}

/* ── Main App ─────────────────────────────────────────────── */
function App() {
  const koans = window.KOANS_DATA || [];

  // tweaks
  const { useTweaks } = window;
  const [tweaks, setTweak] = useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  useApplyTweaks(tweaks);

  // selection — read from hash
  const initialSlug = (() => {
    const h = window.location.hash.replace(/^#\/?/, '');
    if (h && koans.find(k => k.slug === h)) return h;
    return koans[0]?.slug;
  })();
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);

  // search & filters
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTags, setActiveTags] = useState(() => new Set());
  const [readSet, setReadSet] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('koan-read') || '[]')); }
    catch { return new Set(); }
  });
  const [toastOn, setToastOn] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // category counts
  const categories = useMemo(() => {
    const out = {};
    koans.forEach(k => { if (k.category) out[k.category] = (out[k.category] || 0) + 1; });
    return out;
  }, [koans]);

  // tag list sorted by frequency
  const tags = useMemo(() => {
    const m = new Map();
    koans.forEach(k => (k.tags || []).forEach(t => m.set(t, (m.get(t) || 0) + 1)));
    return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [koans]);

  // filtered koans
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return koans.filter(k => {
      if (activeCategory && k.category !== activeCategory) return false;
      if (activeTags.size > 0) {
        const kt = new Set(k.tags || []);
        for (const t of activeTags) if (!kt.has(t)) return false;
      }
      if (q) {
        const hay = (
          k.title + ' ' +
          (k.tags || []).join(' ') + ' ' +
          (k.source || '') + ' ' +
          k.segments.map(s => s.t).join(' ')
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [koans, query, activeCategory, activeTags]);

  const selectedKoan = useMemo(
    () => koans.find(k => k.slug === selectedSlug) || null,
    [koans, selectedSlug]
  );

  // mark read on select (after small dwell)
  useEffect(() => {
    if (!selectedSlug) return;
    const id = setTimeout(() => {
      setReadSet(prev => {
        if (prev.has(selectedSlug)) return prev;
        const next = new Set(prev);
        next.add(selectedSlug);
        try { localStorage.setItem('koan-read', JSON.stringify([...next])); } catch {}
        return next;
      });
    }, 2500);
    return () => clearTimeout(id);
  }, [selectedSlug]);

  // sync hash
  useEffect(() => {
    if (selectedSlug) {
      const h = '#/' + selectedSlug;
      if (window.location.hash !== h) {
        window.history.replaceState(null, '', h);
      }
    }
  }, [selectedSlug]);

  // hash change (browser back/forward)
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#\/?/, '');
      if (h && koans.find(k => k.slug === h) && h !== selectedSlug) {
        setSelectedSlug(h);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [koans, selectedSlug]);

  // scroll to top on koan change
  const readerScrollRef = useRef(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSlug]);

  // actions
  const onSelect = useCallback(slug => setSelectedSlug(slug), []);
  const onCategoryToggle = useCallback(c => {
    setActiveCategory(prev => prev === c ? null : c);
  }, []);
  const onTagToggle = useCallback(t => {
    setActiveTags(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  }, []);
  const onRandom = useCallback(() => {
    if (!filtered.length) return;
    const others = filtered.filter(k => k.slug !== selectedSlug);
    const pool = others.length ? others : filtered;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelectedSlug(pick.slug);
  }, [filtered, selectedSlug]);

  const idx = filtered.findIndex(k => k.slug === selectedSlug);
  const hasPrev = idx > 0;
  const hasNext = idx >= 0 && idx < filtered.length - 1;
  const onPrev = useCallback(() => { if (hasPrev) setSelectedSlug(filtered[idx - 1].slug); }, [idx, filtered, hasPrev]);
  const onNext = useCallback(() => { if (hasNext) setSelectedSlug(filtered[idx + 1].slug); }, [idx, filtered, hasNext]);

  const onShare = useCallback(() => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setToastMsg('Ссылка скопирована — пусть пройдёт по сетям');
        setToastOn(true);
        setTimeout(() => setToastOn(false), 2000);
      });
    }
  }, []);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'r' || e.key === 'к') onRandom();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hasPrev, hasNext, onPrev, onNext, onRandom]);

  return (
    <>
      <header className="k-header">
        <a href="#/" className="k-brand" onClick={(e) => { e.preventDefault(); if (koans[0]) setSelectedSlug(koans[0].slug); }}>
          <Enso />
          <div className="k-brand-stack">
            <span className="k-brand-kanji">公案</span>
            <span className="k-brand-name">Коаны</span>
          </div>
        </a>

        <div className="k-search-wrap">
          <span className="k-search-icon"><Icon.search /></span>
          <input
            className="k-search"
            type="search"
            placeholder="искать по тексту, тегу, источнику…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Поиск по коанам"
          />
          {query && (
            <button className="k-search-clear" onClick={() => setQuery('')} aria-label="Очистить">✕</button>
          )}
        </div>

        <div className="k-header-actions">
          <button
            className="k-icon-btn"
            onClick={() => setTweak('theme', tweaks.theme === 'sumi' ? 'washi' : 'sumi')}
            title={`Тема: ${tweaks.theme === 'sumi' ? 'sumi (тёмная)' : 'washi (светлая)'}`}
            aria-label="Переключить тему"
          >
            {tweaks.theme === 'sumi' ? <Icon.sun /> : <Icon.moon />}
          </button>
          <button className="k-sign-btn" onClick={onRandom} title="Случайный коан (R)">
            <span className="kanji">兆</span>
            Дай знак
          </button>
        </div>
      </header>

      <div className="k-body">
        <Sidebar
          koans={koans}
          filtered={filtered}
          selectedSlug={selectedSlug}
          onSelect={onSelect}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryToggle={onCategoryToggle}
          tags={tags}
          activeTags={activeTags}
          onTagToggle={onTagToggle}
          readSet={readSet}
          query={query}
        />

        <Reader
          koan={selectedKoan}
          onTagClick={onTagToggle}
          onShare={onShare}
          onPrev={onPrev}
          onNext={onNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>

      <Toast message={toastMsg} show={toastOn} />

      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
