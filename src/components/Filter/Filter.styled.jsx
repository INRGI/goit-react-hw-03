import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    color: hsl(230, 100%, 95%);
    width: 440px;
    padding: 0;
    padding-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
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

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 15px;
font-size: 25px;
justify-content: center;
align-items: center;
`;