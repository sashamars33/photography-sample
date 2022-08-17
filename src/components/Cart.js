import Print from './Print'

const Cart = ({ prints, onDelete, cart, showCart }) => {

  const prices = prints.map((print) => print.printSize === 'S' ? 10 : print.printSize === 'M' ? 30 : print.printSize === 'L' ? 60 : print.printSize === 'XL' ? 120 : null)


  return (
    <section className={cart ? "cart flex" : 'hidden'}>
        <h6>Cart</h6>
        <span onClick={showCart} 
        className='closeCart'>^</span>
        <section className="printSec">
          {prints.map((print) => (
        <Print key={print.id} print={print} onDelete={onDelete}/>
        ))}
        </section>
        <section className="cartFooter flex">
          <h6>{`Subtotal: $${prices.reduce((acc,c) => acc + c, 0)}`}</h6>
          <a className="checkout" href="#prints">Check Out</a>
        </section>
       
    </section>
  )
}

export default Cart