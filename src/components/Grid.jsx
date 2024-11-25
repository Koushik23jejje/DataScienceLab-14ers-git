import React from 'react';

export function Grid({ children, className = "" }) {
  return (
    <div className={`grid gap-6 ${className}`}>
      {children}
    </div>
  );
}