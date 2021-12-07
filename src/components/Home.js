import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import NavigationBar from './NavigationBar';
import JumbotronSection from './JumbotronSection';
import AboutUsSection from './AboutUsSection';
import QmsIsmsSection from './QmsIsmsSection';
import CardCarousel from './CardCarousel';
import FooterSection from './FooterSection';

function App() {
  return (
    <Fragment>
      <NavigationBar path="home"/>
      <JumbotronSection />
      <AboutUsSection />
      <CardCarousel />
      <QmsIsmsSection />
      <FooterSection />
    </Fragment>
  );
}

export default App;
