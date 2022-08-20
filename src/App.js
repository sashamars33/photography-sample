import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Prints from './components/Prints'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useState } from 'react'
import {BsCart2} from 'react-icons/bs'


function App() {
  const [prints, setPrints] = useState([]);
  const [cart, setCart] = useState(false);


  const getCart = () => {
    const length = localStorage.length
    let printArr = [];
    for(let i = 0; i < length; i++){
      let print = JSON.parse(localStorage.getItem(`print${i}`))
      printArr.push(print)
    }
    setPrints(printArr)
  }

  const addPrint = (print) => {
    const length = localStorage.length
    localStorage.setItem(`print${length}`, JSON.stringify({...print, id: length}))
    const localPrint = JSON.parse(localStorage.getItem(`print${length}`))
    setPrints([...prints, localPrint])
  }


  const deletePrint = (id) => {
    localStorage.removeItem(`print${id}`)

    setPrints(prints.filter((print) => print.id !== id))
  }


  const showCart = (e) => {
    console.log(cart)
    getCart();
    setCart(current => !current)
  }


  return (
    <div className="App">
       <Cart cart={cart} onDelete={deletePrint} prints={prints} showCart={showCart}/>
       <BsCart2 onClick={showCart} className={!cart ? "cartTab" : "hidden"}/>
      <Header />
      <Main />
      <About />
      <Gallery />
      <Contact />
      <Prints onAdd={addPrint} />
      <Footer />
    </div>
  );
}

export default App;
