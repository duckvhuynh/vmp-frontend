import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { AppDownloadSection } from '@/components/sections/AppDownloadSection';
import { CTASection } from '@/components/sections/CTASection';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { GlobalFootprintSection } from '@/components/sections/GlobalFootprintSection';
// Import page sections
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TransportationServicesSection } from '@/components/sections/TransportationServicesSection';
import { VehicleFleetSection } from '@/components/sections/VehicleFleetSection';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Visit Mauritius Paradise - Your Premium Global Chauffeur Experience',
    description: 'Experience luxury ground transportation in 350+ cities worldwide. Book secure, private rides with professional chauffeurs for seamless, luxurious travel.',
  };
}

export default async function HomePage(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GlobalFootprintSection />
      <DestinationsSection />
      <VehicleFleetSection />
      <TransportationServicesSection />
      <CTASection />
      <AppDownloadSection />
      <TestimonialsSection />
    </>
  );
};
