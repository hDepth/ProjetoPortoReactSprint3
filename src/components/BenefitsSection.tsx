import React from "react";
interface BenefitSectionProps {
    iconSrc: string;
    description: string;
  }
  
  const BenefitSection: React.FC<BenefitSectionProps> = ({ iconSrc, description }) => {
    return (
        
      <div className="retangulos">
        <div className="ttls">
          <div className="box">
            <img className="icones" src={iconSrc} alt={description} />
          </div>
          <h4>{description}</h4>
        </div>
      </div>
      
    );
  };
  
  export default BenefitSection;
  