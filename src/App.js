import './App.css';
import Header from './ComponentsContainer/Header/Header';
import Form from './ComponentsContainer/Content/Form';
import Title from './ComponentsContainer/DetailContent/Title';
import Footer from './ComponentsContainer/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title/>
      <Form />
      <Footer/>
      
    </div>
  );
}

export default App; 
