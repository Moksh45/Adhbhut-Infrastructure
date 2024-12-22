import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "Begampur Khatola, Khandsa, Near Krishna Maruti, Gurgaon, Basai Road, Haryana, India, 122001"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91-7048959386"
  },
  {
    icon: Mail,
    title: "Email",
    content: "adhbhut.ind@rediffmail.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM"
  }
];

export function ContactInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {contactDetails.map((detail) => {
        const Icon = detail.icon;
        return (
          <Card key={detail.title}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}