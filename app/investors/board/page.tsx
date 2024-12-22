import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const boardMembers = [
  {
    name: "Mr. Anubhav Dham",
    designation: "Managing Director",
    category: "Chairman",
  },
  {
    name: "Mr. Amman Kumar",
    designation: "Non-Executive Director",
    category: "Director",
  },
  {
    name: "Mr. Vipul Gupta",
    designation: "Non-Executive & Independent Director",
    category: "Director",
  },
  {
    name: "Ms. Rajiv Kapur Kanika Kapur",
    designation: "Non Executive & Independent Director",
    category: "Director",
  },
  {
    name: "Mr. Subir Kumar Mishra",
    designation: "Chief Financial Officer",
    category: "Key Managerial Personnel",
  },
  {
    name: "Sanjay Sharma",
    designation: "Non-Executive & Independent Director",
    category: "Director",
  },
  {
    name: "Sri Kant",
    designation: "Non-Executive & Independent Director",
    category: "Director",
  },
];

export default function BoardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Board of Directors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boardMembers.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.category}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{member.designation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}