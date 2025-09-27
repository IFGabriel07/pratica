import Header from "@/app/_componentes/header";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {

  return (
    <div>
      <Header />

      <div className="p-5">
        <p className="text-x1 font-bold">Olá,Meu Rato</p>
        <p className="text-sm">Quarta Feira, Dia 24 de dezembro</p>
      </div>

      <div className="flex flex-row item-center gap-4 px-5">
        <Input placeholder=" Buscar Serviços" />
        <Button size={"icon"}>
          <SearchIcon />

        </Button>
      </div>

    </div>
  );
}
