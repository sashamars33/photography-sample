import archesOne from '../images/archesOne.JPG'
import archesTwo from '../images/archesTwo.JPG'
import archesThree from '../images/archesThree.JPG'
import archesFour from '../images/archesFour.JPG'

import bryceOne from '../images/bryceOne.JPG'
import bryceTwo from '../images/bryceTwo.JPG'
import bryceThree from '../images/bryceThree.JPG'

import cliffsA from '../images/cliffsA.JPEG'
import cliffsB from '../images/cliffsB.JPEG'
import cliffsC from '../images/cliffsC.JPG'
import cliffsD from '../images/cliffsD.JPG'

import escalanteA from '../images/escalanteOne.JPG'
import escalanteB from '../images/escalanteTwo.JPG'
import escalanteC from '../images/escalanteThree.JPG'
import escalanteD from '../images/escalanteFour.JPG'

import petA from '../images/petOne.JPEG'
import petB from '../images/petTwo.JPEG'
import petC from '../images/petThree.JPEG'
import petD from '../images/petFour.JPEG'


import zionA from '../images/zionOne.JPG'
import zionB from '../images/zionTwo.JPG'
import zionC from '../images/zionThree.JPG'










const Gallery = () => {
  return (
    <section className='gallery grid' id='gallery'>
        <section className="galleryFeatures grid">
            <section className='photos grid arches'>
                <img src={archesOne} alt="Arches National Park"></img>
                <img src={archesTwo} alt="Arches National Park"></img>
                <img src={archesThree} alt="Arches National Park"></img>
                <img src={archesFour} alt="Arches National Park"></img>  
            </section>
            <section className='info flex'>
                <h4>Arches National Park &amp; Moab, Utah</h4>
                <p>The stark contrast of stone illuminated by the rising sun eccentuates their interesting form. Rock in this area typically is very deep red-orange which takes on an impressive glow when struck by the radiant new day.</p>
                <a href="#prints">Prints</a>
            </section>
        </section>
        <section className="galleryFeatures grid">
            <section className='photos grid bryce'>
             <img src={bryceOne} alt="Bryce Canyon National Park"></img>
             <img src={bryceTwo} alt="Bryce Canyon National Park"></img>
             <img src={bryceThree} alt="Bryce Canyon National Park"></img>
            </section>
            <section className='info'>
                <h4>Bryce Canyon</h4>
                <p>The unmistakable pillars of Bryce Canyon are a collage of striped oranges, yellows, reds, and pinks. These uniquely eroding hillside give way to a stunning view into the past, as each color is influenced by deposits of minterals from centuries ago. This phenomenon is not unique to Bryce Canyon, but its display is unlike many others.</p>
                <a href="#prints">Prints</a>
            </section>
         </section>
        <section className="galleryFeatures grid">
            <section className='photos grid cliffs'>
                <img src={cliffsA} alt="Desolate Utah Rock Formation"></img>
                <img src={cliffsC} alt="Desolate Utah Rock Formation"></img>
                <img src={cliffsD} alt="Desolate Utah Rock Formation"></img>
                <img src={cliffsB} alt="Desolate Utah Rock Formation"></img>
            </section>
            <section className='info'>
                <h4>South Cainville Mesa</h4>
            <p>These images depict one of two mesas in a very rual area of Southern Utah, just North East of Capitol Reef. I find these images to be the most stiking because of their sublety. The coloring of the mesa walls are slight but beautiful and really display an intersting pattern of erosion.</p>
            <a href="#prints">Prints</a>
            </section>
        </section>
        <section className="galleryFeatures grid">
            <section className="photos grid esca">
                <img src={escalanteB} alt="Desolate Utah Rock Formation"></img>
                <img src={escalanteA} alt="Desolate Utah Rock Formation"></img>
                <img src={escalanteC} alt="Desolate Utah Rock Formation"></img>
                <img src={escalanteD} alt="Desolate Utah Rock Formation"></img>
            </section>
            <section className='info'>
                <h4>Escalante</h4>
                <p>Another one of favroite areas, an enchanting valley of rolling and twisting rock painted with a wonder palette of warm tones and dotted with trees and shrubs. Another one of my favorite areas and great place to get a look at the rock stration that characterizes so much of Southern Utah.</p>
                <a href="#prints">Prints</a>
            </section>
        </section>
        <section className="galleryFeatures grid">
            <section className="photos grid petFst">
                <img src={petA} alt="Petrified Forest National Monument"></img>
                <img src={petB} alt="Petrified Forest National Monument"></img>
                <img src={petC} alt="Petrified Forest National Monument"></img>
                <img src={petD} alt="Petrified Forest National Monument"></img>
            </section>
            <section className='info'>
                <h4>Petrified Forest of Arizona</h4>
                <p>A once prehistoric bogland marsh has turned into a desolate badland canyonss sprinkled with mineralized wood from the once marsh. These stones when cut open and polished display incredible colors and rings from trees long ago. </p>
                <a href="#prints">Prints</a>
            </section>
        </section>
        <section className="galleryFeatures grid">
            <section className="photos
            grid zion">
                <img src={zionA} alt="Zion National Park"></img>
                <img src={zionB} alt="Zion National Park"></img>
                <img src={zionC} alt="Zion National Park"></img>
            </section>
            <section className='info'>
                <h4>Zion</h4>
                <p>The warm colored cliffs of zion absolutely incredible to behold. The sheer size of the cliffs makes you feel incased in the richness of the natural splendor. The sunrise here really illuminates the cliffs here with a beautiful pastel morning light.The river that cuts through this area is really compliments the surrounding area as well.</p>
                <a href="#prints">Prints</a>
            </section>
        </section>
    </section>
  )
}

export default Gallery