import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CurrentOpenings() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Join Our Talent Pool</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              We&apos;re always interested in meeting talented professionals. Even if you don&apos;t see a 
              current opening that matches your profile, feel free to send us your resume for future opportunities.
            </p>
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Your Resume
            </Button>
          </CardContent>
        </Card>
        <p className="text-center text-muted-foreground">
          Check back regularly for new job openings.
        </p>
      </div>
    </section>
  );
}