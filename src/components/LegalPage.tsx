'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import styles from './LegalPage.module.css';

interface Section {
  titleKey: string;
  contentKey: string;
}

interface LegalPageProps {
  namespace: 'privacyPage' | 'termsPage' | 'cookiesPage';
  sections: Section[];
}

export default function LegalPage({ namespace, sections }: LegalPageProps) {
  const t = useTranslations(namespace);
  const tLegal = useTranslations('legal');

  return (
    <div className={styles.legalPage}>
      <div className={styles.background}></div>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={18} />
          {tLegal('backHome')}
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.updated}>
            {tLegal('lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className={styles.content}>
          <p className={styles.intro}>{t('intro')}</p>

          {sections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{t(section.titleKey)}</h2>
              <p className={styles.sectionContent}>{t(section.contentKey)}</p>
            </section>
          ))}
        </div>

        <footer className={styles.pageFooter}>
          <p>EK DIGITAL, SOCIEDAD LIMITADA</p>
          <p>191 Calle Clot, Barcelona, 08027</p>
          <p>info@ekdigital.eu</p>
        </footer>
      </div>
    </div>
  );
}


