import Layout from "../components/Layout"
import Cards from "../components/Cards"
import Blog from "../components/Blog"
const index = () => {
  return (
    <Layout>
      <div className="globalContainer">
        <Cards />
        <Blog />
      </div>
    </Layout>
  )
}

export default index