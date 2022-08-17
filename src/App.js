import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Prints from './components/Prints'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import {BsCart2} from 'react-icons/bs'
import { StickyContainer, Sticky } from 'react-sticky'

function App() {
  const [prints, setPrints] = useState([]);
  const [cart, setCart] = useState(false);

  for(let i = 0; i < prints.length; i++){
    localStorage.setItem(`print${i}`, JSON.stringify(prints[i].price));
    console.log(localStorage.key(`print${i}`))
  }

  useEffect(() => {
    const getCart = async () => {
      const cartFromServer = await fetchCart()
      setPrints(cartFromServer)
    }

    getCart()
  }, [])

  const fetchCart = async () => {
    const res = await fetch('http://localhost:5000/cart');
    const data = await res.json()

    return data
  }

  const addPrint = async(print) => {
    const res = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(print)
    })

    const data = await res.json()

    console.log(data)
    setPrints([...prints, data])
  }

  const deletePrint = async (id) => {
    const res = await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE'
    })

    res.status === 200 ? setPrints(prints.filter((print) => print.id !== id)) : alert('error deleting print')
  }

  const showCart = (e) => {
    console.log(cart)
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
