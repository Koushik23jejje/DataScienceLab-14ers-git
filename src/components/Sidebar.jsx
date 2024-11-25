import React from 'react';

export function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Reports', icon: '📑' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Data Sources', icon: '🗃️' },
    { name: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}