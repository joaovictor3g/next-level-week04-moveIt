import '../styles/global.css';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider currentTheme="light">
        <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default MyApp
