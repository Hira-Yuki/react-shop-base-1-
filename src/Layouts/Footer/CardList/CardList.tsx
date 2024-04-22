import CardItem from './CardItem'
import CONSTANTS from '../../../constants/constants'

const cardsList = CONSTANTS.CARDS

const CardList = () => {

  return (
    <ul className="flex">
      {cardsList.map((card, index) =>
        <CardItem key={card} itemName={card} />
      )}
    </ul>
  )
}

export default CardList