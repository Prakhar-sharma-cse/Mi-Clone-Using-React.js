import PreNavbaar from './components/PreNavbar.js'
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from './components/Slider.js';
import data from './data/data.json';
import Offers from './components/Offers.js'
import Heading from './components/Heading.js';
import StarProducts from './components/StarProducts.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReview from './components/ProductReview.js'
import VideoSection from './components/VideoSection.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavbarOptions from './components/NavbarOptions.js'

function App() {
  return (
    <Router>
      <PreNavbaar />
      <Navbar />
      <NavbarOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitness={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>

        <Route exact path="/smartDevices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
        </Route>

        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
        </Route>

        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}>
        </Route>

        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>

      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReview productReview={data.productReviews} />
      <Heading text="VIDEOS" />
      <VideoSection Video={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner />
      <Footer />

    </Router>

  );
}

export default App;
