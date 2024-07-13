const stats = [
  { number: "12", label: "Tutors" },
  { number: "25", label: "Courses" },
  { number: "2,000+", label: "Placed" },
];

const StatItem = ({ number, label }) => (
  <article className="flex flex-col gap-4 items-center" aria-label={label}>
    <span className="text-xl text-orange-300 font-bold" aria-hidden="true">
      {number}
    </span>
    {/** This span element is only for screen readers */}
    <span className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) whitespace-nowrap border-0">
      {label} count:
    </span>
    <span>{label}</span>
  </article>
);

const Achievement = () => (
  <section
    className="flex flex-col md:flex-row items-center gap-8 max-w-fit mt-24 rounded-2xl mx-auto justify-center py-8 bg-secondaryColor text-white"
    aria-labelledby="achievement-title"
  >
    {/** This H2 element is only for screen readers */}
    <h2
      id="achievement-title"
      className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) whitespace-nowrap border-0"
    >
      Our Achievements
    </h2>
    <p className="md:w-1/3 px-6" aria-describedby="achievement-title">
      We hold an unbeatable record of excellence as industry shapers
    </p>
    <div className="flex flex-wrap gap-8">
      {stats.map((stat, index) => (
        <StatItem key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  </section>
);

export default Achievement;
