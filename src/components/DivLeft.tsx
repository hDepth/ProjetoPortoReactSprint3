import React from 'react';

interface DivLeftProps {
  text: string;
}

const DivLeft: React.FC<DivLeftProps> = ({ text }) => {
  return (
    <div className="divleft">
      <p className="texta">{text}</p>
    </div>
  );
};

export default DivLeft;
