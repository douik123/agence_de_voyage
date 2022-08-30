import { useState } from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {Link} from 'react-router-dom'
function Contact() {
  const [nom,setNom]=useState("")
  const [prenom,setPrenom]=useState("")
  const [adresse,setAdresse]=useState("")
  const [message,setMessage]=useState("")
  return (
    <div className="PageContact">
      <div className='infos'>
      <label className="labels">Nom:</label>
              <input type="text" name="T2" size="20" placeholder='Nom' className='inputsearch'onChange={(e)=>{
                setNom(e.target.value)
              }}/>
              </div>
              <div className='infos'>
     <label className="labels">Prénom:</label>
              <input type="text" name="T2" size="20" placeholder='Prénom' className='inputsearch'onChange={(e)=>{
                setPrenom(e.target.value)
              }}/>
              </div>
              <div className='infos'>
     <label className="labels">Adresse:</label>
              <input type="text" name="T2" size="20" placeholder='Adresse' className='inputsearch'onChange={(e)=>{
                setAdresse(e.target.value)
              }}/></div>
              <div className='infos'>
     <label className="labels">Message:</label>
              <input type="text" name="T2" size="20" placeholder='Message' className='inputsearch'onChange={(e)=>{
                setMessage(e.target.value)
              }}/>
              <div className='buttons'>
                
              <Link to="/"><button className='no'><ImCross/></button></Link>
                <button className="yes"><AiOutlineSend/></button>
              </div>
              </div>
    </div>
  );
}

export default Contact;
