import React from "react";

export default function GenerationalStewardshipWebsite() {
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
          <div className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#mission" className="hover:text-yellow-400">Mission</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#legacy" className="hover:text-yellow-400">Legacy</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
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
            <div className="relative rounded-[2rem] border border-yellow-500/30 bg-black p-4 shadow-2xl shadow-yellow-950/30">
              <img
                src="/logo.png"
                alt="Generational Stewardship logo"
                className="w-full rounded-[1.5rem] object-cover"
              />
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">Proverbs 13:22</p>
            <h2 className="mb-7 font-serif text-4xl font-bold md:text-6xl">A good man leaves an inheritance for their children's children.</h2>
            <p className="text-lg leading-relaxed text-neutral-300">
              True stewardship is not just about accumulation. It is about transferring wisdom, values, faith, discipline, and ownership from one generation to the next.
            </p>
          </div>
          <div className="rounded-[2rem] border border-yellow-500/30 bg-black/60 p-10 text-center shadow-2xl shadow-yellow-950/20">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/15 text-5xl text-yellow-400">☩</div>
            <p className="mb-3 font-serif text-3xl text-yellow-100">Leaving a Legacy for Tomorrow</p>
            <p className="text-neutral-400">A brand built on faith, family, education, and generational impact.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black p-10 text-center shadow-2xl md:p-14">
          <h2 className="mb-5 font-serif text-4xl font-bold md:text-6xl">Start Building a Legacy That Lasts</h2>
          <p className="mb-9 text-lg text-neutral-300">
            Partner with a mission-driven brand focused on biblical stewardship, financial education, and long-term family impact.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:info@generationalstewardship.com" className="rounded-2xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-300">
              Contact Us
            </a>
            <a href="#" className="rounded-2xl border border-neutral-600 bg-black/30 px-8 py-4 font-bold text-white hover:bg-neutral-900">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900 px-6 py-10 text-center text-sm text-neutral-500">
        © {2020} Generational Stewardship. Faith • Family • Finance • Legacy.
      </footer>
    </main>
  );
}
