import './App.css'
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  const year=[2024,2025,2026,2027];
  const c={symbol:"@copy" ,name:"KIET" ,location:"Ghaziabad"}
  return (
    <>
      <Header title="My First React App" />
      <Header title="Welcome to React" />
      <Footer year={year} sym={c} />
    </>
  )
}

export default App
