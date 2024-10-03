import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Principal from "./Principal";

const Mobile = () => {
  return (
    <Tabs defaultValue="inicio" className="w-full pb-5 font-mulish">
      <TabsContent value="inicio"><Principal /></TabsContent>
      <TabsContent value="buscar">Change your password here.</TabsContent>
      <TabsContent value="tu librería">Your library is empty.</TabsContent>
      <TabsContent value="premium">Upgrade to premium.</TabsContent>
      <div className="flex justify-center">
      <TabsList className="gap-5 h-10 font-mulish fixed bottom-0 mb-5">
        <TabsTrigger value="inicio">Inicio</TabsTrigger>
        <TabsTrigger value="buscar">Buscar</TabsTrigger>
        <TabsTrigger value="tu librería">Tu Librería</TabsTrigger>
        <TabsTrigger value="premium">Premium</TabsTrigger>
      </TabsList>
      </div>
    </Tabs>
  );
};

export default Mobile;
