import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import NeuronsBackground from './components/NeuronsBackground/NeuronsBackground';
import Cards from './components/Cards/Cards';
import Presentation from './components/Presentation/Presentation';
import Subscriptions from './components/Subscriptions/Subscriptions';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Banner>
        <NeuronsBackground/>
      </Banner>
      <Cards/>
      <Presentation/>
      <Subscriptions/>
      <Footer/>
    </>
  );
}

export default App;
