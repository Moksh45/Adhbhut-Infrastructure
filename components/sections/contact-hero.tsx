import { Phone } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8">
          <Phone className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Get in touch with our team for inquiries about our services, career opportunities, or investor relations.
        </p>
      </div>
    </section>
  );
}