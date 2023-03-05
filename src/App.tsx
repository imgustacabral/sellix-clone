import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import SellerCard from './components/SellerCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-[#0A1730] h-screen w-screen'>
    <Header />
    <SellerCard/>
    <Menu />
    <div className='absolute bottom-0 w-screen'>
    <Footer/>
    </div>
    
    </main>
  )
}

export default App
