import LinkItem from '../../../components/atom/LinkItem'

const Logo = () => {
  return (
    <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
      <LinkItem classNames="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap" To="/">
        React Shop
      </LinkItem>
    </h1>
  )
}

export default Logo