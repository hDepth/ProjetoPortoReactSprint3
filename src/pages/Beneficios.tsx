import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import BenefitSection from '../components/BenefitsSection';
import benefitsData from '../data/beneficiosdata';

const Beneficios = () => {
  return (
    <>
      <Header />
      <BackButton title="Beneficios" />
      <div className="divsp">
        <div className="divleft">
          {benefitsData.left.map((benefit) => (
            <BenefitSection key={benefit.id} {...benefit} />
          ))}
        </div>
        <div className="divright">
          {benefitsData.right.map((benefit) => (
            <BenefitSection key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Beneficios;
