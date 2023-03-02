import styled from "styled-components";

export const DivContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  h1 {
    color: white;
    font-size: 44px;
    font-family: 'Righteous', cursive;
    margin-left: 20px;
  }
`;

export const Logo = styled.img`
  src: url(${props => props.src});
  width: 52px;
  height: 60px;
`;