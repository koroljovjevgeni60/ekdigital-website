import LegalPage from '@/components/LegalPage';

const sections = [
  { titleKey: 'section1Title', contentKey: 'section1Content' },
  { titleKey: 'section2Title', contentKey: 'section2Content' },
  { titleKey: 'section3Title', contentKey: 'section3Content' },
  { titleKey: 'section4Title', contentKey: 'section4Content' },
  { titleKey: 'section5Title', contentKey: 'section5Content' },
  { titleKey: 'section6Title', contentKey: 'section6Content' },
];

export default function CookiesPage() {
  return <LegalPage namespace="cookiesPage" sections={sections} />;
}

