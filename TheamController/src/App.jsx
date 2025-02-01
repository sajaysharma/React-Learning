import { ThemeProvider } from './Context/Theme'

import './App.css'
import { useEffect, useState } from 'react'
import Cards from './Componenets/Cards'
import ThemeButton from './Componenets/ThemeButton'

function App() {
     const [themeMode, setThemeMode] = useState("light")

     const lightTheme = () => {
      setThemeMode("light")
     }
     const darkTheme = () => {
      setThemeMode("dark")
     }

    //  Actual working
    useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton />
          </div>
           
          
          <div className="w-full max-w-sm mx-auto">
          <Cards />
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
