/*
 * DESIGN: Rugged Americana
 * FAQ page — comprehensive questions for SEO/GEO optimization
 */
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    category: "Rates & Leasing",
    items: [
      {
        q: "What are the monthly rates at Texoma Lakeside RV Park?",
        a: "Monthly rates start at $450 plus electric. This includes water, sewer, WiFi, and trash service. Weekly rates are $175 and daily rates are $30. Monthly pricing may vary based on availability, so please call (972) 322-1989 for current rates.",
      },
      {
        q: "What is included in the monthly rate?",
        a: "Your monthly rate includes water and sewer connections, complimentary WiFi service, onsite trash pickup, and access to all park amenities. Electric is the only additional cost and is billed separately based on your usage.",
      },
      {
        q: "Do you require a lease or deposit?",
        a: "Yes, we require a lease agreement for all stays. Please call us at (972) 322-1989 to discuss lease terms, move-in requirements, and any deposit information. We keep the process simple and straightforward.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. We believe in transparent, honest pricing. Your monthly rate covers everything except electric usage. There are no surprise charges, administrative fees, or hidden costs.",
      },
    ],
  },
  {
    category: "Sites & Amenities",
    items: [
      {
        q: "How large are the RV sites?",
        a: "Each site features an oversized 33 x 50 foot pad — significantly larger than the industry standard. This gives you plenty of room for your RV, outdoor furniture, and vehicles.",
      },
      {
        q: "What hookups are available at each site?",
        a: "Every site includes full hookups: water connection, sewer connection, and electric service with 20, 30, and 50 amp options. All connections are conveniently located for easy setup.",
      },
      {
        q: "Is WiFi available?",
        a: "Yes, complimentary WiFi service is included with every site at no additional charge. The service covers the entire park.",
      },
      {
        q: "Are the sites pull-through or back-in?",
        a: "We offer both back-in and pull-through recreational vehicle parking sites with gravel parking areas for easy access. Our team is available to assist with parking if needed.",
      },
      {
        q: "Is there onsite trash service?",
        a: "Yes, onsite trash service is included in your rate. Dumpsters are conveniently located throughout the park for easy disposal.",
      },
    ],
  },
  {
    category: "Location & Lake Access",
    items: [
      {
        q: "How close is the park to Lake Texoma?",
        a: "Texoma Lakeside RV Park is located just 1 mile from Burns Run West boat ramps, one of the most popular lake access points on Lake Texoma. You can be on the water in minutes.",
      },
      {
        q: "What is the address of Texoma Lakeside RV Park?",
        a: "We are located at 81 Willafa Woods Rd, Cartwright, OK 74731. The park is less than 7 miles from Highway US-75, making it easy to find and access.",
      },
      {
        q: "What is nearby?",
        a: "The park is ideally situated with Burns Run West boat ramps just 1 mile away, Highway US-75 less than 7 miles away, shopping outlets within 20 minutes, and Choctaw Casino less than 15 miles away.",
      },
      {
        q: "Is the park good for fishing?",
        a: "Absolutely! Lake Texoma is renowned for world-class striped bass (striper) and largemouth bass fishing. With Burns Run West boat ramps just a mile away, you'll have quick access to some of the best fishing spots on the lake.",
      },
    ],
  },
  {
    category: "Stays & Policies",
    items: [
      {
        q: "Do you offer long-term stays?",
        a: "Yes! We specialize in long-term monthly leases and are ideal for full-time RV living near Lake Texoma. We also accommodate weekly and daily stays based on availability.",
      },
      {
        q: "Can I live at the park full-time?",
        a: "Yes, many of our residents are full-time RVers who have made Texoma Lakeside their permanent home. Our monthly lease structure is designed specifically for long-term, comfortable living.",
      },
      {
        q: "How do I reserve a site?",
        a: "The easiest way to reserve a site is to call or text us at (972) 322-1989, or email TexomaLakesideRVPark@gmail.com. You can also fill out the contact form on our website and we'll get back to you promptly.",
      },
      {
        q: "Are spots currently available?",
        a: "We have limited spots remaining. Availability changes frequently, so we recommend calling (972) 322-1989 to check current availability and secure your site.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h1 className="font-[var(--font-display)] font-black text-white text-4xl md:text-5xl mb-4">
            Frequently Asked <span className="text-[var(--color-amber)]">Questions</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about leasing an RV site at Texoma Lakeside RV Park in Cartwright, Oklahoma.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container max-w-4xl">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[var(--color-amber)] rounded-full" />
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((faq, i) => {
                  const key = `${category.category}-${i}`;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-lg border border-black/5 overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--color-cream)]/50 transition-colors"
                      >
                        <span className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] pr-4">
                          {faq.q}
                        </span>
                        <ChevronRight
                          size={18}
                          className={`text-[var(--color-amber)] shrink-0 transition-transform duration-200 ${
                            openItems[key] ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {openItems[key] && (
                        <div className="px-5 pb-5 text-[var(--color-navy)]/70 leading-relaxed border-t border-black/5 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h2 className="font-[var(--font-display)] font-black text-white text-3xl mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            We're happy to help. Give us a call or send us a message anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9723221989"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg hover:bg-[var(--color-amber-light)] transition-all"
            >
              Call (972) 322-1989
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-[var(--font-display)] font-bold rounded-lg hover:border-white/60 transition-all"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
