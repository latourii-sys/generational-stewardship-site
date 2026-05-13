"use client";

import React, { useEffect, useState } from "react";

const bibleVerses = [
  {
    reference: "Proverbs 13:22",
    verse: "A good man leaves an inheritance for their children's children.",
    focus: "Legacy",
  },
  {
    reference: "Matthew 6:21",
    verse: "For where your treasure is, there your heart will be also.",
    focus: "Stewardship",
  },
  {
    reference: "Luke 16:10",
    verse: "Whoever can be trusted with very little can also be trusted with much.",
    focus: "Faithfulness",
  },
  {
    reference: "1 Timothy 6:17-19",
    verse: "Put their hope in God, who richly provides us with everything for our enjoyment.",
    focus: "Wisdom",
  },
];

export default function GenerationalStewardshipWebsite() {
  const [activeVerse, setActiveVerse] = useState(0);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVerse((current) => (current + 1) % bibleVerses.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Biblical Stewardship",
      text: "Faith-based principles that help families manage resources with wisdom, discipline, and purpose.",
      icon: "✦",
    },
    {
      title: "Financial Market Education",
      text: "Practical education across stocks, options, futures, crypto, and long-term wealth-building concepts.",
      icon: "↗",
    },
    {
      title: "Family Legacy Planning",
      text: "Guidance for transferring values, financial wisdom, and stewardship habits to the next generation.",
      icon: "◎",
    },
  ];

  const paymentProducts = [
    {
      title: "Monthly Membership",
      description: "Access morning alert group for daily alerts, Live trading & chart reviews from 9am - 10:30am Est Monday - Friday., market education, and community resources.",
      price: "$25/mo",
      link: "https://buy.stripe.com/9AQ3ggcfDeMVeAg5kk",
      button: "Join Membership",
    },
    {
      title: "Futures 4 Week Training Course (Online)",
      description: "Unlock the potential of the Futures Market with our comprehensive training course. Designed for both beginners and seasoned traders, this course provides a thorough introduction to futures trading.",
      price: "$599",
      link: "https://buy.stripe.com/28E6oHgZL1D54qrbLR3cc01",
      button: "Enroll Now",
    },
    {
      title: "1-on-1 Coaching",
      description: "Private coaching sessions focused on mindset, markets, and stewardship.",
      price: "$1199",
      link: "https://buy.stripe.com/28EfZh24Ra9B9KL4jp3cc02",
      button: "Book Coaching",
    },
  ];

  const courses = [
  {
    title: "Foundations of Biblical Wealth",
    description: "Build a faith-centered foundation for money, stewardship, discipline, and generational legacy.",
    level: "Beginner Friendly",
    duration: "4 Modules",
    lessons: [
      "Biblical view of stewardship and ownership",
      "Budgeting, giving, saving, and debt discipline",
      "Setting family financial goals with purpose",
      "Creating a legacy statement and household plan",
    ],
    outcome: "Walk away with a written faith-based financial vision and a simple stewardship plan for your household.",
  },
  {
    title: "Stock Market Basics",
    description: "Learn how the stock market works and how to read charts with confidence before risking real capital.",
    level: "Beginner to Intermediate",
    duration: "5 Modules",
    lessons: [
      "How stocks, indexes, sectors, and ETFs work",
      "Candles, support, resistance, and trend structure",
      "Risk-to-reward, position sizing, and trade planning",
      "Building a watchlist and daily market routine",
    ],
    outcome: "Understand basic market structure and create a repeatable process for reviewing charts and planning trades.",
  },
  {
    title: "Options Risk Management",
    description: "Focus on capital protection, trade discipline, and structured decision-making for options trading.",
    level: "Intermediate",
    duration: "4 Modules",
    lessons: [
      "Calls, puts, premiums, expiration, and Greeks basics",
      "Position sizing and maximum loss planning",
      "Entry, stop loss, profit target, and exit rules",
      "Trading psychology and avoiding emotional decisions",
    ],
    outcome: "Create an options trading checklist that prioritizes risk control before profit potential.",
  },
  {
    title: "Futures 4 Week Training Course",
    description: "A focused online training program for futures market structure, execution, risk, and consistency.",
    level: "Advanced Training",
    duration: "4 Weeks",
    lessons: [
      "Week 1: Futures basics, contracts, margin, and risk",
      "Week 2: Market structure, liquidity, and key levels",
      "Week 3: Trade setups, execution, and journaling",
      "Week 4: Live chart review, psychology, and final plan",
    ],
    outcome: "Finish with a personal futures trading plan, risk rules, chart routine, and journal template.",
  },
];

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      <section className="relative min-h-screen border-b border-yellow-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-950/30 via-neutral-950 to-black" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-yellow-700/10 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 text-black font-bold">
              GS
            </div>
            <div>
              <p className="font-serif text-xl font-bold">Generational</p>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">Stewardship</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#mission" className="hover:text-yellow-400">Mission</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#legacy" className="hover:text-yellow-400">Legacy</a>
            <a href="#courses" className="hover:text-yellow-400">Courses</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
            <a
              href="/login"
              className="rounded-xl border border-yellow-500/30 bg-yellow-500 px-5 py-2 font-bold text-black transition hover:bg-yellow-300"
            >
              Member Login
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">
              Proverbs 13:22 Inspired Legacy Education
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Build wealth with wisdom. Leave a legacy with purpose.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Generational Stewardship empowers individuals and families to live out their faith while learning how to build, protect, and transfer legacy for generations to come.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-yellow-500 px-8 py-4 text-center font-bold text-black shadow-xl shadow-yellow-900/20 hover:bg-yellow-300">
                Start Building Your Legacy
              </a>
              <a href="#mission" className="rounded-2xl border border-neutral-600 bg-black/30 px-8 py-4 text-center font-bold text-white hover:bg-neutral-900">
                Learn More
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-neutral-300 sm:grid-cols-3">
              <p>✓ Faith-centered</p>
              <p>✓ Family-focused</p>
              <p>✓ Education-first</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-yellow-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-black p-4 shadow-2xl shadow-yellow-950/30">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Generational Stewardship logo"
                  onError={() => setLogoError(true)}
                  className="w-full rounded-[1.5rem] border border-yellow-500/10 object-contain bg-black p-2"
                />
              ) : (
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-[1.5rem] border border-yellow-500/20 bg-black p-8 text-center">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 text-4xl font-bold text-black shadow-2xl shadow-yellow-900/40">
                    GS
                  </div>
                  <p className="font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">Generational</p>
                  <p className="mt-2 font-serif text-4xl font-bold tracking-wide text-yellow-400 md:text-5xl">Stewardship</p>
                  <p className="mt-5 max-w-md text-sm uppercase tracking-[0.35em] text-neutral-400">Leaving a Legacy for Tomorrow</p>
                  <p className="mt-4 text-yellow-400">Proverbs 13:22</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="border-b border-neutral-900 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">Our Mission</p>
          <h2 className="mb-7 font-serif text-4xl font-bold md:text-6xl">Faith. Family. Finance. Legacy.</h2>
          <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
            We help families align financial education with biblical wisdom so they can steward resources well, make informed decisions, and leave more than money behind.
          </p>
        </div>
      </section>

      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">What We Offer</p>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">Biblical wisdom paired with modern financial education.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black p-8 shadow-2xl transition hover:-translate-y-2">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/15 text-3xl text-yellow-400">
                  {item.icon}
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-neutral-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="legacy" className="border-y border-yellow-500/10 bg-gradient-to-br from-yellow-950/30 via-black to-neutral-950 px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">Bible Verse Carousel</p>
            <h2 className="mb-7 font-serif text-4xl font-bold md:text-6xl">Scripture-centered legacy building.</h2>
            <p className="text-lg leading-relaxed text-neutral-300">
              Let the foundation of your financial education be rooted in faith, wisdom, discipline, and stewardship for the next generation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-500/30 bg-black/70 p-8 text-center shadow-2xl shadow-yellow-950/20">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/15 text-4xl text-yellow-400">✝</div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
              {bibleVerses[activeVerse].focus}
            </p>
            <p className="mb-5 font-serif text-3xl leading-tight text-yellow-100 md:text-4xl">
              &quot;{bibleVerses[activeVerse].verse}&quot;
            </p>
            <p className="text-lg font-bold text-white">
              {bibleVerses[activeVerse].reference}
            </p>

            <div className="mt-8 flex justify-center gap-3">
              {bibleVerses.map((verse, index) => (
                <button
                  key={verse.reference}
                  onClick={() => setActiveVerse(index)}
                  className={`h-3 rounded-full transition-all ${
                    activeVerse === index ? "w-10 bg-yellow-400" : "w-3 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                  aria-label={`Show ${verse.reference}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="border-y border-yellow-500/10 bg-gradient-to-b from-neutral-950 to-black px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">Course Pages</p>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">Learn. Apply. Steward well.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <div key={course.title} className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black p-8 shadow-2xl transition hover:-translate-y-2">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15 text-2xl text-yellow-400">▶</div>
                  <p className="rounded-full border border-yellow-500/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-400">{course.duration}</p>
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">{course.level}</p>
                <h3 className="font-serif text-3xl font-bold text-white">{course.title}</h3>
                <p className="mt-4 leading-relaxed text-neutral-400">{course.description}</p>

                <div className="mt-7 rounded-2xl border border-neutral-800 bg-black/50 p-5">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Course Work</p>
                  <ul className="space-y-3 text-neutral-300">
                    {course.lessons.map((lesson) => (
                      <li key={lesson} className="flex gap-3">
                        <span className="mt-1 text-yellow-400">✓</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl bg-yellow-500/10 p-5">
                  <p className="mb-2 text-sm font-bold text-yellow-400">Student Outcome</p>
                  <p className="text-neutral-300">{course.outcome}</p>
                </div>

                <a href="#payments" className="mt-7 inline-block rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-bold text-black hover:bg-yellow-300">
                  View Enrollment Options
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="payments" className="border-y border-yellow-500/10 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/30 bg-gradient-to-b from-yellow-950/30 to-black p-7">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">Stripe Payments</p>
          <h2 className="font-serif text-3xl font-bold">Choose your next step.</h2>
          <p className="mt-5 leading-relaxed text-neutral-300">
            Join the community, enroll in training, or book private coaching through secure Stripe checkout.
          </p>

          <div className="mt-10 space-y-5">
            {paymentProducts.map((product) => (
              <div key={product.title} className="rounded-2xl border border-yellow-500/10 bg-black/40 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">{product.price}</p>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-white">{product.title}</h3>
                    <p className="mt-2 max-w-xl text-neutral-400">{product.description}</p>
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-2xl bg-yellow-500 px-8 py-4 text-center font-bold text-black hover:bg-yellow-300"
                  >
                    {product.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black p-10 text-center shadow-2xl md:p-14">
          <h2 className="mb-5 font-serif text-4xl font-bold md:text-6xl">Start Building a Legacy That Lasts</h2>
          <p className="mb-9 text-lg text-neutral-300">
            Partner with a mission-driven brand focused on biblical stewardship, financial education, and long-term family impact.
          </p>
          <form action="https://formspree.io/f/xzdowjan" method="POST" className="mx-auto mb-8 grid max-w-2xl gap-4 text-left">
            <input name="name" placeholder="Your name" className="rounded-2xl border border-neutral-700 bg-black px-5 py-4 text-white outline-none focus:border-yellow-400" />
            <input name="email" type="email" placeholder="Your email" className="rounded-2xl border border-neutral-700 bg-black px-5 py-4 text-white outline-none focus:border-yellow-400" />
            <select name="interest" className="rounded-2xl border border-neutral-700 bg-black px-5 py-4 text-white outline-none focus:border-yellow-400">
              <option>I'm interested in...</option>
              <option>Courses</option>
              <option>Membership</option>
              <option>Coaching</option>
              <option>Market education</option>
            </select>
            <textarea name="message" placeholder="How can we help?" rows={4} className="rounded-2xl border border-neutral-700 bg-black px-5 py-4 text-white outline-none focus:border-yellow-400" />
            <button type="submit" className="rounded-2xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-300">
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:latourii@gmail.com" className="rounded-2xl border border-neutral-600 bg-black/30 px-8 py-4 font-bold text-white hover:bg-neutral-900">
              Email Directly
            </a>
            
          </div>
        </div>      </section>

      <footer className="border-t border-neutral-900 px-6 py-10 text-center text-sm text-neutral-500">
        © {2020} Generational Stewardship. Faith • Family • Finance • Legacy.
      </footer>
    </main>
  );
}

