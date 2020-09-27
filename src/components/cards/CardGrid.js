import React from "react";
import { items } from "../../data";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import "styles/card-grid.css";

const MotionDiv = motion.div;

function Card({ id, title, category, theme, handleClicked, thumbnail, banner }) {
  return (
    <li className={`card ${theme}`} onClick={(event) => {
      return handleClicked(id, event)
    }}>
      <div className="card-content-container">
        <MotionDiv className="card-content" layoutId={`card-container-${id}`}>
          <MotionDiv
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={thumbnail} alt="" />
          </MotionDiv>
          <MotionDiv
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </MotionDiv>
        </MotionDiv>
      </div>
      <div className={`card-open-link`} id={'card'} />
    </li>
  );
}

export function List({ selectedId, setId }) {

  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} handleClicked={(id, event) => setId(card.id, event)} />
      ))}
    </ul>
  );
}
export function Item({ id }) {
  const elem = items.find(item => item.id === id);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: .6 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        {/*<Link to="/" />*/}
      </MotionDiv>
      <div className="card-content-container open">
        <MotionDiv className="card-content" layoutId={`card-container-${id}`}>
          <MotionDiv
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" style={{ maxHeight: '100%' }} src={elem.banner} alt="" />
          </MotionDiv>
          <MotionDiv
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{elem.category}</span>
            <h2 style={{ fontSize: '1.5rem' }}>{elem.title}</h2>
          </MotionDiv>
          <MotionDiv className="content-container" animate>
            <p>
              {elem.body}
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </>
  );
}

function Store() {
  const [id, setId] = React.useState('');
  const imageHasLoaded = true;
  console.log(id)

  return (
    <div onClick={(event) => event.target.id !== 'card' && setId('')}>
      <List setId={(cardId, event) => {
        if (event.target.id === 'card') {
          return setId(cardId);
        }
        return false;
      }} selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </div>
  );
}

export default function CardGrid() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Store />
      </AnimateSharedLayout>
    </div>
  );
}

