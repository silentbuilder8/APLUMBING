import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;