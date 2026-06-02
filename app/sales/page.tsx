export default function SalesPage() {
  const offers = [
    {
      title: "Monthly Membership",
      price: "$25/mo",
      description:
        "Do not trade alone. We teamed up with We Talk Charts. Access the morning futures group for daily live trading, and chart reviews from 9:00 AM - 10:30 AM EST Monday through Friday, market education, and access to discord community group.",
      link: "https://buy.stripe.com/9AQ3ggcfDeMVeAg5kk",
      button: "Join Membership",
    },
    {
  title: "GS Candlestick Workbook",
  description:
    "Master candlestick patterns, trading psychology, risk management, and biblical stewardship principles with this comprehensive printable trading workbook.",
  price: "$27.99",
  link: "https://buy.stripe.com/bJeaEXaBngxZ7CDeY33cc03",
  button: "Buy Workbook",
},
    {
      title: "Futures 4 Week Training",
      price: "$599",
      description:
        "Structured futures training focused on market structure, execution, risk, and consistency.",
      link: "https://buy.stripe.com/28E6oHgZL1D54qrbLR3cc01",
      button: "Enroll Now",
    },
    {
      title: "1-on-1 Coaching",
      price: "$1199",
      description:
        "Private coaching focused on mindset, markets, risk management, and biblical stewardship.",
      link: "https://buy.stripe.com/28EfZh24Ra9B9KL4jp3cc02",
      button: "Book Coaching",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Generational Stewardship
        </p>

        <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold md:text-7xl">
          Build Wealth With Wisdom. Trade With Discipline. Leave a Legacy With Purpose.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-neutral-300">
          Faith-centered financial education for individuals and families who want to grow in stewardship, market knowledge, and generational impact.
        </p>

        <a
          href="#offers"
          className="mt-10 inline-block rounded-2xl bg-yellow-500 px-10 py-4 font-bold text-black hover:bg-yellow-300"
        >
          View Programs
        </a>
      </section>

      <section className="border-y border-yellow-500/10 bg-neutral-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            "You want to understand markets without gambling.",
            "You want biblical wisdom guiding financial decisions.",
            "You want to build something your family can inherit.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-neutral-800 bg-black p-7">
              <p className="text-3xl text-yellow-400">✓</p>
              <p className="mt-5 text-lg text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            The Solution
          </p>

          <h2 className="font-serif text-4xl font-bold md:text-6xl">
            A faith-based education system for stewardship, trading, and legacy.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-300">
            Generational Stewardship combines biblical principles, financial discipline, market education, and practical training so you can make wiser decisions with money and build a legacy that lasts.
          </p>
        </div>
      </section>

      <section id="offers" className="border-y border-yellow-500/10 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Choose Your Path
            </p>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">
              Programs & Enrollment
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-3xl border border-yellow-500/20 bg-black p-8 shadow-2xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  {offer.price}
                </p>

                <h3 className="mt-4 font-serif text-3xl font-bold">
                  {offer.title}
                </h3>

                <p className="mt-5 leading-relaxed text-neutral-400">
                  {offer.description}
                </p>

                <a
                  href={offer.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block rounded-2xl bg-yellow-500 px-6 py-4 text-center font-bold text-black hover:bg-yellow-300"
                >
                  {offer.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/20 bg-gradient-to-b from-yellow-950/30 to-black p-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Proverbs 13:22
          </p>

          <h2 className="font-serif text-4xl font-bold">
            A good man leaves an inheritance for their children’s children.
          </h2>

          <p className="mt-6 text-neutral-300">
            This is more than trading. This is stewardship, wisdom, discipline, and legacy.
          </p>
        </div>
      </section>
    </main>
  );
}