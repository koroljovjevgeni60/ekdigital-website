'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Cookie, X } from 'lucide-react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const t = useTranslations('cookies');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <button className={styles.closeBtn} onClick={acceptEssential} aria-label="Close">
          <X size={20} />
        </button>
        
        <div className={styles.icon}>
          <Cookie size={32} />
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{t('title')}</h3>
          <p className={styles.description}>{t('description')}</p>
          <p className={styles.moreInfo}>
            {t('moreInfo')}{' '}
            <Link href="/cookies" className={styles.link}>
              {t('cookiePolicy')}
            </Link>
          </p>
        </div>
        
        <div className={styles.actions}>
          <button onClick={acceptAll} className={styles.acceptAll}>
            {t('acceptAll')}
          </button>
          <button onClick={acceptEssential} className={styles.acceptEssential}>
            {t('acceptEssential')}
          </button>
        </div>
      </div>
    </div>
  );
}

