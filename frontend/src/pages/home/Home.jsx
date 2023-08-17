
import Categories from '../../components/categories/Categories'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'


const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home