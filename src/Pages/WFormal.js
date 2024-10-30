import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/WFormal/1.PNG';
import b from '../Pages/WFormal/2.PNG';
import c from '../Pages/WFormal/3.PNG';
import d from '../Pages/WFormal/4.PNG';
import e from '../Pages/WFormal/5.PNG';
import f from '../Pages/WFormal/6.PNG';
import g from '../Pages/WFormal/7.PNG';
import h from '../Pages/WFormal/8.PNG';
import i from '../Pages/WFormal/9.PNG';
import j from '../Pages/WFormal/10.PNG';
import k from '../Pages/WFormal/11.PNG';
import l from '../Pages/WFormal/12.PNG';




const booksData = [
    { name: "Rapunzel", image: a , price: "$10" },
  { name: "Rapunzel", image: b  , price: "$10"},
  { name: "Hansel and Gretel", image: c , price: "$10" },
  { name: "Cinderella", image: d , price: "$10" },
  { name: "Little Red Riding Hood", image: e , price: "$10" },
  { name: "Snow White", image: f  , price: "$10"},
  { name: "Rapunzel", image: g  , price: "$10"},
  { name: "Hansel and Gretel", image: h  , price: "$10"},
  { name: "Cinderella", image: i  , price: "$10"},
  { name: "Little Red Riding Hood", image: j  , price: "$10"},
  { name: "Snow White", image: k , price: "$10" },
  { name: "Rapunzel", image: l , price: "$10" },
];

function WFormal({ addToCart }) {
    return (
      <div className="Main"> {/* Use className for React */}
        <Header />
        <Catagory heading="Women Formal" books={booksData} addToCart={addToCart}/>
        <Footer />
      </div>
    );
  }
  
  export default WFormal;