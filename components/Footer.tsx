import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-background mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-medium tracking-wider uppercase mb-4">
              Ballerina
            </h3>
            <p className="text-sm text-background/80">
              Precision in celebration
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>
                <a
                  href="mailto:nicole@ballerina.com.au"
                  className="hover:text-background transition-colors"
                >
                  nicole@ballerina.com.au
                </a>
              </p>
              <p>
                <a
                  href="tel:[PHONE NUMBER]"
                  className="hover:text-background transition-colors"
                >
                  [PHONE NUMBER]
                </a>
              </p>
              <p className="mt-4">Based in Kyneton</p>
              <p>Serving Macedon Ranges, Melbourne & Regional Victoria</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">
              Navigation
            </h4>
            <nav className="space-y-2 text-sm text-background/80">
              <Link
                href="/about"
                className="block hover:text-background transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block hover:text-background transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="block hover:text-background transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="block hover:text-background transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Ballerina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
