import PricingSwitch from './components/pricingSwitch/PricingSwitch';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <h1>Our Pricing</h1>
      </header>
      <main>
        <PricingSwitch />
      </main>
    </>
  );
};

export default App;
