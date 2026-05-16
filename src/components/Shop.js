import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../style/Shop.module.css';

// Images
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import pastha from '../images/pastha.png';
import noodles from '../images/noodles.png';
import burgger from '../images/burgger.png';
import drink from '../images/drink.png';
import cola from '../images/cola.png';
import chiken from '../images/chiken.png';
import menu1 from '../images/menuitem1.png';
import menu2 from '../images/menuitem2.png';
import menu3 from '../images/menuitem3.png';
import food from '../images/food.png';
import bigpizza from '../images/bigpizza.png';

const products = [
    { id: 1, name: "Chicken Leg Piece", category: "Chicken", price: 10.99, img: card1, tag: "Popular" },
    { id: 2, name: "Grill Chicken", category: "Chicken", price: 15.50, img: card2, tag: "Spicy" },
    { id: 3, name: "Margherita Pizza", category: "Pizza", price: 12.00, img: card3, tag: "Cheesy" },
    { id: 4, name: "Fried Chicken Box", category: "Chicken", price: 11.20, img: card4, tag: "Crispy" },
    { id: 5, name: "Chinese Pasta", category: "Pasta", price: 9.99, img: pastha, tag: "Fresh" },
    { id: 6, name: "Chicken Noodles", category: "Noodles", price: 13.40, img: noodles, tag: "Tasty" },
    { id: 7, name: "Double Cheese Burger", category: "Burger", price: 8.99, img: burgger, tag: "New" },
    { id: 8, name: "Classic Cola", category: "Drinks", price: 2.50, img: cola, tag: "Cold" },
    { id: 9, name: "Orange Juice", category: "Drinks", price: 4.00, img: drink, tag: "Healthy" },
    { id: 10, name: "Crispy Strips", category: "Chicken", price: 7.50, img: chiken, tag: "Crunchy" },
    { id: 11, name: "Classic Burger", category: "Burger", price: 9.50, img: menu1, tag: "Classic" },
    { id: 12, name: "Special Pasta", category: "Pasta", price: 11.00, img: menu2, tag: "Chef Special" },
    { id: 13, name: "Spicy Noodles", category: "Noodles", price: 10.50, img: menu3, tag: "Spicy" },
    { id: 14, name: "Big Meat Pizza", category: "Pizza", price: 14.00, img: bigpizza, tag: "Large" },
    { id: 15, name: "Tropical Drink", category: "Drinks", price: 3.50, img: food, tag: "Refresher" },
    { id: 16, name: "Zinger Burger", category: "Burger", price: 10.00, img: card4, tag: "Hot" },
];



function Shop() {
    const [activeCat, setActiveCat] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(p => {
        const matchesCat = activeCat === "All" || p.category === activeCat;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const categories = ["All", "Chicken", "Pizza", "Pasta", "Noodles", "Burger", "Drinks"];

    return (
        <div className={style.shopContainer}>
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={style.header}
            >
                <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Our Shop
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Home / <span style={{ color: '#ff4d4d' }}>Shop</span>
                </motion.p>
            </motion.div>

            <div className={style.mainContent}>
                {/* Controls: Category Filter & Search */}
                <div className={style.controls}>
                    <div className={style.categories}>
                        {categories.map((cat, index) => (
                            <button 
                                key={index}
                                className={`${style.catBtn} ${activeCat === cat ? style.activeCat : ''}`}
                                onClick={() => setActiveCat(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className={style.searchBox}>
                        <input 
                            type="text" 
                            placeholder="Search food..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className={style.searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div 
                    layout 
                    className={style.productGrid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((p) => (
                            <motion.div 
                                layout
                                key={p.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={style.productCard}
                                whileHover={{ 
                                    y: -15,
                                    boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.span 
                                    className={style.tag}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {p.tag}
                                </motion.span>
                                <div className={style.imgWrapper}>
                                    <motion.img 
                                        src={p.img} 
                                        alt={p.name} 
                                        className={style.productImg} 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    />
                                </div>
                                <h3>{p.name}</h3>
                                <p>Delicious {p.category} prepared with fresh ingredients.</p>
                                <div className={style.footer}>
                                    <span className={style.price}>${p.price.toFixed(2)}</span>
                                    <motion.button 
                                        whileHover={{ scale: 1.05, backgroundColor: '#e64545' }}
                                        whileTap={{ scale: 0.95 }}
                                        className={style.addBtn}
                                    >
                                        ADD TO CART
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem' }}
                    >
                        No products found matching your search.
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Shop;
