import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'M PLUS Rounded 1c';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/mplusrounded1c/v27/VdGeAZQpeY5VZcpr2Hr7q4WzX9wGqo9WJxF9FV0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'M PLUS Rounded 1c';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/mplusrounded1c/v27/VdGeAZQpeY5VZcpr2Hr7q4WzX9wGqo9WJxF9FV4.woff2') format('woff2');
      }
    `}
  />
)

export default Fonts
