//Génération de la note sur 5 étoiles

import star from "../../assets/star.svg";
import emptystar from "../../assets/emptystar.svg";

function Rating (props) {
   if(props.display)
   {
      return (
         <ul>
            <img src={star} alt="etoile" />
         </ul>
       )
   }
   else
   {
      return (
         <ul>
            <img src={emptystar} alt="etoile" />
         </ul>
       )
   }
}

export default Rating;