
import './App.css';
import Sidebar from './components/Sidebar';
import Speed from './components/Speed';
// import Category from './components/Category';
import Logo from './components/Logo';
import Card from './components/Card';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Sidebar />
      <Speed />
      {/* <Category /> */}
      <Card />
      <Logo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
