import { Building2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">Adhbhut Infrastructure</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading infrastructure development company since 1985
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-sm text-muted-foreground hover:text-foreground">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              Begampur Khatola, Khandsa<br />
              Near Krishna Maruti<br />
              Gurgaon, Basai Road<br />
              Haryana, India, 122001
            </address>
            <p className="mt-2 text-sm text-muted-foreground">
              Phone: +91-7048959386<br />
              Email: adhbhut.ind@rediffmail.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Adhbhut Infrastructure Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}