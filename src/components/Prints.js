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

import { useState } from 'react'



const Prints = ({ onAdd }) => {

  const [printTitle, setPrintTitle] = useState('');
  const [printSize, setPrintSize] = useState('');
  

  const onSubmit = (e) => {
  
    setPrintTitle(e.target.printTitle.value);
    setPrintSize(e.target.Size.value);
    e.preventDefault();

    onAdd({printTitle: e.target.printTitle.value, printSize:e.target.Size.value});

   setPrintTitle('');
   setPrintSize('')
  }






  return(
    <section className='prints grid' id='prints'>
      <h3>Prints</h3>
      <div className='printListing flex'>
        <h5>Arches Orange Cliffs #1</h5>
        <img src={ archesOne } alt='preview arches print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size" >
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Arches Orange Cliffs #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Arches Orange Cliffs #2</h5>
        <img src={ archesTwo } alt='preview arches print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Arches Orange Cliffs #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Arches Orange Cliffs #3</h5>
        <img src={ archesThree } alt='preview arches print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Arches Orange Cliffs #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Arches Orange Cliffs #4</h5>
        <img src={ archesFour } alt='preview arches print four'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Arches Orange Cliffs #4"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Bryce HooDoos #1</h5>
        <img src={ bryceOne } alt='preview bryce print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Bryce HooDoos #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Bryce HooDoos #2</h5>
        <img src={ bryceTwo } alt='preview bryce print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Bryce HooDoos #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Bryce HooDoos #3</h5>
        <img src={ bryceThree } alt='preview bryce print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Bryce HooDoos #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>South Cainville Mesa #1</h5>
        <img style={{filter: 'saturate(150%)'}} src={ cliffsA } alt='preview cainville mesa print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="South Cainville Mesa #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>South Cainville Mesa #2</h5>
        <img style={{filter: 'saturate(150%)'}}  src={ cliffsB } alt='preview cainville mesa print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="South Cainville Mesa #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>South Cainville Mesa #3</h5>
        <img style={{filter: 'saturate(130%)'}}  src={ cliffsC } alt='preview cainville mesa print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="South Cainville Mesa #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>South Cainville Mesa #4</h5>
        <img style={{filter: 'saturate(130%)'}}  src={ cliffsD } alt='preview cainville mesa print four'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="South Cainville Mesa #4"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Escalante Valley #1</h5>
        <img style={{filter: 'saturate(110%)'}}  src={ escalanteA } alt='preview escalante valley print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select >
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Escalante Valley #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Escalante Valley #2</h5>
        <img style={{filter: 'saturate(110%)'}}  src={ escalanteB } alt='preview escalante valley print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Escalante Valley #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Escalante Valley #3</h5>
        <img style={{filter: 'saturate(110%)'}}  src={ escalanteC } alt='preview escalante valley print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Escalante Valley #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Escalante Valley #4</h5>
        <img style={{filter: 'saturate(110%)'}}  src={ escalanteD } alt='preview escalante valley print four'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Escalante Valley #4"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Petrified Forest #1</h5>
        <img style={{  filter: 'sepia(20%)' }} src={ petA } alt='preview petrified forest print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Petrified Forest #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Petrified Forest #2</h5>
        <img style={{  filter: 'sepia(20%)' }} src={ petB } alt='preview petrified forest print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Petrified Forest #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Petrified Forest #3</h5>
        <img style={{  filter: 'sepia(20%)' }} src={ petC } alt='preview petrified forest print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Petrified Forest #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Petrified Forest #4</h5>
        <img style={{  filter: 'sepia(20%)' }} src={ petD } alt='preview petrified forest print four'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Petrified Forest #4"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Zion Cliffs #1</h5>
        <img style={{  filter: 'brightness(120%)' }} src={ zionA } alt='preview zion cliffs print one'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Zion Cliffs #1"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Zion Cliffs #2</h5>
        <img style={{  filter: 'brightness(120%)' }} src={ zionB } alt='preview zion cliffs print two'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Zion Cliffs #2"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
      <div className='printListing flex'>
        <h5>Zion Cliffs #3</h5>
        <img style={{  filter: 'saturate(170%)' }} src={ zionC } alt='preview zion cliffs print three'></img>
        <form onSubmit={onSubmit}>
          <select id="sizePrice" name="Size">
						<option value="S">4x6 in. - $10</option>
						<option value="M">8x12 in. - $30</option>
            <option value='L'>16x24 in. - $60</option>
            <option value='XL'>32x48 in. - $120</option>
					</select>
          <input style={{display: 'none'}} name="printTitle" type="text" readOnly value="Zion Cliffs #3"></input>
          <input type='submit' value='+'></input>
        </form>
      </div>
    </section>
  )
}

export default Prints