import Cards from "../components/Cards"
import Questinnaire from "../components/Questionnaire"
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Slider from "../components/Slider"
import PageDivider from "../components/PageDivider"
import Contacts from "../components/Contacts"

const index = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* <div className="globalContainer"> */}
        <PageDivider>
          Services
        </PageDivider>
        <Cards />
        <PageDivider>
          Contact me
        </PageDivider>
        <Contacts/>
        {/* <Questinnaire /> */}
        <Blogs />
      {/* </div> */}
    </>
  )
}

export default index