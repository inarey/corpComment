import FeedbackForm from "../feedback/FeedbackForm"
import Logo from "../Logo"
import PageHeading from "../PageHeading"
import Pattern from "../Pattern"

const Header = () => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  )
}

export default Header
