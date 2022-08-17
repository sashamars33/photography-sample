
const Print = ({ print, onDelete }) => {
    
    const printPrice = print.printSize === 'S' ? 10 : print.printSize === 'M' ? 30 : print.printSize === 'L' ? 60 : print.printSize === 'XL' ? 120 : null


  return (
    <div className='flex print'>
        <span>{print.printTitle}</span>
        <span>{print.printSize}</span>
        <span>{`$${printPrice}`}</span>
        <span className="deleteCartListing" onClick={() => onDelete(print.id)}>X</span>
    </div>
  )
}

export default Print