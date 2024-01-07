import styled from "@emotion/styled";

export const Container = styled.div`

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 400px;
    color: hsl(230, 100%, 95%);
    border: 2px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    border-radius: 5px;
    height: 200px;
`;

export const Label = styled.label`
    display: flex;
    gap: 20px;
    color: hsl(230, 100%, 95%);
    font-size: 30px;
    justify-content: space-between;
`;

export const Button = styled.button`
    align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  &:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
    }

    &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
    }
`;

export const Input = styled.input`
    width: 230px;
    padding: 10px;
    font-size: 18px;
    outline:none;
    background: linear-gradient(to left top, #000, #22132e) fixed;
    border-radius: 10px;
    border: 2px solid hsl(230, 100%, 95%);
    color: rgba(255,255,255,0.8);
    transition: all 0.5s;
    &:hover {
        border: 2px solid hsl(230, 80%, 85%);
    }
    &:focus {
        border: 2px solid hsl(230, 80%, 85%);
        background: linear-gradient(to left top, #000, #bda2d3) fixed;
    }
`;