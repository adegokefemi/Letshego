import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./container/Header/Header";
import Section from './components/Section';
import MainSection from "./components/mainSection";
import FinancialSolutions from './components/financialSolutions';
import Services from './components/Services';
import About from './components/About';
import Eligible from './container/Eligible';



function App() {
  return (
    <div className='container'>
      <Header />
      <Section/>
      <MainSection/>
      <FinancialSolutions/>
      <Services/>
      <About />
      <Eligible/>
    </div>
  );
}

export default App;
