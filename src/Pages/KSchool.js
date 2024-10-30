import React from 'react'
import Headar from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/kschoolimg/1.PNG';
import b from '../Pages/kschoolimg/2.PNG';
import c from '../Pages/kschoolimg/3.PNG';
import d from '../Pages/kschoolimg/4.PNG';
import e from '../Pages/kschoolimg/5.PNG';
import f from '../Pages/kschoolimg/6.PNG';
import g from '../Pages/kschoolimg/7.PNG';
import h from '../Pages/kschoolimg/8.PNG';
import i from '../Pages/kschoolimg/9.PNG';
import j from '../Pages/kschoolimg/10.PNG';
import k from '../Pages/kschoolimg/11.PNG';
import l from '../Pages/kschoolimg/12.PNG';


const booksData = [
  { name: "Rapunzel", image: b, price: "$10" },
  { name: "Hansel and Gretel", image: c, price: "$12" },
  { name: "Cinderella", image: d, price: "$15" },
  { name: "Little Red Riding Hood", image: e, price: "$8" },
  { name: "Snow White", image: f, price: "$10" },
  { name: "Rapunzel", image: g, price: "$10" },
  { name: "Hansel and Gretel", image: h, price: "$12" },
  { name: "Cinderella", image: i, price: "$15" },
  { name: "Little Red Riding Hood", image: j, price: "$8" },
  { name: "Snow White", image: k, price: "$10" },
  { name: "Rapunzel", image: l, price: "$10" },
];

function KSchool({ addToCart }) {
  return (
    <div class="Main">
    <Headar />
    <Catagory heading="Kid" books={booksData} addToCart={addToCart} />
    <Footer/>  
    </div>
    
  )
}

export default KSchool