import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Data Science Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Export
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              Settings
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}