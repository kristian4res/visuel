import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticleBackdrop from './components/ParticleBackdrop/ParticleBackdrop';

import './App.css';

function App() {
  return (
    <main className='app'>
      {/* <ParticleBackdrop /> */}
      <Logo />
      <Navigation />
      {/* <Header /> */}
      {/* <FaceRecognition /> */}
      <section className='home'>
        <Rank />
        <ImageLinkForm />
      </section>
    </main>
  );
}

export default App;
