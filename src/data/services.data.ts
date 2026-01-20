import type { Service } from "../components/Services/CardServices";
import scissors from "../assets/icons/services/scissors.svg";
import hair from "../assets/icons/services/hair.svg";
import machine from "../assets/icons/services/machine.svg";
import stars from "../assets/icons/services/stars.svg";




export const service: Service[] = [
    {id: "service1",
        icon: scissors,
        title: "Savršene frizure", 
        description: "Stručne frizure prilagođene vašem obliku lica i načinu života",
        bullets: ["Operite i stilizirajte", "Preporuka proizvoda", "Ugodno pranje s masažom"]
    },
    {id: "service2", 
        icon: stars, 
        title: "Balayage i pramenovi", 
        description: "Ručno oslikana dimenzija za prirodne, savršene rezultate",
        bullets: ["Usklađivanje tonova", "Raznolikost boja", "Mnogo opcija za vas"]
    },
    {id: "service3", 
        icon: machine, 
        title: "Stiliziranje i feniranje", 
        description: "Profesionalno stiliziranje za različite prilike koje će ostvariti vaše snove",
        bullets: ["Stiliziranje događaja", "Stiliziranje teksture", "Naši najbolji profesionalci za vas"]
    },
    {id: "service4", 
        icon: hair, 
        title: "Posebne prilike", 
        description: "Frizure za vjenčanja i svečane prilike za cijelu porodicu",
        bullets: ["Savršena frizura za vaše fotografisanje", "Termalna zaštita za cjelodnevne lokne", "Nezaboravna frizura samo za vas"]
    },

];