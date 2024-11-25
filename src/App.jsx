import React from 'react';
import { Card, Title, BarChart, DonutChart, AreaChart } from '@tremor/react';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { KPICard } from './components/KPICard';
import { mockData } from './data/mockData';

function App() {
  const kpiData = [
    { title: 'Total Revenue', value: '$45,231' },
    { title: 'Active Users', value: '1,234' },
    { title: 'Conversion Rate', value: '12.3%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {kpiData.map((kpi, index) => (
              <KPICard 
                key={index}
                title={kpi.title}
                value={kpi.value}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <Title>Revenue Over Time</Title>
              <AreaChart
                data={mockData.timeSeriesData}
                index="date"
                categories={["revenue"]}
                colors={["blue"]}
                className="h-72 mt-4"
              />
            </Card>
            
            <Card>
              <Title>Sales by Category</Title>
              <DonutChart
                data={mockData.categoryData}
                category="sales"
                index="category"
                valueFormatter={(number) => 
                  `$${Intl.NumberFormat('us').format(number).toString()}`
                }
                className="h-72 mt-4"
              />
            </Card>

            <Card className="lg:col-span-3">
              <Title>Regional Performance</Title>
              <BarChart
                data={mockData.regionalData}
                index="region"
                categories={["sales", "profit"]}
                colors={["blue", "green"]}
                valueFormatter={(number) => 
                  `$${Intl.NumberFormat('us').format(number).toString()}`
                }
                className="h-72 mt-4"
              />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;