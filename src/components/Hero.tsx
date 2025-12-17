'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              {t('titlePart1')}<br />
              <span className={styles.highlight}>{t('titleHighlight1')}</span>
            </span>
            <span className={styles.titleLine}>
              {t('titlePart2')}<br />
              <span className={styles.highlight}>{t('titleHighlight2')}</span>
            </span>
          </h1>

          <p className={styles.subtitle}>{t('subtitle')}</p>

          <div className={styles.actions}>
            <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              {t('cta')}
              <ArrowRight size={18} />
            </a>
            <a href="#services" className={`btn btn-secondary ${styles.learnBtn}`}>
              {t('learnMore')}
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>{t('stats.projects')}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>{t('stats.satisfaction')}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>{t('stats.years')}</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.fileName}>ekdigital.tsx</span>
            </div>
            <div className={styles.cardBody}>
              <pre className={styles.code}>
                <code>
                  <span className={styles.keyword}>const</span>{' '}
                  <span className={styles.variable}>solution</span> ={' '}
                  <span className={styles.keyword}>await</span>{' '}
                  <span className={styles.function}>createDigital</span>({'\n'}
                  {'  '}<span className={styles.property}>innovation</span>: <span className={styles.boolean}>true</span>,{'\n'}
                  {'  '}<span className={styles.property}>quality</span>: <span className={styles.string}>&quot;excellence&quot;</span>,{'\n'}
                  {'  '}<span className={styles.property}>passion</span>: <span className={styles.number}>100</span>{'\n'}
                  );
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}

