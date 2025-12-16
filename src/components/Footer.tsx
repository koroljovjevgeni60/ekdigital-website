'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Mail, Phone, Building2, FileText, Globe } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.columnWide}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>EK</span>
              <span className={styles.logoText}>DIGITAL</span>
            </div>
            <p className={styles.tagline}>{t('tagline')}</p>
            <p className={styles.description}>{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Links</h4>
            <nav className={styles.links}>
              <Link href="/" className={styles.link}>{tNav('home')}</Link>
              <a href="#services" className={styles.link}>{tNav('services')}</a>
              <a href="#about" className={styles.link}>{tNav('about')}</a>
              <a href="#contact" className={styles.link}>{tNav('contact')}</a>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{tNav('contact')}</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>{t('address')}</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <a href="mailto:info@ekdigital.eu">info@ekdigital.eu</a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <a href="tel:+34663160888">+34 663 160 888</a>
              </div>
              <div className={styles.contactItem}>
                <Globe size={18} />
                <a href="https://ekdigital.eu" target="_blank" rel="noopener noreferrer">ekdigital.eu</a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <nav className={styles.links}>
              <Link href="/privacy" className={styles.link}>{t('privacy')}</Link>
              <Link href="/terms" className={styles.link}>{t('terms')}</Link>
              <Link href="/cookies" className={styles.link}>{t('cookies')}</Link>
            </nav>
          </div>
        </div>

        {/* Company Details */}
        <div className={styles.companyDetails}>
          <div className={styles.companyInfo}>
            <div className={styles.companyItem}>
              <Building2 size={16} />
              <span><strong>{t('companyName')}:</strong> EK DIGITAL, SOCIEDAD LIMITADA</span>
            </div>
            <div className={styles.companyItem}>
              <FileText size={16} />
              <span><strong>CIF:</strong> B72599917</span>
            </div>
            <div className={styles.companyItem}>
              <MapPin size={16} />
              <span><strong>{t('registeredAddress')}:</strong> 191 Calle Clot, Barcelona, 08027, España</span>
            </div>
          </div>
          <div className={styles.companyInfo}>
            <div className={styles.companyItem}>
              <FileText size={16} />
              <span><strong>{t('registration')}:</strong> {t('registrationInfo')}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} EK DIGITAL, S.L. · {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

