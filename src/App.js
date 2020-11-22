import './App.css';
import HeaderV from './components/layout/HeaderV'
import FooterV from './components/layout/FooterV'
import FormV from './components/layout/FormV'


function App() {
  return (
    <>
      <div className="App">
      <HeaderV 
        title= "Sistema de servicio social"
        image= "http://www.unicaribe.mx/theme/unicaribe-2018/img/logo-20.png"
      />
      <FormV/>
      <FooterV/>
    </div>
    </>
    
  );
}

export default App;
