import React from "react";
import { useState } from "react";
import styles from "./Cards.module.css";
import Card from "react-bootstrap/Card";

// const Like = ({ likes }) => {
//   const [like, setLike] = useState({likes});

//   return <button className={styles.buttonStyle} onClick={() => setLike(like + 1)}> {like} likes </button>;
// };
const Like = () => {
  const [like, setLike] = useState(0);

  return <button className={styles.buttonStyle} onClick={() => setLike(like + 1)}> {like} likes </button>;
};



const Cards = ({ name, information, image }) => {
  return (
    
      <Card className="bg-dark text-white" border="dark">
       <div className={styles.cardStyle}>
        <Card.Img className={styles.imgCard} variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{information}</Card.Text>
          <Like />
        </Card.Body>
        </div>
      </Card>
    
  );
};

export default Cards;
