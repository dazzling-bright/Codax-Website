export const NewsLetter = () => {
  return (
    <section className="flex flex-col text-center w-fit mx-auto gap-4 py-4 px-2 md:px-4 bg-white rounded-2xl text-black ">
      <h2 className="font-bold">Join our Newsletter</h2>
      <input
        className="bg-[rgba(238, 238, 237, 1)] border-gray-700 rounded-2xl p-4 border-2 border-inherit hover:border-slate-700 placeholder-slate-800"
        placeholder="Enter your email"
        type="email"
      />
      <button
        className={
          "bg-gray-700 text-white border-2 px-4 py-4 font-bold border-gray-500 rounded-lg hover:opacity-90 shadow-lg transition-all duration-300 focus:outline-offset-8 focus:outline-4"
        }
      >
        Subscribe
      </button>

      <p>We will send you more information and updates</p>
    </section>
  );
};
