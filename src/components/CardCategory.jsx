import { Card } from "./ui/card";

const CardCategory = ({ nameImage, text, href }) => {
  return (
    <div className="w-[47%] mb-3 h-40">
      <a href={href}>
        <Card
          className="w-full h-40 bg-cover relative shadow-custom hover:scale-105 transform duration-300"
          style={{ backgroundImage: `url(/src/assets/Cards/${nameImage}.webp)` }}
        >
          <h2 className="text-white font-extrabold text-2xl absolute bottom-3 left-3">
            {text}
          </h2>
        </Card>
      </a>
    </div>
  );
};

export default CardCategory;
