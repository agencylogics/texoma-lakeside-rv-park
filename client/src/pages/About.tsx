/*
 * DESIGN: Rugged Americana
 * About page — park story, features, and local context
 * Internal linking to: FAQ, Lease & Rules, Fishing Guide, Long-Term Living, Home (contact)
 */
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { MapPin, TreePine, Users, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Texoma Lakeside RV Park | Family-Owned RV Park Near Lake Texoma, Oklahoma"
        description="Learn about Texoma Lakeside RV Park, a family-owned RV community in Cartwright, Oklahoma. Oversized 33x50 pads, full hookups, 1 mile to Burns Run West boat ramps. Affordable long-term RV living on Lake Texoma."
        canonical="https://www.texomalakesidervpark.com/about"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663364711481/KY9zpHWoeCd25Pm76rdm47/lake_texoma_aerial-PNUp3Qe3iycRqqxGRQR8Bp.png"
        ogImageAlt="Aerial view of Lake Texoma showing blue-green water and forested coves near Cartwright Oklahoma"
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663364711481/KY9zpHWoeCd25Pm76rdm47/lake_texoma_aerial-oMig63C56e4Ncn4L3KJ27z.webp"
            alt="Aerial drone view of Lake Texoma showing blue-green water, forested coves, and boats near Burns Run West in southeastern Oklahoma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-[var(--font-display)] font-black text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            About <span className="text-[var(--color-amber)]">Texoma Lakeside</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A family-owned RV park offering peaceful, affordable lakeside living in the heart of Oklahoma's Lake Texoma region.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-stamp border-[var(--color-navy)]/20 text-[var(--color-navy)]/70 mb-4 text-xs">
                Our Story
              </span>
              <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl mb-6">
                Built for People Who
                <br />
                Love the Lake
              </h2>
              <div className="space-y-4 text-[var(--color-navy)]/70 leading-relaxed">
                <p>
                  Texoma Lakeside RV Park was created with a simple vision: provide RV enthusiasts with an affordable, well-maintained home base to enjoy everything Lake Texoma has to offer. Located in Cartwright, Oklahoma, our park sits just one mile from Burns Run West boat ramps — one of the most popular access points on the entire lake.
                </p>
                <p>
                  We specialize in <Link href="/long-term-rv-living-lake-texoma" className="text-[var(--color-amber)] font-semibold hover:underline">long-term monthly leases</Link> because we believe in building a community of like-minded people who appreciate the outdoors, value their peace and quiet, and want easy access to <Link href="/lake-texoma-fishing-boating-guide" className="text-[var(--color-amber)] font-semibold hover:underline">world-class fishing and boating</Link> without breaking the bank.
                </p>
                <p>
                  Every site features oversized 33x50 foot pads with full hookups, giving you plenty of room to spread out and make yourself at home. Whether you're a full-time RVer, a weekend warrior, or someone looking for a seasonal retreat, Texoma Lakeside is the kind of place where you can truly relax. Check out our <Link href="/lease-and-park-rules" className="text-[var(--color-amber)] font-semibold hover:underline">lease terms and park rules</Link> to learn more.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <MapPin className="mx-auto text-[var(--color-amber)] mb-3" size={28} />
                <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">1 mi</div>
                <div className="text-sm text-[var(--color-navy)]/60 mt-1">To Boat Ramps</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <TreePine className="mx-auto text-[var(--color-forest)] mb-3" size={28} />
                <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">33x50</div>
                <div className="text-sm text-[var(--color-navy)]/60 mt-1">Foot Pads</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Users className="mx-auto text-[var(--color-amber)] mb-3" size={28} />
                <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">24/7</div>
                <div className="text-sm text-[var(--color-navy)]/60 mt-1">Access</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Heart className="mx-auto text-[var(--color-forest)] mb-3" size={28} />
                <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">$450</div>
                <div className="text-sm text-[var(--color-navy)]/60 mt-1">Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-1 bg-[var(--color-amber)] rounded-full self-stretch shrink-0" />
              <div>
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-2">
                  Unbeatable Lake Access
                </h3>
                <p className="text-[var(--color-navy)]/70 leading-relaxed">
                  At just one mile from Burns Run West, you won't find a more convenient home base for Lake Texoma. Launch your boat in the morning and be back at your site in minutes. Read our <Link href="/lake-texoma-fishing-boating-guide" className="text-[var(--color-amber)] font-semibold hover:underline">Lake Texoma fishing and boating guide</Link> to see what's waiting for you on the water.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-1 bg-[var(--color-forest)] rounded-full self-stretch shrink-0" />
              <div>
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-2">
                  Oversized Sites, Full Hookups
                </h3>
                <p className="text-[var(--color-navy)]/70 leading-relaxed">
                  Our 33x50 foot pads are significantly larger than the industry standard. Combined with full water, sewer, and multi-amp electric service, you have everything you need for comfortable long-term living without feeling cramped.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-1 bg-[var(--color-amber)] rounded-full self-stretch shrink-0" />
              <div>
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-2">
                  Affordable Without Compromise
                </h3>
                <p className="text-[var(--color-navy)]/70 leading-relaxed">
                  At $450/month plus electric, we offer some of the most competitive rates in the Lake Texoma region — and that includes WiFi, water, sewer, and trash service. No hidden fees, no surprises. See our <Link href="/faq" className="text-[var(--color-amber)] font-semibold hover:underline">FAQ page</Link> for more details on pricing and what's included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="container">
          <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl text-center mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/lake-texoma-fishing-boating-guide" className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md hover:border-[var(--color-amber)]/30 transition-all group">
              <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
              <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Fishing & Boating Guide</span>
            </Link>
            <Link href="/long-term-rv-living-lake-texoma" className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md hover:border-[var(--color-amber)]/30 transition-all group">
              <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
              <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Long-Term RV Living</span>
            </Link>
            <Link href="/lease-and-park-rules" className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md hover:border-[var(--color-amber)]/30 transition-all group">
              <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
              <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Lease & Park Rules</span>
            </Link>
            <Link href="/faq" className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md hover:border-[var(--color-amber)]/30 transition-all group">
              <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
              <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">FAQ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h2 className="font-[var(--font-display)] font-black text-white text-3xl md:text-4xl mb-4">
            Come See Us
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            We'd love to show you around. Give us a call or fill out our contact form to get started.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97] shadow-xl shadow-[var(--color-amber)]/25"
          >
            Contact Us Today
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
