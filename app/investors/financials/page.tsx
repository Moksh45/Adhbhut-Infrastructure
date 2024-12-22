import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const financialReports = [
  {
    title: "Q4 2023 Financial Results",
    date: "March 31, 2024",
    type: "Quarterly Report",
  },
  {
    title: "Q3 2023 Financial Results",
    date: "December 31, 2023",
    type: "Quarterly Report",
  },
  {
    title: "Q2 2023 Financial Results",
    date: "September 30, 2023",
    type: "Quarterly Report",
  },
  {
    title: "Q1 2023 Financial Results",
    date: "June 30, 2023",
    type: "Quarterly Report",
  },
];

export default function FinancialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Financial Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {financialReports.map((report) => (
          <Card key={report.title}>
            <CardHeader>
              <CardTitle className="text-lg">{report.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{report.type}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Published: {report.date}</p>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}