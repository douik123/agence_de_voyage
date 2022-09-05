import './App.css';
import Info from './comp/Info.js'
import Navbar from './comp/Navbar.js'
import Bas from './comp/Bas.js'
import Contact from './comp/Contact.js'
import Destination from './comp/Destination.js'
import Turquie from './turquie.png'
import Egypte from './egypte.png'
import Espagne from './espagne.png'
import Maroc from './maroc.png'
import { useState } from 'react';
import Pays from './comp/Pays.js'

import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom'
function App() {
  const[dest,setDest]= useState([
    {image : <img src={Turquie} alt="Turquie" className='cardimage' /> , 
    name: "Turquie",
    link:"Turquie",
    description:"La Turquie, en forme longue la république de Turquie, en turc : Türkiye et Türkiye Cumhuriyeti prononciation, est un pays transcontinental situé aux confins de l'Asie et de l'Europe. Elle a des frontières avec la Grèce et la Bulgarie à l'ouest-nord-ouest, la Géorgie et l'Arménie à l'est-nord-est, l'Azerbaïdjan (Nakhitchevan) et l'Iran à l'est, l'Irak (Gouvernement régional du Kurdistan) et la Syrie à l'est-sud-est. Il s'agit d'une république à régime présidentiel dont la langue officielle est le turc. Sa capitale officielle est Ankara depuis le 13 octobre 1923. La Turquie est bordée au nord par la mer Noire, à l'ouest par la mer Égée et au sud-ouest par la partie orientale de la mer Méditerranée : le bassin Levantin. La Thrace orientale (Europe) et l'Anatolie (Asie) sont séparées par la mer de Marmara.",
    id:1
    },
    {image : <img src={Egypte} alt="Egypte" className='cardimage' /> , 
    name: "Egypte", 
    link:"Egypte",
    description:"L'Égypte Écouter (en arabe : مصر / miṣr ; en arabe égyptien : مصر / maṣr masˤɾ), en forme longue la république arabe d'Égypte (en arabe : جمهورية مصر العربية?) / jumhuriyat misr al arabiya3, est un pays transcontinental se trouvant en Afrique du Nord-Est et, pour la péninsule du Sinaï, en Asie de l'Ouest. Située sur la côte sud de la Méditerranée orientale, le bassin Levantin, le pays a des frontières terrestres avec la Libye à l'ouest, le Soudan au sud, la Mer rouge à l'est, et Israël et la bande de Gaza de la Palestine au nord-est. La capitale, et la ville la plus peuplée du pays, est Le Caire. Avec plus de 102 millions d'habitants en 2020, l'Égypte est le troisième pays le plus peuplé d'Afrique derrière le Nigeria et l'Éthiopie. La surface du pays est largement recouverte par le Sahara et la population est fortement concentrée aux côtes du Nil.",
    id:2
    },
    {image : <img src={Espagne} alt="Espagne" className='cardimage' /> , 
    name: "Espagne",
    link:"Espagne",
    description:"L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un État souverain transcontinental d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. Le pays a une superficie de 504 030 km2 et une population de 47 millions d'habitants.L'Espagne est bordée au nord-est par les Pyrénées, qui constituent une frontière naturelle avec la France et l'Andorre ; à l'est et au sud-est par la mer Méditerranée, au sud-sud-ouest par le territoire britannique de Gibraltar et le détroit du même nom, ce dernier séparant le continent européen de l'Afrique. Le Portugal est limitrophe de l'Espagne à l'ouest tandis que l'océan Atlantique borde le pays à l'ouest-nord-ouest ; enfin le golfe de Gascogne baigne le littoral nord. Le territoire espagnol inclut également les îles Baléares en Méditerranée, les îles Canaries dans l'océan Atlantique au large de la côte africaine, et deux villes autonomes en Afrique du Nord, Ceuta et Melilla, limitrophes du Maroc.",
    id:3
    },
    {image : <img src={Maroc} alt="Maroc" className='cardimage' /> , 
    name: "Maroc",
    link:"Maroc",
    description:"Le Maroc (en arabe : المغرب, al-Maġrib ; en amazighe : ⵍⵎⵖⵔⵉⴱ21, L-Meġrib), ou depuis 1956, en forme longue le royaume du Maroc, autrefois appelé Empire chérifien, est un État unitaire régionalisé situé en Afrique du Nord. Son régime politique est une Monarchie constitutionnelle semi-parlementaire unitaire et régionalisée. Sa capitale administrative et politique est Rabat et sa plus grande ville, ainsi que sa capitale économique, est Casablanca.",
    id:4
    },
    
  ]);
  return (
    <Router>
    <div className="App">
      <Info/>
      <Navbar/>
      <Switch>
      <Route exact path="/">
      <Bas/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/destination">
       <Destination dest={dest} />
      </Route>
      <Route path="/destination/:link">
       <Pays dest={dest}/>
      </Route>
      
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
