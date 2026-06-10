/*
 * DESIGN: Rugged Americana — Bold outdoor adventure with Southern warmth
 * Deep navy, warm amber/gold accents, cream backgrounds, textured depth
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Droplets, Zap, Wifi, Trash2, Car, Ruler,
  Anchor, Fish, TreePine, MapPin, Clock, Shield,
  ChevronRight, Phone, ArrowRight
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <UrgencyBanner />
      <StepsSection />
      <AmenitiesSection />
      <LocationSection />
      <LifestyleSection />
      <PricingSection />
      <InternalLinksSection />
      <FAQPreview />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero_sunset_lake_a779a567.jpg"
          alt="Stunning sunset over Lake Texoma with RVs parked along the shoreline and a fishing boat at the dock"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/90 via-[var(--color-navy)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="badge-stamp border-[var(--color-amber)]/60 text-[var(--color-amber)] mb-6 text-xs">
              <MapPin size={14} />
              Cartwright, Oklahoma &middot; Lake Texoma
            </div>
          </div>

          <h1
            className={`font-[var(--font-display)] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Your Lakeside
            <br />
            <span className="text-[var(--color-amber)]">Home Base</span>
            <br />
            on Texoma
          </h1>

          <p
            className={`text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Affordable long-term RV sites with full hookups, oversized pads, and direct access to Burns Run West boat ramps. Peace, nature, and lake life — starting at $450/month.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg text-base hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97] shadow-xl shadow-[var(--color-amber)]/25"
            >
              Reserve Your Spot
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:9723221989"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-[var(--font-display)] font-bold rounded-lg text-base hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <Phone size={18} />
              Call (972) 322-1989
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencyBanner() {
  return (
    <div className="bg-[var(--color-amber)] py-3 relative overflow-hidden">
      <div className="container flex items-center justify-center gap-3 text-[var(--color-navy)]">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse-subtle" />
        <p className="font-[var(--font-display)] font-bold text-sm md:text-base tracking-wide">
          LIMITED AVAILABILITY — Only a Few Sites Remaining for Long-Term Lease
        </p>
        <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse-subtle" />
      </div>
    </div>
  );
}

function StepsSection() {
  const { ref, inView } = useInView();

  const steps = [
    {
      num: "01",
      title: "Give Us a Call",
      desc: "Reach out to check availability and ask any questions. We'll walk you through everything you need to know about your new lakeside home.",
    },
    {
      num: "02",
      title: "Hook Up Your RV",
      desc: "Back into your oversized 33x50 pad and connect to full hookups. We're on-site to help with anything you need during setup.",
    },
    {
      num: "03",
      title: "Enjoy Lake Texoma",
      desc: "Kick back and enjoy the peace of lakeside living. Fish, boat, or just relax — Burns Run West is right down the road.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-stamp border-[var(--color-navy)]/20 text-[var(--color-navy)]/70 mb-4 text-xs">
            Simple Process
          </span>
          <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl lg:text-5xl">
            Book Your Stay in 3 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white rounded-xl p-8 shadow-lg shadow-black/5 border border-black/5 transition-all duration-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-[var(--font-stat)] text-6xl text-[var(--color-amber)]/30 absolute top-4 right-6">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-5">
                <span className="font-[var(--font-stat)] text-[var(--color-amber)] text-xl">{step.num}</span>
              </div>
              <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  const { ref, inView } = useInView();

  const amenities = [
    { icon: Ruler, label: "33' x 50' Pads", desc: "Oversized sites for any RV" },
    { icon: Droplets, label: "Water & Sewer", desc: "Full connections at every site" },
    { icon: Zap, label: "20/30/50 Amp", desc: "All electric service options" },
    { icon: Wifi, label: "Free WiFi", desc: "Complimentary internet access" },
    { icon: Trash2, label: "Trash Service", desc: "Onsite pickup included" },
    { icon: Car, label: "Gravel Parking", desc: "Easy pull-in/back-in access" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[var(--color-navy)] texture-grain relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-stamp border-[var(--color-amber)]/40 text-[var(--color-amber)] mb-4 text-xs">
              Full Hookups Included
            </span>
            <h2 className="font-[var(--font-display)] font-black text-white text-3xl md:text-4xl lg:text-5xl mb-6">
              Premium RV Site
              <br />
              <span className="text-[var(--color-amber)]">Amenities</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              Every site at Texoma Lakeside comes fully equipped with everything you need for comfortable long-term RV living. No surprises, no hidden fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-amber)]/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-[var(--color-amber)]" />
                  </div>
                  <div>
                    <div className="font-[var(--font-display)] font-bold text-white text-sm">
                      {item.label}
                    </div>
                    <div className="text-white/50 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/manus-storage/rv_pad_premium_45fbafa0.jpg"
              alt="Premium RV site with full hookups, gravel pad, shade trees, and lake view at Texoma Lakeside RV Park"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-[var(--color-amber)] text-[var(--color-navy)] px-5 py-3 rounded-lg shadow-lg">
              <div className="font-[var(--font-stat)] text-3xl">33x50</div>
              <div className="font-[var(--font-display)] text-xs font-bold uppercase tracking-wider">Foot Pads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const { ref, inView } = useInView();

  const highlights = [
    { icon: Anchor, text: "1 mile to Burns Run West Boat Ramps" },
    { icon: Fish, text: "World-class bass & striper fishing" },
    { icon: TreePine, text: "Peaceful, quiet natural setting" },
    { icon: MapPin, text: "Less than 7 miles to US-75" },
    { icon: Clock, text: "20 minutes to nearest shopping" },
    { icon: Shield, text: "15 miles to Choctaw Casino" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/manus-storage/lake_aerial_view_22624da0.jpg"
              alt="Aerial view of Lake Texoma showing the beautiful blue-green water, coves, and surrounding forests near Cartwright Oklahoma"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="badge-stamp border-[var(--color-navy)]/20 text-[var(--color-navy)]/70 mb-4 text-xs">
              Prime Location
            </span>
            <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl lg:text-5xl mb-6">
              Ideal Location Near
              <br />
              <span className="text-[var(--color-forest)]">Burns Run West</span>
            </h2>
            <p className="text-[var(--color-navy)]/70 text-lg leading-relaxed mb-8">
              Nestled just a mile from Burns Run West boat ramps, Texoma Lakeside RV Park puts you at the doorstep of Lake Texoma's best fishing, boating, and outdoor recreation — while still being close to everything you need.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div
                  key={item.text}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "500ms" }}
                >
                  <item.icon size={20} className="text-[var(--color-amber)] shrink-0" />
                  <span className="text-[var(--color-navy)]/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/manus-storage/lifestyle_campfire_145e1d7c.jpg"
          alt="Couple enjoying a campfire evening at their RV site with string lights and American flag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="font-[var(--font-display)] font-black text-white text-3xl md:text-4xl lg:text-5xl mb-6">
          More Than a Spot —
          <br />
          <span className="text-[var(--color-amber)]">It's a Lifestyle</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're casting a line at sunrise, exploring the lake by boat, or unwinding by a campfire under the stars — life at Texoma Lakeside is the escape you've been looking for.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg text-base hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.97] shadow-xl shadow-[var(--color-amber)]/25"
        >
          Start Your Lake Life
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function PricingSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-stamp border-[var(--color-navy)]/20 text-[var(--color-navy)]/70 mb-4 text-xs">
            Transparent Pricing
          </span>
          <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl lg:text-5xl">
            Simple, Affordable Rates
          </h2>
          <p className="text-[var(--color-navy)]/60 mt-4 text-lg max-w-xl mx-auto">
            All rates include water, sewer, WiFi, and trash service. No hidden fees.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Daily */}
          <div className="bg-white rounded-xl p-8 shadow-lg shadow-black/5 border border-black/5 text-center">
            <div className="font-[var(--font-display)] font-bold text-[var(--color-navy)]/60 text-sm uppercase tracking-wider mb-2">
              Daily
            </div>
            <div className="font-[var(--font-stat)] text-5xl text-[var(--color-navy)]">$30</div>
            <div className="text-[var(--color-navy)]/50 text-sm mt-1">per night</div>
            <div className="mt-4 pt-4 border-t border-black/5 text-sm text-[var(--color-navy)]/60">
              Perfect for short visits
            </div>
          </div>

          {/* Weekly */}
          <div className="bg-white rounded-xl p-8 shadow-lg shadow-black/5 border border-black/5 text-center">
            <div className="font-[var(--font-display)] font-bold text-[var(--color-navy)]/60 text-sm uppercase tracking-wider mb-2">
              Weekly
            </div>
            <div className="font-[var(--font-stat)] text-5xl text-[var(--color-navy)]">$175</div>
            <div className="text-[var(--color-navy)]/50 text-sm mt-1">per week</div>
            <div className="mt-4 pt-4 border-t border-black/5 text-sm text-[var(--color-navy)]/60">
              Extended weekend stays
            </div>
          </div>

          {/* Monthly - Featured */}
          <div className="bg-[var(--color-navy)] rounded-xl p-8 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[var(--color-amber)] text-[var(--color-navy)] text-xs font-[var(--font-display)] font-bold px-3 py-1 rounded-bl-lg">
              BEST VALUE
            </div>
            <div className="font-[var(--font-display)] font-bold text-[var(--color-amber)] text-sm uppercase tracking-wider mb-2">
              Monthly
            </div>
            <div className="font-[var(--font-stat)] text-5xl text-white">$450</div>
            <div className="text-white/50 text-sm mt-1">per month + electric</div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-white/60">
              Long-term lakeside living
            </div>
          </div>
        </div>

        <p className="text-center text-[var(--color-navy)]/50 text-sm mt-8">
          Monthly pricing may vary based on availability. Call for current rates and specials.
        </p>
      </div>
    </section>
  );
}

function InternalLinksSection() {
  return (
    <section className="py-16 bg-[var(--color-cream)] border-t border-black/5">
      <div className="container">
        <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl text-center mb-8">
          Explore Texoma Lakeside
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link href="/about" className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md hover:border-[var(--color-amber)]/30 transition-all group">
            <ArrowRight size={16} className="text-[var(--color-amber)] group-hover:translate-x-1 transition-transform" />
            <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] text-sm">About Our Park</span>
          </Link>
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
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the monthly rates at Texoma Lakeside RV Park?",
      a: "Monthly rates start at $450 plus electric. Weekly rates are $175 and daily rates are $30. All rates include water, sewer, WiFi, and trash service.",
    },
    {
      q: "How close is the park to Lake Texoma boat ramps?",
      a: "We're located just 1 mile from Burns Run West boat ramps, providing quick and easy access to all of Lake Texoma's fishing, boating, and water recreation.",
    },
    {
      q: "What hookups and amenities are included?",
      a: "Each oversized 33x50 foot site includes water and sewer connections, 20/30/50 amp electric service, gravel parking areas, complimentary WiFi, and onsite trash service.",
    },
    {
      q: "Do you offer long-term stays?",
      a: "Yes! We specialize in long-term monthly leases, making us ideal for full-time RV living near Lake Texoma. We also accommodate weekly and daily stays based on availability.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] font-black text-[var(--color-navy)] text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-black/5 rounded-lg overflow-hidden bg-[var(--color-cream)]/50"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--color-cream)] transition-colors"
              >
                <span className="font-[var(--font-display)] font-bold text-[var(--color-navy)] pr-4">
                  {faq.q}
                </span>
                <ChevronRight
                  size={20}
                  className={`text-[var(--color-amber)] shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-90" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[var(--color-navy)]/70 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[var(--color-amber)] font-[var(--font-display)] font-bold hover:gap-3 transition-all"
          >
            View All FAQs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be wired to notifications later
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-navy)] texture-grain relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge-stamp border-[var(--color-amber)]/40 text-[var(--color-amber)] mb-4 text-xs">
              Get In Touch
            </span>
            <h2 className="font-[var(--font-display)] font-black text-white text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Claim
              <br />
              <span className="text-[var(--color-amber)]">Your Spot?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Fill out the form and we'll get back to you quickly, or give us a call anytime. We'd love to welcome you to Texoma Lakeside.
            </p>

            <div className="space-y-4">
              <a
                href="tel:9723221989"
                className="flex items-center gap-3 text-white/80 hover:text-[var(--color-amber)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-amber)]/10 flex items-center justify-center">
                  <Phone size={18} className="text-[var(--color-amber)]" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Call or Text</div>
                  <div className="font-[var(--font-display)] font-bold">(972) 322-1989</div>
                </div>
              </a>
            </div>

            <div className="mt-10">
              <img
                src="/manus-storage/fishing_boat_ramp_f32d0fcb.jpg"
                alt="Boat being launched at Burns Run West boat ramp on Lake Texoma near Texoma Lakeside RV Park"
                className="rounded-xl shadow-lg w-full object-cover aspect-video opacity-80"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--color-navy)]/60">
                  We'll get back to you as soon as possible. Looking forward to welcoming you to Texoma Lakeside!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-xl mb-2">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-navy)]/70 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-cream)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/50 focus:border-[var(--color-amber)] transition-all text-[var(--color-navy)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-navy)]/70 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-cream)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/50 focus:border-[var(--color-amber)] transition-all text-[var(--color-navy)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-navy)]/70 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-cream)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/50 focus:border-[var(--color-amber)] transition-all text-[var(--color-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-navy)]/70 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-cream)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/50 focus:border-[var(--color-amber)] transition-all text-[var(--color-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-navy)]/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your RV and what you're looking for..."
                    className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-cream)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/50 focus:border-[var(--color-amber)] transition-all resize-none text-[var(--color-navy)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg text-base hover:bg-[var(--color-amber-light)] transition-all active:scale-[0.98] shadow-lg shadow-[var(--color-amber)]/20"
                >
                  Send Message
                </button>
                <p className="text-xs text-center text-[var(--color-navy)]/40">
                  We typically respond within a few hours during business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
