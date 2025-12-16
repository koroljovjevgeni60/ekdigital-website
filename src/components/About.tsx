'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle2, Target, Users, Zap, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const t = useTranslations('about');

  const stats = [
    { key: 'projects', value: '50+', icon: Target },
    { key: 'clients', value: '40+', icon: Users },
    { key: 'years', value: '5+', icon: Award },
    { key: 'team', value: '10+', icon: Zap },
  ];

  const featureKeys = ['agile', 'clean', 'support', 'communication', 'modern', 'scalable'];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.backgroundPattern}></div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            
            <p className={styles.description}>{t('description1')}</p>
            <p className={styles.description}>{t('description2')}</p>

            <ul className={styles.features}>
              {featureKeys.map((key) => (
                <li key={key} className={styles.feature}>
                  <CheckCircle2 size={20} className={styles.featureIcon} />
                  <span>{t(`features.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              {stats.map(({ key, value, icon: Icon }, index) => (
                <div 
                  key={key} 
                  className={styles.statCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.statIcon}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{t(`stats.${key}`)}</span>
                </div>
              ))}
            </div>
            
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageOverlay}>
                  <span className={styles.logoMark}>EK</span>
                </div>
                <div className={styles.cityscape}>
                  <div className={styles.building} style={{ height: '60%', left: '10%' }}></div>
                  <div className={styles.building} style={{ height: '80%', left: '25%' }}></div>
                  <div className={styles.building} style={{ height: '50%', left: '40%' }}></div>
                  <div className={styles.building} style={{ height: '90%', left: '55%' }}></div>
                  <div className={styles.building} style={{ height: '70%', left: '70%' }}></div>
                  <div className={styles.building} style={{ height: '55%', left: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

