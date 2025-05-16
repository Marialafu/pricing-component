import { useState } from 'react';
import PricingSwitch from './components/pricingSwitch/PricingSwitch';
import { GlobalStyles } from './styles/GlobalStyles';
import Cards from './components/cards/Cards';

const App = () => {

  const [anually, setAnually] = useState(true);

  return (
    <>
      <GlobalStyles />

      {/* <Title />  NO ME FUNCIONA*/}
      <header>
        <h1>Our Pricing</h1>
      </header>

      <main>
        <PricingSwitch setAnually={setAnually} anually={anually} />
        <Cards anually={anually} />
      </main>

    </>
  );
};

export default App;
