'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: MapPin,
      label: t('address'),
      value: '191 Calle Clot, Barcelona, 08027',
      href: 'https://maps.google.com/?q=191+Calle+Clot+Barcelona+08027',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'info@ekdigital.eu',
      href: 'mailto:info@ekdigital.eu',
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+34 663 160 888',
      href: 'tel:+34663160888',
    },
    {
      icon: Clock,
      label: t('schedule'),
      value: 'Lun - Vie: 9:00 - 18:00',
      href: null,
    },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.backgroundEffect}></div>
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <p className="section-subtitle">{t('subtitle')}</p>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>{t('name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Juan García"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="juan@empresa.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <Send size={18} />
                {t('send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoContainer}>
            <div className={styles.infoCards}>
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <div 
                  key={label} 
                  className={styles.infoCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.infoIcon}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{label}</span>
                    {href ? (
                      <a href={href} className={styles.infoValue} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.1838%2C41.4069%2C2.1938%2C41.4129&layer=mapnik&marker=41.4099%2C2.1888"
                className={styles.map}
                loading="lazy"
                title="EK Digital Location"
              ></iframe>
              <a 
                href="https://www.openstreetmap.org/?mlat=41.4099&mlon=2.1888#map=17/41.4099/2.1888"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <MapPin size={16} />
                Ver mapa más grande
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

