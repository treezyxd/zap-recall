import { DivContainer, Logo } from "./styles";
import logo from '../../assets/logo.png';

export const Title = () => {
  return (
    <DivContainer>
      <Logo src={logo} />
      <h1>ZapRecall</h1>
    </DivContainer>
  );
}