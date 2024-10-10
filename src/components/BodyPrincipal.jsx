import CardCategory from "./CardCategory";

const BodyPrincipal = () => {
  return (
    <main className="mt-4 flex flex-wrap justify-between">
      <CardCategory
        href={"https://youtube.com"}
        nameImage={"card-rock"}
        text={"Rock"}
      />
      <CardCategory
        href={"https://youtube.com"}
        nameImage={"card-indie"}
        text={"Indie"}
      />
      <CardCategory
        href={"https://youtube.com"}
        nameImage={"card-electronic"}
        text={"Electronic"}
      />
    </main>
  );
};

export default BodyPrincipal;
