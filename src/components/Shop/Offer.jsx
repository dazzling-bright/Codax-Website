const offers = [
  {
    text: "Get access to placements with top firms and get mentored by world-class experts",
  },
  {
    text: "Gain in-demand tech skills and the mentorship of industry giants",
  },
  {
    text: "Learn online at your own pace",
  },
];

const BusinessOffers = () => {
  return (
    <section className="text-center mb-12">
      <h2 className="my-8 text-custom-royal-blue text-3xl font-bold">
        What We Offer
      </h2>

      <article className="p-6 flex flex-wrap gap-8 justify-center">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-slate-100 px-8 py-12 flex items-center justify-center flex-1 rounded-lg shadow-md"
          >
            <p className="text-black text-sm font-semibold">{offer.text}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default BusinessOffers;
