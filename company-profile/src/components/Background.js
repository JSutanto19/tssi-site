import "/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Background.css";
import molding from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Molding.JPG';
import design from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Design.JPG';
import staff from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Staff.JPG' ;

const Background = ({ heroCount }) => {
  let backgroundImage;

  if (heroCount === 0) {
    backgroundImage = <img src={molding} className="background fade-in" alt="Molding" />;
  } else if (heroCount === 1) {
    backgroundImage = <img src={design} className="background fade-in" alt="Design" />;
  } else if (heroCount === 2) {
    backgroundImage = <img src={staff} className="background fade-in" alt="Staff" />;
  }

  return (
    <div>
      {backgroundImage}
    </div>
  );
};

export default Background;
