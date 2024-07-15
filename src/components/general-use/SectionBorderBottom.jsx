const SectionBorderBottom = ({ text }) => {
  return (
    <div className="text-orange-400 p-0 mt-10 mb-6">
      <div className="inline-block w-[50px] h-[7px] bg-orange-400 align-middle"></div>
      <div className="inline-block w-[50px] h-[1px] bg-orange-400 align-middle"></div>
      <p className="inline-block uppercase ml-4 align-middle">{text}</p>
    </div>
  );
};

export default SectionBorderBottom;
