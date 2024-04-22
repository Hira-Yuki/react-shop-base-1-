import { Link } from "react-router-dom"

const LinkItem = ({ To, classNames, children }) => {

  return (
    <Link className={classNames} to={To}>
      {children}
    </Link>
  )
}

export default LinkItem