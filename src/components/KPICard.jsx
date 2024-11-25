import React from 'react';
import { Card, Text, Metric } from '@tremor/react';

export function KPICard({ title, value }) {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>{title}</Text>
      <Metric>{value}</Metric>
    </Card>
  );
}