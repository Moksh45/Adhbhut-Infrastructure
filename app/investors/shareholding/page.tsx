'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "@/components/ui/chart";
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ShareholdingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shareholding Pattern</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Shareholding Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart
              config={{
                promoters: { color: 'hsl(var(--chart-1))' },
                public: { color: 'hsl(var(--chart-2))' },
                institutions: { color: 'hsl(var(--chart-3))' },
                others: { color: 'hsl(var(--chart-4))' },
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Promoters', value: 45 },
                      { name: 'Public', value: 30 },
                      { name: 'Institutions', value: 15 },
                      { name: 'Others', value: 10 },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart
              config={{
                promoterHolding: { color: 'hsl(var(--chart-1))' },
                publicHolding: { color: 'hsl(var(--chart-2))' },
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={[
                    { quarter: 'Q1', promoterHolding: 45, publicHolding: 30 },
                    { quarter: 'Q2', promoterHolding: 45, publicHolding: 31 },
                    { quarter: 'Q3', promoterHolding: 45, publicHolding: 32 },
                    { quarter: 'Q4', promoterHolding: 45, publicHolding: 30 },
                  ]}
                >
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="promoterHolding" name="Promoter Holding" stroke="var(--color-promoterHolding)" />
                  <Line type="monotone" dataKey="publicHolding" name="Public Holding" stroke="var(--color-publicHolding)" />
                </LineChart>
              </ResponsiveContainer>
            </Chart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

