'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Rocket } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className={styles.cta}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.pattern}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.icon}>
          <Rocket size={32} />
        </div>
        
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        
        <a href="#contact" className={`btn btn-primary ${styles.button}`}>
          {t('button')}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}


