import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContentContainer : React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 md:px-8 lg:px-14 xl:px-48 h-full w-full pt-3">
      {children}
    </div>
  );
};

export default ContentContainer;