import DestCard from './Destcard.js'
import { useRef, useEffect } from 'react';
function Destination({dest}) {
  useEffect(() => {
    return () => {
      console.log("Tu as quitté la page destination")
    }
  }, [])
  return (
    <div className="destination">
      {
        dest.map(dests=>(
          <div>
           <DestCard data={dests}/>
      </div>
      
        ))}
    </div>
  );
}

export default Destination;
