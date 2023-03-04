import { LogoStyle } from "./styles";

export function Logo(){
  return(
    <LogoStyle>
      <img alt="logo" src={"./assets/logo.png"}/>
      <h1>ZapRecall</h1>
    </LogoStyle>
  );
}