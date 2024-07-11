import Icons from "./Icons";
function Navbar() {
  return (
    <div className="absolute flex flex-col items-center justify-center w-20 h-auto py-16 bg-orange-500 rounded-lg shadow-md">
      <div className="mb-8 ">icon</div>
      <Icons />
    </div>
  );
}

export default Navbar;
