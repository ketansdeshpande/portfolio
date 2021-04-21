import { createGlobalStyle } from "styled-components";
import BackgroundImage from '../src/images/grey.png';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.2rem;
}

html, body {
    overflow-x: hidden;
    background: url(${BackgroundImage}) top left repeat;
}

h1,h2,h3,h4,h5 {
    font-family: 'Raleway', sans-serif;
    // text-transform: uppercase;
}
`;

// font-family: 'Lato', sans-serif; for logo
// font-family: 'Raleway', sans-serif; for body text
// font-family: 'Roboto', sans-serif; for headings
// font-family: 'Ubuntu', sans-serif; for logo
// font-family: 'Work Sans', sans-serif; for body

export default GlobalStyle;
