import React from 'react';
import Headar from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import b from '../Pages/kpimg/2.PNG';
import c from '../Pages/kpimg/3.PNG';
import d from '../Pages/kpimg/4.PNG';
import e from '../Pages/kpimg/5.PNG';
import f from '../Pages/kpimg/6.PNG';
import g from '../Pages/kpimg/7.PNG';
import h from '../Pages/kpimg/8.PNG';
import i from '../Pages/kpimg/9.PNG';
import j from '../Pages/kpimg/10.PNG';
import k from '../Pages/kpimg/11.PNG';
import l from '../Pages/kpimg/12.PNG';

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

function KPeshwari({ addToCart }) {
  return (
    <div className="Main">
      <Headar />
      <Catagory heading="KPeshwari" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default KPeshwari;
