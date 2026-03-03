import LanguageSwitch from './LanguageSwitch';
import styles from './Header.module.css';

export default function Header({ lang }: { lang: 'en' | 'tp' }) {
  const homeHref = `/${lang}`;
  const isTp = lang === 'tp';
  const moreBooksLabel = isTp ? 'lipu sin' : 'More books';
  const faqLabel = isTp ? 'sona lili' : 'FAQ';
  const seriesLabel = isTp ? 'sona Sonko' : 'Chinese Wisdom';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>&gt;</span>
          <a href={homeHref} className={`${styles.brandTitle} ux-focus-ring`} style={{ textDecoration: 'none' }}>
            Chinese Wisdom in toki pona
          </a>
        </div>

        <nav className={styles.nav} aria-label="Site navigation">
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://toki.abvx.xyz/">
            Translator
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://toki.abvx.xyz/learn">
            Learn
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://toki-free.abvx.xyz/">
            Kit
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${homeHref}#more-books`}>
            {moreBooksLabel}
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${homeHref}#faq`}>
            {faqLabel}
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://stoic.abvx.xyz/" target="_blank" rel="noopener noreferrer">
            Toki Stoic
          </a>
          <a className={`${styles.navLink} ${styles.navLinkActive} ux-hover-btn ux-focus-ring`} href={homeHref}>
            {seriesLabel}
          </a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
