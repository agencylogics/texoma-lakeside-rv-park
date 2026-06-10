/*
 * DESIGN: Rugged Americana
 * Long-Term RV Living on Lake Texoma — SEO/GEO content page
 */
import { Link } from "wouter";
import { Home, DollarSign, MapPin, Shield, Users, Leaf, ArrowRight } from "lucide-react";

export default function LongTermLiving() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/lifestyle_campfire_145e1d7c.jpg"
            alt="Evening campfire scene at an RV park with string lights and comfortable outdoor living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/80" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="badge-stamp border-[var(--color-amber)]/40 text-[var(--color-amber)] mb-4 text-xs">
            Full-Time RV Living
          </span>
          <h1 className="font-[var(--font-display)] font-black text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            Long-Term RV Living
            <br />
            <span className="text-[var(--color-amber)]">on Lake Texoma</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover why Texoma Lakeside RV Park is the ideal home base for full-time RV living in southeastern Oklahoma, with affordable rates and unbeatable lake access.
          </p>
        </div>
      </section>

      {/* Why Long-Term */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container max-w-4xl">
          <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl mb-8">
            Why Choose Long-Term RV Living at Lake Texoma?
          </h2>
          <div className="space-y-4 text-[var(--color-navy)]/70 leading-relaxed mb-12">
            <p>
              Long-term RV living has become one of the fastest-growing lifestyle choices in America, and for good reason. It offers the freedom of mobility, lower cost of living compared to traditional housing, and the ability to live in places most people only visit on vacation. At Texoma Lakeside RV Park, you get all of that — plus the daily luxury of living just one mile from one of the best lakes in the country.
            </p>
            <p>
              Whether you're a retiree looking for an affordable and peaceful place to settle, a remote worker who wants to trade the city for lake views, or a fishing enthusiast who wants to be on the water every day, our park is designed for people who want to make Lake Texoma their home — not just a weekend destination.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <DollarSign className="text-[var(--color-amber)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Affordable Living
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                At $450/month plus electric, your total cost of living is a fraction of traditional rent or mortgage payments in the region. Water, sewer, WiFi, and trash are all included.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <MapPin className="text-[var(--color-amber)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Unbeatable Location
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                Just 1 mile from Burns Run West boat ramps on Lake Texoma, with easy highway access and shopping within 20 minutes. The best of both worlds — remote peace with nearby convenience.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <Home className="text-[var(--color-amber)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Oversized Sites
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                Our 33x50 foot pads give you room to spread out. Set up your outdoor living space, park your tow vehicle, and still have room to breathe. These aren't cramped overnight spots.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <Shield className="text-[var(--color-amber)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Quiet & Peaceful
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                Our park prioritizes long-term residents who value peace and quiet. This isn't a rowdy campground — it's a community of people who chose this lifestyle intentionally.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <Users className="text-[var(--color-amber)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Community Feel
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                Our long-term residents form a friendly, supportive community. Share fishing tips, swap stories around the campfire, and enjoy the camaraderie of like-minded neighbors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <Leaf className="text-[var(--color-forest)] mb-4" size={28} />
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-lg mb-2">
                Nature at Your Door
              </h3>
              <p className="text-sm text-[var(--color-navy)]/70">
                Wake up to birdsong, watch deer graze in the evening, and fall asleep to the sounds of nature. The park's natural setting provides a daily escape from the noise of modern life.
              </p>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6">
              Cost of Living Comparison
            </h2>
            <p className="text-[var(--color-navy)]/70 mb-6">
              See how long-term RV living at Texoma Lakeside compares to traditional housing options in the region:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4 font-[var(--font-display)] font-bold text-[var(--color-navy)]">Expense</th>
                    <th className="text-center py-3 px-4 font-[var(--font-display)] font-bold text-[var(--color-amber)]">Texoma Lakeside</th>
                    <th className="text-center py-3 pl-4 font-[var(--font-display)] font-bold text-[var(--color-navy)]/60">Avg. Apartment</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-navy)]/70">
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Monthly Rent/Lease</td>
                    <td className="text-center py-3 px-4 font-semibold text-[var(--color-navy)]">$450</td>
                    <td className="text-center py-3 pl-4">$900 - $1,400</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Water & Sewer</td>
                    <td className="text-center py-3 px-4 font-semibold text-[var(--color-forest)]">Included</td>
                    <td className="text-center py-3 pl-4">$50 - $80</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Internet/WiFi</td>
                    <td className="text-center py-3 px-4 font-semibold text-[var(--color-forest)]">Included</td>
                    <td className="text-center py-3 pl-4">$60 - $100</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Trash Service</td>
                    <td className="text-center py-3 px-4 font-semibold text-[var(--color-forest)]">Included</td>
                    <td className="text-center py-3 pl-4">$20 - $40</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Electric</td>
                    <td className="text-center py-3 px-4">Varies by usage</td>
                    <td className="text-center py-3 pl-4">Varies by usage</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-[var(--font-display)] font-bold text-[var(--color-navy)]">Est. Monthly Total</td>
                    <td className="text-center py-3 px-4 font-[var(--font-stat)] text-2xl text-[var(--color-amber)]">~$550</td>
                    <td className="text-center py-3 pl-4 font-[var(--font-stat)] text-2xl text-[var(--color-navy)]/60">~$1,200+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-navy)]/40 mt-4 italic">
              *Estimates based on average costs in the southeastern Oklahoma / North Texas region. Individual costs may vary.
            </p>
          </div>

          {/* Who It's For */}
          <div className="bg-[var(--color-navy)] rounded-xl p-8 text-white mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-white text-2xl mb-6">
              Who Thrives at Texoma Lakeside?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Retirees seeking affordable, peaceful lakeside living</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Remote workers who want a change of scenery</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Avid fishermen and boaters</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Couples downsizing for financial freedom</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Seasonal residents escaping winter or summer heat</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span className="text-white/80">Anyone who values nature, quiet, and community</span>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-12">
            <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-6">
              Related Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/lake-texoma-fishing-boating-guide" className="flex items-center gap-2 p-4 bg-[var(--color-cream)]/50 rounded-lg hover:bg-[var(--color-cream)] transition-all group">
                <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Fishing & Boating Guide</span>
              </Link>
              <Link href="/about" className="flex items-center gap-2 p-4 bg-[var(--color-cream)]/50 rounded-lg hover:bg-[var(--color-cream)] transition-all group">
                <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">About Our Park</span>
              </Link>
              <Link href="/lease-and-park-rules" className="flex items-center gap-2 p-4 bg-[var(--color-cream)]/50 rounded-lg hover:bg-[var(--color-cream)] transition-all group">
                <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Lease & Park Rules</span>
              </Link>
              <Link href="/faq" className="flex items-center gap-2 p-4 bg-[var(--color-cream)]/50 rounded-lg hover:bg-[var(--color-cream)] transition-all group">
                <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">FAQ</span>
              </Link>
            </div>
          </div>

          {/* Local Area */}
          <div>
            <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl mb-6">
              Living in the Lake Texoma Region
            </h2>
            <div className="space-y-4 text-[var(--color-navy)]/70 leading-relaxed">
              <p>
                The Lake Texoma region of southeastern Oklahoma offers a unique blend of rural tranquility and accessible amenities. While the park itself is nestled in a peaceful, natural setting in Cartwright, you're never far from what you need:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                  <span><strong>Shopping & Dining:</strong> Durant, OK is approximately 20 minutes away with Walmart, grocery stores, restaurants, and medical facilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                  <span><strong>Entertainment:</strong> Choctaw Casino & Resort is less than 15 miles away, offering dining, gaming, and live entertainment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                  <span><strong>Healthcare:</strong> AllianceHealth Durant and other medical facilities are within a 25-minute drive.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                  <span><strong>Highway Access:</strong> US-75 is less than 7 miles away, connecting you to the Dallas-Fort Worth metroplex (approximately 90 minutes south).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h2 className="font-[var(--font-display)] font-black text-white text-3xl md:text-4xl mb-4">
            Start Your Lake Life Today
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Limited spots available for long-term lease. Call now to check availability and secure your lakeside home base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97]"
            >
              Reserve Your Spot
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:9723221989"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-[var(--font-display)] font-bold rounded-lg hover:border-white/60 transition-all"
            >
              Call (972) 322-1989
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
