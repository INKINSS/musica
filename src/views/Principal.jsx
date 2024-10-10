import BodyPrincipal from "@/components/BodyPrincipal";
import CardHits from "@/components/CardHits";
import HeaderHome from "@/components/HeaderHome";

const Principal = () => {
  return (
    <main className="px-7">
      <HeaderHome />
      <CardHits />
      <BodyPrincipal />
    </main>
  );
};

export default Principal;
