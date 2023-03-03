import { FooterStyle } from "./styles";

export function Footer(props){
    return(
      <FooterStyle data-identifier="footer" data-test="footer">
          <h1>{props.counter}/{props.cards.length} Concluídos</h1>
      </FooterStyle>
    );
}