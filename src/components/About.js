import cliffsD from '../images/cliffsD.JPG'

const About = () => {
  return (
    <section className='about grid' id='about'>
        <h3>About</h3>
        <p>Thelma Thorpe is a Southern Utah-based photographer who enjoys capturing the awe-inspiring desolate wilderness of the area. She spends most days exploring these wild areas appreciating the intense coloring of the geology.Thorpe is originally from Central California, spending most of her youth in Cambria, CA. She discovered her fascination with geology at a young age. She often would collect minerals and study them and their properties. She went on to study geology for her undergraduate degree which is where she took her first trip to Southern Utah. After this first trip she decided to move there a few years after where she continues to study geology and document the geologic sturctures through photography.</p>
        <img src={ cliffsD } alt="Abandoned Utah Cabin"></img>
    </section>
  )
}

export default About