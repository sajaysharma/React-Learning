
import './App.css'
import Cards from './component/cards'

function App() {
  
  let arry = [1, 3, 4];

  return (
    <>
      <div className='bg-green-700 text-black p-4 rounded-xl mb-4'>
        <h1>hello</h1>
      </div>
      <Cards username ="Ajay $ Chai" btnTxt = "Visit me" array = {arry} />
      <Cards username ="Aao chemisty pade" btnTxt = "Click me" />
      
    </>
  )
}

export default App
