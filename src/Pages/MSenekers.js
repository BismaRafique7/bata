import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/MSenekers/1.PNG';
import b from '../Pages/MSenekers/2.PNG';
import c from '../Pages/MSenekers/3.PNG';
import d from '../Pages/MSenekers/4.PNG';
import e from '../Pages/MSenekers/5.PNG';
import f from '../Pages/MSenekers/6.PNG';
import g from '../Pages/MSenekers/7.PNG';
import h from '../Pages/MSenekers/8.PNG';
import i from '../Pages/MSenekers/9.PNG';
import j from '../Pages/MSenekers/10.PNG';
import k from '../Pages/MSenekers/11.PNG';
import l from '../Pages/MSenekers/12.PNG';




const booksData = [
  { name: "Rapunzel", image: a , price: "$10"},
  { name: "Rapunzel", image: b , price: "$10"},
  { name: "Hansel and Gretel", image: c , price: "$10"},
  { name: "Cinderella", image: d , price: "$10"},
  { name: "Little Red Riding Hood", image: e , price: "$10"},
  { name: "Snow White", image: f , price: "$10"},
  { name: "Rapunzel", image: g , price: "$10"},
  { name: "Hansel and Gretel", image: h , price: "$10"},
  { name: "Cinderella", image: i , price: "$10"},
  { name: "Little Red Riding Hood", image: j , price: "$10"},
  { name: "Snow White", image: k , price: "$10"},
  { name: "Rapunzel", image: l , price: "$10"},
];

function MSenekers({ addToCart }) {
  return (
    <div class="Main">
    <Header/>
    <Catagory heading="Men Senekers" books={booksData} addToCart={addToCart}/>
    <Footer/>  
    </div>
    
  )
}

export default MSenekers