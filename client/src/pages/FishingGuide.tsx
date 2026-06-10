/*
 * DESIGN: Rugged Americana
 * Lake Texoma Fishing & Boating Guide - SEO/GEO content page
 */
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { Fish, Anchor, Sun, Thermometer, MapPin, ArrowRight } from "lucide-react";

export default function FishingGuide() {
  return (
    <>
      <SEOHead
        title="Lake Texoma Fishing & Boating Guide | Best Fishing Near Burns Run West | Texoma Lakeside RV Park"
        description="Complete guide to fishing and boating on Lake Texoma near Cartwright, Oklahoma. Striped bass, largemouth bass, catfish, and crappie fishing tips. Burns Run West boat ramp access just 1 mile from Texoma Lakeside RV Park."
        canonical="https://www.texomalakesidervpark.com/lake-texoma-fishing-boating-guide"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663364711481/KY9zpHWoeCd25Pm76rdm47/fishing_lake_texoma-UoPHkBESYqUBWpUEsEgocz.png"
        ogImageAlt="Bass fisherman casting a line from a boat on Lake Texoma at golden hour"
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663364711481/KY9zpHWoeCd25Pm76rdm47/fishing_lake_texoma-5QAdnBg7ckY4JnzRRpS83i.webp"
            alt="Professional bass fisherman casting from a boat on Lake Texoma at golden hour near Burns Run West boat ramps in Oklahoma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/75" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="badge-stamp border-[var(--color-amber)]/40 text-[var(--color-amber)] mb-4 text-xs">
            Lake Texoma Guide
          </span>
          <h1 className="font-[var(--font-display)] font-black text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            Fishing & Boating
            <br />
            <span className="text-[var(--color-amber)]">on Lake Texoma</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Your complete guide to fishing, boating, and water recreation on one of the top lakes in the United States, right from your home base at Texoma Lakeside RV Park.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container max-w-4xl">
          {/* Intro */}
          <div className="prose-style mb-16">
            <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl mb-6">
              Why Lake Texoma is a World-Class Fishing Destination
            </h2>
            <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
              Lake Texoma, straddling the Texas-Oklahoma border, is one of the largest reservoirs in the United States at over 89,000 acres. It's consistently ranked among the top bass fishing lakes in the nation and is the only inland lake where you can catch striped bass (stripers) that were naturally reproducing, a phenomenon that has made it legendary among anglers.
            </p>
            <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
              Located just 1 mile from Burns Run West boat ramps, Texoma Lakeside RV Park gives you unmatched proximity to some of the best fishing and boating access points on the entire lake. Whether you're a tournament angler, a weekend bass fisherman, or someone who just loves being on the water, this is your ideal home base.
            </p>
          </div>

          {/* Fish Species */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-10">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
              <Fish className="text-[var(--color-amber)]" size={24} />
              Popular Fish Species in Lake Texoma
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Striped Bass (Stripers)</h3>
                <p className="text-sm text-[var(--color-navy)]/70">Lake Texoma's signature fish. Naturally reproducing population with fish commonly exceeding 10-20 lbs. Best caught trolling or with live bait in open water.</p>
              </div>
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Largemouth Bass</h3>
                <p className="text-sm text-[var(--color-navy)]/70">Excellent population throughout the lake's many coves and creek channels. Burns Run area is particularly productive for bass in spring and fall.</p>
              </div>
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Smallmouth Bass</h3>
                <p className="text-sm text-[var(--color-navy)]/70">Found along rocky points and bluffs. Lake Texoma offers some of the best smallmouth fishing in the southern United States.</p>
              </div>
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Blue & Channel Catfish</h3>
                <p className="text-sm text-[var(--color-navy)]/70">Abundant throughout the lake. Blue catfish over 30 lbs are caught regularly. Great option for bank fishing or jug lines.</p>
              </div>
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Crappie</h3>
                <p className="text-sm text-[var(--color-navy)]/70">White and black crappie thrive in Lake Texoma's brush piles and standing timber. Spring crappie fishing is exceptional near creek channels.</p>
              </div>
              <div className="p-4 bg-[var(--color-cream)]/50 rounded-lg">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-2">Sand Bass (White Bass)</h3>
                <p className="text-sm text-[var(--color-navy)]/70">Schooling fish that provide fast-paced action, especially during spring runs. Easy to locate when they're chasing shad on the surface.</p>
              </div>
            </div>
          </div>

          {/* Seasonal Guide */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-10">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
              <Sun className="text-[var(--color-amber)]" size={24} />
              Seasonal Fishing Guide
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-20 shrink-0">
                  <div className="font-[var(--font-display)] font-bold text-[var(--color-forest)] text-sm">SPRING</div>
                  <div className="text-xs text-[var(--color-navy)]/50">Mar - May</div>
                </div>
                <div className="flex-1 border-l-2 border-[var(--color-forest)] pl-4">
                  <p className="text-[var(--color-navy)]/70 text-sm">Prime time for bass fishing as fish move shallow to spawn. Crappie run in creek channels. Stripers are active near the surface. White bass make their annual spawning run up the Red and Washita rivers.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-20 shrink-0">
                  <div className="font-[var(--font-display)] font-bold text-[var(--color-amber)] text-sm">SUMMER</div>
                  <div className="text-xs text-[var(--color-navy)]/50">Jun - Aug</div>
                </div>
                <div className="flex-1 border-l-2 border-[var(--color-amber)] pl-4">
                  <p className="text-[var(--color-navy)]/70 text-sm">Early morning and evening are best for bass. Stripers move to deeper, cooler water. Trolling with downriggers is effective. Catfishing is excellent at night. Great time for swimming and water sports.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-20 shrink-0">
                  <div className="font-[var(--font-display)] font-bold text-[var(--color-amber)] text-sm">FALL</div>
                  <div className="text-xs text-[var(--color-navy)]/50">Sep - Nov</div>
                </div>
                <div className="flex-1 border-l-2 border-[var(--color-amber)] pl-4">
                  <p className="text-[var(--color-navy)]/70 text-sm">Arguably the best overall fishing season. Bass feed aggressively before winter. Stripers return to shallower water. Crappie stack up on brush piles. Cooler temperatures make all-day fishing comfortable.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-20 shrink-0">
                  <div className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-sm">WINTER</div>
                  <div className="text-xs text-[var(--color-navy)]/50">Dec - Feb</div>
                </div>
                <div className="flex-1 border-l-2 border-[var(--color-navy)] pl-4">
                  <p className="text-[var(--color-navy)]/70 text-sm">Slower pace but still productive. Bass can be caught on jigs and blade baits in deeper water. Stripers school in predictable areas. Fewer boats mean more solitude on the water.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Burns Run West Info */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-10">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
              <Anchor className="text-[var(--color-amber)]" size={24} />
              Burns Run West Boat Ramps
            </h2>
            <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
              Burns Run West is one of the most popular and well-maintained boat launch facilities on Lake Texoma. Located just 1 mile from Texoma Lakeside RV Park, it provides:
            </p>
            <ul className="space-y-2 text-[var(--color-navy)]/70">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Multiple concrete boat ramps for easy launching</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Courtesy dock for loading and unloading</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Ample parking for trucks and trailers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Restroom facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Beach and swimming area nearby</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] mt-2 shrink-0" />
                <span>Playground for families</span>
              </li>
            </ul>
          </div>

          {/* Internal Links */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-10">
            <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-6">
              Related Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/long-term-rv-living-lake-texoma" className="flex items-center gap-2 p-4 bg-[var(--color-cream)]/50 rounded-lg hover:bg-[var(--color-cream)] transition-all group">
                <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">Long-Term RV Living</span>
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

          {/* Licensing Info */}
          <div className="bg-[var(--color-navy)] rounded-xl p-8 text-white">
            <h2 className="font-[var(--font-display)] font-bold text-white text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="text-[var(--color-amber)]" size={24} />
              Fishing License Information
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Lake Texoma has a unique licensing situation because it straddles the Texas-Oklahoma border. A special Lake Texoma fishing license is available that allows you to fish the entire lake regardless of which state's waters you're in. This license can be purchased from either the Oklahoma Department of Wildlife Conservation or the Texas Parks and Wildlife Department.
            </p>
            <p className="text-white/70 leading-relaxed">
              Alternatively, a valid fishing license from either Texas or Oklahoma allows you to fish on that state's respective side of the lake. For the most flexibility, the Lake Texoma license is recommended.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h2 className="font-[var(--font-display)] font-black text-white text-3xl mb-4">
            Make Lake Texoma Your Backyard
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            With Burns Run West just 1 mile away, Texoma Lakeside RV Park is the ultimate home base for anglers and boaters.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97]"
          >
            Reserve Your Lakeside Spot
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
