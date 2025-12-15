import './App.css'
import { ThemeProvider } from './assets/context/ThemeContext.jsx'
import Calculator from './components/calculator.jsx'
import CounterWithReducer from './components/CounterWithReducer.jsx'
import { ThemedButton } from './components/ThemedButton.jsx'
import { ThemedParagraph } from './components/ThemedParagraph.jsx'
function App() {

  return (
    <>
    {/* <Calculator /> */}
    {/* <CounterWithReducer /> */}
    <ThemeProvider>
    <ThemedButton />
    <ThemedParagraph />
    </ThemeProvider>
    </>
  )
}

export default App
