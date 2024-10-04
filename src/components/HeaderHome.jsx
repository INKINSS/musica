import ImgProfile from "./common/ImgProfile";

const HeaderHome = () => {
  return (
    <header className="flex items-center gap-3 w-full justify-start p-5">
      <ImgProfile url={"buenosdias"} content={"ik"} />
      <h2 className="font-mulish font-bold text-2xl">samito</h2>
    </header>
  );
};

export default HeaderHome;
