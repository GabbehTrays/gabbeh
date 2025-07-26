// src/pages/AboutContact.jsx
import { useTranslation } from 'react-i18next';

const AboutContact = () => {
  const { t } = useTranslation();

  return (
    <div className="main-content">
      <div className="about-contact">
        <section>
          <h2 dir="auto">{t('about_us')}</h2>
          <p dir="auto">{t('about_content')}</p>
        </section>
        <section>
          <h2 dir="auto">{t('contact_us')}</h2>
          <div className="contact-info">
            <div>
              <h3 dir="auto">Email</h3>
              <p dir="auto"><a href="mailto:contact@gabbeh.com">contact@gabbeh.com</a></p>
            </div>
            <div>
              <h3 dir="auto">Phone</h3>
              <p dir="auto"><a href="tel:+1800GABBEH">+1-800-GABBEH</a></p>
            </div>
            <div>
              <h3 dir="auto">WhatsApp</h3>
              <p dir="auto"><a href="https://wa.me/+1800GABBEH">Message us on WhatsApp</a></p>
            </div>
            <div>
              <h3 dir="auto">Address</h3>
              <p dir="auto">123 Heritage Lane, Tehran, Iran</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContact;