import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Button } from 'react-bootstrap';
import reportWebVitals from './reportWebVitals';

const books=[{
  img: 'https://images-na.ssl-images-amazon.com/images/I/91aNPxKIruL._AC_UL200_SR200,200_.jpg',

  review: 'Review: ⭐⭐⭐⭐',
  Author: 'Nikole Hannah-Jones',
  about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

}, {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81zhvrYl7yL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'J K Rowling',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/91pxjSLgBkL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Ernest Cline',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/71rDThWVwES._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Mitch Albom',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/61Sj0EU6xyL._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Joan Didion',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Matt Haig',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Colleen Hoover',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/71gk%2BH%2ByEkL._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Bob Woodward',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg',

review: 'Review: ⭐⭐⭐⭐',
Author: 'Monica Sweeney',
about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}];

const img='https://images-na.ssl-images-amazon.com/images/I/81zhvrYl7yL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg';
const review='Review: ⭐⭐⭐⭐';
const author='J K Rawling';
// const Review=()=>{
//   return <div>
//       Review: ⭐⭐⭐⭐
//   </div>
// }

// const Author=()=>{
//   return <div>
//       <h5 style={{color:'green', letterSpacing:'4px', margin:'6px 2px'}}>Author: J K Rawling</h5>
//   </div>
// }

// const About=()=>{
//   return <div style={{marginTop:'0px', display:'block', width:'30vw'}}>
//       <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//         Integer vulputate risus id erat tempor, eget convallis augue vehicula. 
//         Suspendisse lacinia posuere luctus.</p>
//   </div>
// }

const Button=()=>{
  return <div style={{textAlign:'center',marginBottom:'10px'}}><button style={{}}>CLICK to buy</button></div>
}

const Book=({img, review, Author, about})=>{
  // books.map((book,index)=>{
  //   return {...book};
  //   })
console.log();
// const {img, review, Author, about}=props
  // return <section>
  //   <About />
  // </section>
  
  return <div className='book'>
  <section style={{display:'flex',flexDirection:'column',marginTop:'0px',width:'30',alignItems:'center'}}>
    <img src={img} style={{width:'60%'}}></img>
    <div style={{textAlign:'center'}}>{review}</div>
    <h5 style={{color:'green', letterSpacing:'4px', margin:'6px 2px', textAlign:'center'}}>{Author}</h5>
    <div style={{marginTop:'0px', display:'block', width:'30vw'}}><p style={{margin:'10px 0px'}}>{about}
      </p></div>
     <Button />
  </section>
  </div>
}

const Booklist=()=>{

  return <section className='booklist'>
    {books.map(book=>{
      return <Book img={book['img']} review={book['review']} Author={book['Author']} about={book['about']}/>
    })}
    {/* <Book img={img}/>
    <Book img={img}/>
    <Book img={img}/>
    <Book img={img}/> */}
  
  </section>
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Booklist />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
