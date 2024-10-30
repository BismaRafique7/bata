import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/MSandels/1.PNG';
import b from '../Pages/MSandels/2.PNG';
import c from '../Pages/MSandels/3.PNG';
import d from '../Pages/MSandels/4.PNG';
import e from '../Pages/MSandels/5.PNG';
import f from '../Pages/MSandels/6.PNG';
import g from '../Pages/MSandels/7.PNG';
import h from '../Pages/MSandels/8.PNG';
import i from '../Pages/MSandels/9.PNG';
import j from '../Pages/MSandels/10.PNG';
import k from '../Pages/MSandels/11.PNG';
import l from '../Pages/MSandels/12.PNG';




const booksData = [
    { name: "Rapunzel", image: a  , price: "$10"},
  { name: "Rapunzel", image: b  , price: "$10"},
  { name: "Hansel and Gretel", image: c , price: "$10" },
  { name: "Cinderella", image: d  , price: "$10"},
  { name: "Little Red Riding Hood", image: e , price: "$10" },
  { name: "Snow White", image: f  , price: "$10"},
  { name: "Rapunzel", image: g  , price: "$10"},
  { name: "Hansel and Gretel", image: h , price: "$10" },
  { name: "Cinderella", image: i  , price: "$10"},
  { name: "Little Red Riding Hood", image: j  , price: "$10"},
  { name: "Snow White", image: k  , price: "$10"},
  { name: "Rapunzel", image: l  , price: "$10"},
];

function MSandals({ addToCart }) {
  return (
    <div class="Main">
    <Header/>
    <Catagory heading="Men Sandels" books={booksData} addToCart={addToCart} />
    <Footer/>  
    </div>
    
  )
}

export default  MSandals