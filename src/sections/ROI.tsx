import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ROICalculator from '../components/ROICalculator';

const ROI: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <Container>
        <SectionTitle
          title="Votre fuite de cash actuelle"
          subtitle="Découvrez combien vous perdez chaque mois en n'utilisant pas notre Agent IA."
          centered={true}
        />
        
        <div className="max-w-2xl mx-auto mt-12">
          <ROICalculator />
        </div>
      </Container>
    </section>
  );
};

export default ROI;