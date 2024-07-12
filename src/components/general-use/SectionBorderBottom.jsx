// a decorative border bottom design

function SectionBorderBottom({ text }) {
  return (
    <div className="text-orange-400  p-0 mb-2 flex items-center">
      <div className="w-[50px] h-[7px] bg-orange-400"></div>
      <div className="w-[50px] h-[2px] bg-orange-400"></div>
      <p className="uppercase ml-4">{text}</p>
    </div>
  );
}

export default SectionBorderBottom;
