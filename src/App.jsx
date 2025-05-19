import { useState } from 'react';
import PricingSwitch from './components/pricingSwitch/PricingSwitch';
import { GlobalStyles } from './styles/GlobalStyles';
import Cards from './components/cards/Cards';
import Title from './components/title/Title';

const App = () => {
  const [anually, setAnually] = useState(true);

  return (
    <>
      <GlobalStyles />

      <Title />

      <main>
        <PricingSwitch setAnually={setAnually} anually={anually} />
        <Cards anually={anually} />
      </main>
    </>
  );
};

export default App;
