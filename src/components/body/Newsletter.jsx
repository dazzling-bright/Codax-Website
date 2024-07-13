import Button from "../general-use/button";

export const NewsLetter = () => {
  return (
    <section className="flex flex-col text-center w-fit mx-auto gap-4 py-4 px-2 md:px-4 bg-white rounded-2xl text-custom-black ">
      <h2 className="font-bold">Join our Newsletter</h2>
      <input
        className="bg-slate-400 rounded-2xl p-4 border-4 border-inherit hover:border-slate-700 placeholder-slate-800"
        placeholder="Enter your email"
        type="email"
      />
      <Button>Subscribe</Button>
      <p>We will send you more information and updates</p>
    </section>
  );
};
