import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Reactplayer from './components/Reactplayer/Reactplayer';
import Reactplayer2 from './components/Player2/Reactplayer2';
import Heading from './components/PlayerHeading/Heading';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Heading/>
      <Reactplayer />
      <Reactplayer2/>
      <Join />
      <Footer />

    </div>
  );
}

export default App;
