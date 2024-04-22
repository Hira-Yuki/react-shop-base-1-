const CardItem = ({ itemName }) => {
  return (
    <li>
      <img src={`/src/assets/img/svg/${itemName}.svg`} />
    </li>
  )
}

export default CardItem