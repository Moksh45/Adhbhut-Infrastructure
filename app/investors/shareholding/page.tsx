import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "@/components/ui/chart";

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
              type="pie"
              data={{
                labels: ['Promoters', 'Public', 'Institutions', 'Others'],
                datasets: [{
                  data: [45, 30, 15, 10],
                  backgroundColor: [
                    'hsl(var(--chart-1))',
                    'hsl(var(--chart-2))',
                    'hsl(var(--chart-3))',
                    'hsl(var(--chart-4))',
                  ],
                }],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart
              type="line"
              data={{
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                  label: 'Promoter Holding',
                  data: [45, 45, 45, 45],
                  borderColor: 'hsl(var(--chart-1))',
                  tension: 0.1,
                }, {
                  label: 'Public Holding',
                  data: [30, 31, 32, 30],
                  borderColor: 'hsl(var(--chart-2))',
                  tension: 0.1,
                }],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}