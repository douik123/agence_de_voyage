import React  from 'react';
import {Link} from 'react-router-dom'
function App(props) {
console.log(props) 
  return(
<div className='card'>
<div className='imagepays'>{props.data.image}</div>
<Link to={`/destination/${props.data.link}`}><div className='namepays'><h2>{props.data.name}</h2></div></Link>
</div> 
    
  );
}

export default App;