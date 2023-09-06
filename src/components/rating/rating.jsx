//Génération de la note sur 5 étoiles

import star from "../../assets/star.svg";
import emptystar from "../../assets/emptystar.svg";

function Rating (props) {
   if(props.display)
   {
      return (
         <li>
            <img src={star} alt="etoile" />
         </li>
       )
   }
   else
   {
      return (
         <li>
            <img src={emptystar} alt="etoile" />
         </li>
       )
   }
}

export default Rating;