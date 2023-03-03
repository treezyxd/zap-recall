import { Card } from "../Card";

export const Cards = (props) => {
  return (
    <>
      {props.cards.map((card, index) => {
        return (
          <Card key={index} index={index} card={card} count={props.count} setCount={props.setCount} />
        );
      })}
    </>
  );
}