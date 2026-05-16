import React from 'react';
import { motion } from 'framer-motion';
import style from '../style/blog.module.css';

// Images
import aboutbg from '../images/Aboutbg.jpg';
import cardbg from '../images/Aboutcardbg.jpg';
import footer1 from '../images/footer1.jpg';
import footer2 from '../images/footer2.jpg';
import footer3 from '../images/footer3.jpg';
import footer4 from '../images/footer4.jpg';

const blogPosts = [
    {
        id: 1,
        title: "The Secret Behind Our Spicy Fried Chicken",
        date: "May 10, 2026",
        author: "Chef Deepak",
        excerpt: "Discover the unique blend of herbs and spices that makes our signature fried chicken irresistibly crispy and spicy.",
        img: footer1
    },
    {
        id: 2,
        title: "Top 5 Foods to Try This Summer",
        date: "May 12, 2026",
        author: "Foodzy Editorial",
        excerpt: "Summer is here, and we have curated a list of the most refreshing and satisfying meals to keep you cool and energized.",
        img: footer2
    },
    {
        id: 3,
        title: "How to Make the Perfect Homemade Pizza",
        date: "May 14, 2026",
        author: "Chef Deepak",
        excerpt: "Learn the secrets of kneading the perfect dough and selecting the freshest ingredients for an authentic Italian pizza experience.",
        img: footer3
    },
    {
        id: 4,
        title: "Healthy Eating Without Compromising Taste",
        date: "May 15, 2026",
        author: "Nutritionist Sarah",
        excerpt: "Who says healthy food has to be boring? Explore our new range of nutritious and delicious salads and wraps.",
        img: footer4
    },
    {
        id: 5,
        title: "The Evolution of Fast Food Culture",
        date: "May 16, 2026",
        author: "Foodzy Editorial",
        excerpt: "A deep dive into how fast food has transformed over the decades to adapt to modern tastes and lifestyle demands.",
        img: aboutbg
    },
    {
        id: 6,
        title: "Behind the Scenes: Our Kitchen Operations",
        date: "May 17, 2026",
        author: "Manager Alex",
        excerpt: "Get an exclusive look at how our dedicated team prepares thousands of meals daily with precision and passion.",
        img: cardbg
    }
];

function Blog() {
    return (
        <div className={style.blogContainer}>
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
                    Our Blog
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Home / <span style={{ color: '#ff4d4d' }}>Blog</span>
                </motion.p>
            </motion.div>

            <div className={style.mainContent}>
                <motion.div 
                    className={style.blogGrid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {blogPosts.map((post) => (
                        <motion.div 
                            key={post.id}
                            className={style.blogCard}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={style.imgWrapper}>
                                <motion.img 
                                    src={post.img} 
                                    alt={post.title} 
                                    className={style.blogImg}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                            <div className={style.content}>
                                <div className={style.meta}>
                                    <span>📅 {post.date}</span>
                                    <span>👤 {post.author}</span>
                                </div>
                                <h3 className={style.title}>{post.title}</h3>
                                <p className={style.excerpt}>{post.excerpt}</p>
                                <motion.button 
                                    className={style.readMoreBtn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Read More
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Blog;
