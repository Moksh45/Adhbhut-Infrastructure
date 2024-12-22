import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const governanceItems = [
  {
    title: "Audit Committee",
    members: [
      { name: "Mr. Vipul Gupta", role: "Chairperson" },
      { name: "Mr. Amman Kumar", role: "Member" },
      { name: "Ms. Rajiv Kapur Kanika Kapur", role: "Member" },
    ],
  },
  {
    title: "Nomination and Remuneration Committee",
    members: [
      { name: "Mr. Vipul Gupta", role: "Chairperson" },
      { name: "Mr. Amman Kumar", role: "Member" },
      { name: "Ms. Rajiv Kapur Kanika Kapur", role: "Member" },
    ],
  },
  {
    title: "Investor Grievance cum Stakeholder Relationship Committee",
    members: [
      { name: "Ms. Rajiv Kapur Kanika Kapur", role: "Chairperson" },
      { name: "Mr. Amman Kumar", role: "Member" },
      { name: "Mr. Vipul Gupta", role: "Member" },
    ],
  },
];

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Corporate Governance</h1>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Committee Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {governanceItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {item.members.map((member, idx) => (
                        <li key={idx} className="flex justify-between items-center">
                          <span>{member.name}</span>
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}