import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="src\assets\commerce.jpg" alt="" className="home__image" />
                <div className="home__row">
                 <Product 
                 id="1"
                 title=" Green Shoe"
                 price={1.96}
                 rating={5}
                 image="src\assets\1.jpg"
                 />
                 <Product 
                   id="2"
                   title=" Suit"
                   price={200}
                   rating={4}
                   image="src\assets\2.jpg"/>
                </div>
                <div className="home__row">
                 <Product 
                   id="3"
                   title=" Black and Yellow shoe"
                   price={90}
                   rating={3}
                   image="src\assets\3.jpg"/>
                 <Product 
                   id="4"
                   title=" Brown Leather Shoe"
                   price={34}
                   rating={2}
                   image="src\assets\4.jpg" />
                 <Product 
                   id="5"
                   title=" Black crocodile skin Shoe"
                   price={60}
                   rating={3}
                   image="src\assets\5.jpg"/>
                 <Product 
                   id="6"
                   title=" Marble linen"
                   price={70}
                   rating={5}
                   image="src\assets\6.jpg"/>
                </div>
                <div className="home__row">
                <Product 
                  id="7"
                  title=" Canvas shoe"
                  price={69}
                  rating={4}
                  image="src\assets\7.jpg"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home