import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Briefcase, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Building Tomorrow's Infrastructure Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 1985, Adhbhut Infrastructure has been at the forefront of infrastructure development,
              delivering excellence in real estate and turnkey projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Building2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure Excellence</h3>
              <p className="text-muted-foreground">
                Specializing in real estate development and turnkey infrastructure projects.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Led by experienced professionals committed to delivering quality results.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Briefcase className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Diverse Portfolio</h3>
              <p className="text-muted-foreground">
                From residential to commercial projects, we handle it all.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Phone className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                Dedicated team providing excellent service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help bring your infrastructure vision to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}