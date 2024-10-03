import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mobile = () => {
  return (
    <Tabs defaultValue="account" className="w-full fixed bottom-0 text-center pb-5 font-mulish">
      <TabsContent value="inicio">Make changes to your account here.</TabsContent>
      <TabsContent value="buscar">Change your password here.</TabsContent>
      <TabsContent value="tu librería">Your library is empty.</TabsContent>
      <TabsContent value="premium">Upgrade to premium.</TabsContent>
      <TabsList className="gap-5 h-10 font-mulish">
        <TabsTrigger value="inicio">Inicio</TabsTrigger>
        <TabsTrigger value="buscar">Buscar</TabsTrigger>
        <TabsTrigger value="tu librería">Tu Librería</TabsTrigger>
        <TabsTrigger value="premium">Premium</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Mobile;
