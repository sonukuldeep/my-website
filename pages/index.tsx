import Cards from "../components/Cards"
import Questinnaire from "../components/Questionnaire"
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Slider from "../components/Slider"
import Contacts from "../components/Contacts"

const index = () => {
  return (
    <>
      <Header />
      <Slider />
      <Cards />
      <Contacts />
      <Blogs />

    </>
  )
}

export default index