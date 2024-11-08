import "../styles/Background.css";
import molding from '../img/Molding_comp.jpg';
import design from '../img/Design_comp.jpg';

const Background = ({ heroCount }) => {
  let backgroundImage;

  if (heroCount === 0) {
    backgroundImage = <img src={molding} className="background fade-in" alt="Molding" />;
  } else if (heroCount === 1) {
    backgroundImage = <img src={design} className="background fade-in" alt="Design" />;
  } 
  

  return (
    <div>
      {backgroundImage}
    </div>
  );
};

export default Background;
