import { FooterStyle } from "./styles";

export function Footer(props){
  console.log(props.cards);
  console.log(props.cards.length);
  return(
    <FooterStyle data-identifier="footer" data-test="footer">
      <h1>{props.count}/{props.cards.length} Concluídos</h1>
    </FooterStyle>
  );
}