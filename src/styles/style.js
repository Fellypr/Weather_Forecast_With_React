import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: ${({activo}) => (activo ? "350px" : "0")};
    overflow: hidden;
    transition: all 1s ease-in-out;

`;