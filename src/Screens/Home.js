import React, { useState, useEffect } from 'react';
import Products from '../Components/Products';
import Cart from "../Components/Cart";
import Navbars from '../Components/Navbars';
import Snacks from '../Components/Snacks';
import About from "../Components/About";
import Services from "../Components/Services";
import Swallow from '../Components/Swallow';
import Proteins from '../Components/Proteins';
import Drinks from '../Components/Drinks';
import Meals from '../Components/Meals';
import ControlledCarousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Booking from '../Components/Booking';

const PAGE_PRODUCTS = 'products';
const HOMEPAGE_FOOD = 'home foods';
const PAGE_CART = 'cart';
const SNACK_PAGE = "snackspage";
const SNACK = 'snack';
const ABOUT_PAGE = "aboutpage";
const SERVICES_PAGE = "servicespage";
const SWALLOW_PAGE = "swallowpage";
const SWALLOW = "swallow"
const DRINKS_PAGE = "drinkspage" ;
const DRINKS = "drinks"
const PROTEINS_PAGE = "proteinspage";
const PROTEINS = "proteins";
const MEALS_PAGE = "mealspage";
const MEALS = "meals";
const BOOKING_PAGE = "bookpage";


function Home() {
    const [products] = useState([
        {
            category: HOMEPAGE_FOOD,
            name: 'Guinness Malt',
            cost: 2.99,
            image:"/asset/d5.png",
            id:0,
          },
          {
            category: HOMEPAGE_FOOD,
            name: 'Peppperd Dry Catfish',
            cost: 2.99,
            image:"/asset/p5.jpeg",
            id:1,
          },
          {
            category: HOMEPAGE_FOOD,
            name: 'Ofada Rice',
            cost: 2.99,
            image:"/asset/f5.jpeg",
            id:2,
          },
          {
            category: HOMEPAGE_FOOD,
            name: 'Chivita Juice',
            cost: 2.99,
            image:"/asset/d3.jpeg",
            id:3,
          },
          {
            category: HOMEPAGE_FOOD,
            name: 'Peppered Beef',
            cost: 2.99,
            image:"/asset/p4.jpeg",
            id:4,
          },
          {
            category: HOMEPAGE_FOOD,
            name: 'White Rice and Stew',
            cost: 2.99,
            image:"/asset/f16.png",
            id:5,
          },
        {
          category: SNACK,
          name: 'Donut',
          cost: 19.99,
          image: "/asset/s2.jpeg",
          id:6,
        },
        {
          category: SNACK,
          name: 'Chicken & Chips',
          cost: 19.99,
          image: "/asset/s3.jpeg",
          id:7,
        },
        {
          category: SNACK,
          name: 'Burger',
          cost: 19.99,
          image: "/asset/s4.jpeg",
          id:8,
        },
        {
          category: SNACK,
          name: 'Sausage Roll',
          cost: 19.99,
          image: "/asset/s5.jpeg",
          id:9,
        },
        {
          category: SNACK,
          name: 'Fish Roll',
          cost: 19.99,
          image: "/asset/s6.jpeg",
          id:10,
        },
        {
          category: SNACK,
          name: 'Hot Dog',
          cost: 19.99,
          image: "/asset/s7.jpeg",
          id:11,
        },
        {
          category: SNACK,
          name: 'Pop Corn',
          cost: 19.99,
          image: "/asset/s8.jpeg",
          id:12,
        },
        {
          category: SNACK,
          name: 'Super Roll',
          cost: 19.99,
          image: "/asset/s9.jpg",
          id:13,
        },
        {
          category: SNACK,
          name: 'Bread',
          cost: 19.99,
          image: "/asset/s1.jpeg",
          id:14,
        },
        {
          category: SWALLOW,
          name: 'Eforiro',
          cost: 19.99,
          image: "/asset/f19.jpeg",
          id:15,
        },
        {
          category: SWALLOW,
          name: 'Egusi',
          cost: 19.99,
          image: "/asset/f20.jpeg",
          id:16,
        },
        {
          category: SWALLOW,
          name: 'Okro',
          cost: 19.99,
          image: "/asset/f21.jpeg",
          id:17,
        },
        {
          category: SWALLOW,
          name: 'Amala & Ewedu',
          cost: 19.99,
          image: "/asset/f22.jpeg",
          id:18,
        },
        {
          category: SWALLOW,
          name: 'Edikaikong',
          cost: 19.99,
          image: "/asset/f23.jpeg",
          id:19,
        },
        {
          category: SWALLOW,
          name: 'Vegetable Soup',
          cost: 19.99,
          image: "/asset/f24.jpeg",
          id:20,
        },
        {
          category: PROTEINS,
          name: 'Cowleg',
          cost: 19.99,
          image: "/asset/p1.jpeg",
          id:21,
        },
        {
          category: PROTEINS,
          name: 'Cripsy Chicken',
          cost: 19.99,
          image: "/asset/p2.jpeg",
          id:22,
        },
        {
          category: PROTEINS,
          name: 'Assorted',
          cost: 19.99,
          image: "/asset/p3.jpeg",
          id:23,
        },
        {
          category: PROTEINS,
          name: 'Peppered Beef',
          cost: 19.99,
          image: "/asset/p4.jpeg",
          id:4,
        },
        {
          category: PROTEINS,
          name: 'Peppperd Dry Catfish',
          cost: 19.99,
          image: "/asset/p5.jpeg",
          id:1,
        },
        {
          category: PROTEINS,
          name: 'Grilled Croaker Fish',
          cost: 19.99,
          image: "/asset/p6.jpeg",
          id:24,
        },
        {
          category: PROTEINS,
          name: 'Bush Meat',
          cost: 19.99,
          image: "/asset/p7.jpeg",
          id:25,
        },
        {
          category: PROTEINS,
          name: 'Fried Titus Fish',
          cost: 19.99,
          image: "/asset/p8.jpeg",
          id:26,
        },
        {
          category: PROTEINS,
          name: 'Grilled Turkey',
          cost: 19.99,
          image: "/asset/p9.jpeg",
          id:27,
        },
        {
          category: PROTEINS,
          name: 'Grilled Chicken',
          cost: 19.99,
          image: "/asset/p10.jpeg",
          id:28,
        },
        {
          category: PROTEINS,
          name: 'Pepperd Snail',
          cost: 19.99,
          image: "/asset/p11.jpeg",
          id:29,
        },
        {
          category: PROTEINS,
          name: 'Peppered Gizzard',
          cost: 19.99,
          image: "/asset/p12.jpeg",
          id:30,
        },
        {
          category: PROTEINS,
          name: 'Goat Meat Asun',
          cost: 19.99,
          image: "/asset/p13.jpeg",
          id:31,
        },
        {
          category: PROTEINS,
          name: 'Moi Moi',
          cost: 19.99,
          image: "/asset/p14.jpeg",
          id:32,
        },
        {
            category: PROTEINS,
            name: 'Ofada Sauce',
            cost: 19.99,
            image: "/asset/f17.jpeg",
            id:33,
          },
          {
            category: PROTEINS,
            name: 'Fried plantain',
            cost: 19.99,
            image: "/asset/f18.jpeg",
            id:34,
          },
        {
          category: DRINKS,
          name: 'Coca Cola',
          cost: 19.99,
          image: "/asset/d1.jpeg",
          id:35,
        },
        {
          category: DRINKS,
          name: 'Chivita Juice',
          cost: 19.99,
          image: "/asset/d3.jpeg",
          id:3,
        },
        {
          category: DRINKS,
          name: 'Vitamilk',
          cost: 19.99,
          image: "/asset/d4.webp",
          id:36,
        },
        {
          category: DRINKS,
          name: 'Guinness Malt',
          cost: 19.99,
          image: "/asset/d5.png",
          id:0,
        },
        {
          category: DRINKS,
          name: 'Eva Water',
          cost: 19.99,
          image: "/asset/d6.jpeg",
          id:37,
        },
        {
            category: MEALS,
            name: 'Eforiro',
            cost: 19.99,
            image: "/asset/f19.jpeg",
            id:15,
          },
          {
            category: MEALS,
            name: 'Egusi',
            cost: 19.99,
            image: "/asset/f20.jpeg",
            id:16,
          },
          {
            category: MEALS,
            name: 'Okro',
            cost: 19.99,
            image: "/asset/f21.jpeg",
            id:17,
          },
          {
            category: MEALS,
            name: 'Amala & Ewedu',
            cost: 19.99,
            image: "/asset/f22.jpeg",
            id:18,
          },
          {
            category: MEALS,
            name: 'Edikaikong',
            cost: 19.99,
            image: "/asset/f23.jpeg",
            id:19,
          },
          {
            category: MEALS,
            name: 'Vegetable Soup',
            cost: 19.99,
            image: "/asset/f24.jpeg",
            id:20,
          },
          {
            category: MEALS,
            name: 'Village Rice',
            cost: 19.99,
            image: "/asset/f1.jpeg",
            id:38,
          },
          {
            category: MEALS,
            name: 'Beans',
            cost: 19.99,
            image: "/asset/f2.jpeg",
            id:39,
          },
          {
            category: MEALS,
            name: 'Stir Fried rice',
            cost: 19.99,
            image: "/asset/f3.jpeg",
            id:40,
          },
          {
            category: MEALS,
            name: 'Semo',
            cost: 19.99,
            image: "/asset/f4.jpeg",
            id:41,
          },
          {
            category: MEALS,
            name: 'Ofada Rice',
            cost: 19.99,
            image: "/asset/f5.jpeg",
            id:2,
          },
          {
            category: MEALS,
            name: 'Burger Rice',
            cost: 19.99,
            image: "/asset/f6.jpeg",
            id:42,
          },
          {
            category: MEALS,
            name: 'Super Fried Rice',
            cost: 19.99,
            image: "/asset/f7.jpeg",
            id:43,
          },
          {
            category: MEALS,
            name: 'Pasta',
            cost: 19.99,
            image: "/asset/f8.jpg",
            id:44,
          },
          {
            category: MEALS,
            name: 'Coconut Rice',
            cost: 19.99,
            image: "/asset/f9.jpeg",
            id:45,
          },
          {
            category: MEALS,
            name: 'Jellof Rice',
            cost: 19.99,
            image: "/asset/f10.jpeg",
            id:46,
          },
          {
            category: MEALS,
            name: 'Spagetti',
            cost: 19.99,
            image: "/asset/f11.jpeg",
            id:47,
          },
          {
            category: MEALS,
            name: 'Super Fried Rice & egg',
            cost: 19.99,
            image: "/asset/f12.jpeg",
            id:48,
          },
          {
            category: MEALS,
            name: 'Pooridge Yam',
            cost: 19.99,
            image: "/asset/f13.jpeg",
            id:49,
          },
          {
            category: MEALS,
            name: 'Beans & Plantain',
            cost: 19.99,
            image: "/asset/f14.jpeg",
            id:50,
          },
          {
            category: MEALS,
            name: 'Super Fried Rice & Miced Chicken',
            cost: 19.99,
            image: "/asset/f15.jpeg",
            id:51,
          },
          {
            category: MEALS,
            name: 'White Rice and Stew',
            cost: 19.99,
            image: "/asset/f16.png",
            id:5,
          },
         
         
        
       
      ]);
    const [category, setCategory] = useState(HOMEPAGE_FOOD);
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem('cart');

    return cartData ? JSON.parse(cartData) : [];
  });
  const [page, setPage] = useState(PAGE_PRODUCTS);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };
  const getProductsInCategory = () => {
    return products.map((product) => {
      const itemInCart = cart.find((item) => item.id === product.id);
      if (itemInCart) {
        return { ...product, quantity: itemInCart.quantity };
      } else {
        return { ...product, quantity: 0 };
      }
    }).filter((product) => product.category === category);
  };
  return (
  <>
 <Navbars category={category} setCategory={setCategory} page={page} setPage={setPage} getCartTotal={getCartTotal} navigateTo={navigateTo} PAGE_CART={PAGE_CART} PAGE_PRODUCTS={PAGE_PRODUCTS} HOMEPAGE_FOOD={HOMEPAGE_FOOD} SNACK={SNACK} getProductsInCategory={getProductsInCategory} SNACK_PAGE={SNACK_PAGE} SERVICES_PAGE={SERVICES_PAGE} ABOUT_PAGE={ABOUT_PAGE} SWALLOW_PAGE={SWALLOW_PAGE} PROTEINS_PAGE={PROTEINS_PAGE} DRINKS_PAGE={DRINKS_PAGE} MEALS_PAGE={MEALS_PAGE} BOOKING_PAGE={BOOKING_PAGE} />
 

    <div className="App">
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} products={products} HOMEPAGE_FOOD={HOMEPAGE_FOOD} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} navigateTo={navigateTo} PAGE_PRODUCTS={PAGE_PRODUCTS}/>
      )}
      {page === SNACK_PAGE && (
        <Snacks cart={cart} setCart={setCart} products={products} SNACK={SNACK}/>
      )}
      {page === SWALLOW_PAGE && (
        <Swallow cart={cart} setCart={setCart} products={products} SWALLOW={SWALLOW}/>
      )}
      {page === PROTEINS_PAGE && (
        <Proteins cart={cart} setCart={setCart} products={products} PROTEINS={PROTEINS}/>
      )}
      {page === DRINKS_PAGE && (
        <Drinks cart={cart} setCart={setCart} products={products} DRINKS={DRINKS}/>
      )}
      {page === MEALS_PAGE && (
        <Meals cart={cart} setCart={setCart} products={products} MEALS={MEALS}/>
      )}
      {page === ABOUT_PAGE && (
        <About  />
      )}
      {page === SERVICES_PAGE && (
        <Services BOOKING_PAGE={BOOKING_PAGE}  navigateTo={navigateTo} />
      )}
      {page === BOOKING_PAGE && (
        <Booking />
      )}
    </div>
    <Footer />
    </>
  );
}

export default Home;
