import { useState, useEffect, useRef } from 'react';


import { goodsItems } from "../Goods";
import CardItem from "../CardItem/CardItem";
import styles from "./CardList.module.scss"

const CardList = () => {
  const [visibleItems, setVisibleItems] = useState(6); 
  const loadMoreRef = useRef(null);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);


  return (
    <div className={styles.Goods__container}>
      {goodsItems.slice(0, visibleItems).map((item) => (
        <CardItem
          id={item.id}
          title={item.name}
          image={item.image}
          key={item.id}
          price={item.price}
        />
      ))}
      {visibleItems < goodsItems.length && (
        <div ref={loadMoreRef} className={styles.Goods__load}></div> 
      )}
    </div>
  )
}

export default CardList;