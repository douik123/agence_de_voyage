import plane from './../plane.png'
import {Link} from 'react-router-dom'
function Bas() {
    
  return (
    <div className="Bas">

<div class="contenant">
<img src={plane} alt="plane" className='plane' /> 
  <div class="button"><Link to="/destination"><button>View Tours</button></Link></div>
</div>
    </div>
  );
}

export default Bas;
