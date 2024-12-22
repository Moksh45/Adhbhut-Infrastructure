import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}