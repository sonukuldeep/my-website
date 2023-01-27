import Cards from "../components/Cards"
import Questinnaire from "../components/Questionnaire"
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Slider from "../components/Slider"

const index = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="globalContainer">
        <Cards />
        <Questinnaire />
        <Blogs />
      </div>
    </>
  )
}

export default index