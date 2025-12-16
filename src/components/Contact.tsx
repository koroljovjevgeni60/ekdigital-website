'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, XCircle, X, Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{ show: boolean; success: boolean }>({ show: false, success: false });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
      value: t('scheduleValue'),
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({ show: true, success: true });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setModal({ show: true, success: false });
      }
    } catch {
      setModal({ show: true, success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setModal({ show: false, success: false });

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.backgroundEffect}></div>
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <p className="section-subtitle">{t('subtitle')}</p>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>{t('name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  placeholder={t('emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder={t('messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className={styles.spinner} />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('send')}
                  </>
                )}
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
                {t('viewMap')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {modal.show && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <X size={24} />
            </button>
            <div className={`${styles.modalIcon} ${modal.success ? styles.success : styles.error}`}>
              {modal.success ? <CheckCircle size={48} /> : <XCircle size={48} />}
            </div>
            <h3 className={styles.modalTitle}>
              {modal.success ? t('successTitle') : t('errorTitle')}
            </h3>
            <p className={styles.modalMessage}>
              {modal.success ? t('successMessage') : t('errorMessage')}
            </p>
            <button className={`btn btn-primary ${styles.modalBtn}`} onClick={closeModal}>
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
