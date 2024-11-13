import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
      <div className="w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;