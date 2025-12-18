'use client';

import { useTranslations } from 'next-intl';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Lightbulb, 
  Brain, 
  Wrench,
  ArrowUpRight
} from 'lucide-react';
import styles from './Services.module.css';

const serviceIcons = {
  web: Globe,
  mobile: Smartphone,
  cloud: Cloud,
  consulting: Lightbulb,
  ai: Brain,
  maintenance: Wrench,
};

const services = ['web', 'mobile', 'cloud', 'consulting', 'ai', 'maintenance'] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className={styles.backgroundEffect}></div>
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <p className="section-subtitle">{t('subtitle')}</p>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            return (
              <article 
                key={service} 
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardIcon}>
                  <Icon size={28} />
                </div>
                <h3 className={styles.cardTitle}>
                  {t(`${service}.title`)}
                  <ArrowUpRight size={18} className={styles.arrow} />
                </h3>
                <p className={styles.cardDescription}>
                  {t(`${service}.description`)}
                </p>
                <div className={styles.cardGlow}></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


