import Cards from "../components/Cards"
import Questinnaire from "../components/Questionnaire"
import Header from "../components/Header"
import Blogs from "../components/Blogs"

const index = () => {
  return (
    <>
      <Header />
      <div className="globalContainer">
        <Cards />
        <Questinnaire />
        <Blogs />
      </div>
    </>
  )
}

export default index