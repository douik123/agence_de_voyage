import { useParams } from "react-router-dom";
function Destination({dest}) {
  const {link}=useParams()
    return (
      <div>
        { dest.filter((val)=>
          val.name===link
        )
        .map(dests=>(
          <div className="titre">
      <h1>{dests.name}</h1>
      <div className="imagepayss">
        {dests.image}
      </div>
      <div className="descriptionpays">
      {dests.description}
        </div>
      </div>
        ))
      }
      </div>
    );
  }
  
  export default Destination;
  