import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function Info() {
  return (
    <div className="allinfo">
    <div className="info">
      <div className="icons"><AiFillFacebook/></div>
      <div className="icons"><AiFillInstagram/></div>
      <div className="icons" ><AiFillGooglePlusSquare/></div>   
      <div className="icons"><AiFillLinkedin/></div>
    </div>
    <div className="contact">
    <div className="numb">
        <h4>Call us (+216) 54-912-999</h4>
    </div>
    <div>
        <h4><AiFillMail/> contact@douiktravel.com</h4>
    </div>
    </div>
    </div>
    
   
  );
}

export default Info;
