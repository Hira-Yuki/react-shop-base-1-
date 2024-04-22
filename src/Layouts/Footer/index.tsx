import FooterTitle from './FooterTitle/FooterTitle'
import CardItem from './CardList/CardItem'
import CardList from './CardList/CardList'
import Links from './Links/Links'
import Copyright from './Copyright/Copyright'

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <FooterTitle />
      <CardList />
      <Links />
      <Copyright />
    </footer>
  )
}

export default Footer