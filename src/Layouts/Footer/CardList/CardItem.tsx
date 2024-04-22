import Visa from '../../../assets/img/svg/visa.svg';
import Master from '../../../assets/img/svg/master.svg';
import AmericanExpress from '../../../assets/img/svg/americanExpress.svg';
import Paypal from '../../../assets/img/svg/paypal.svg';
import DinersClub from '../../../assets/img/svg/dinersClub.svg';
import Discover from '../../../assets/img/svg/discover.svg';

const svgIcons = {
  visa: Visa,
  master: Master,
  americanExpress: AmericanExpress,
  paypal: Paypal,
  dinersClub: DinersClub,
  discover: Discover
};

const CardItem = ({ itemName }) => {

  return (
    <li>
      <img src={svgIcons[itemName]} />
    </li>
  )
}

export default CardItem