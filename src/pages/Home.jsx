import { useEffect } from 'react'

function Home() {
    useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const textStyle = {
    fontFamily: 'Poppins',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
  }

    return (
<div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/sunset-landscape.jpg)`, backgroundPosition: 'center 0%' }}>
        <div className="flex flex-col items-center justify-center" style={{ height: 'calc(80vh - 80px)' }}> 
            <h2 className="text-7xl font-bold text-white mb-4" style={textStyle}>HELLO WORLD!</h2>
            <h3 className="text-5xl font-bold text-white mb-2" style={textStyle}>I'M JASON BRIGOU</h3>
            <p className="text-2xl text-white font-semibold"style={textStyle}>Junior Full-Stack / .NET Developer</p>
        </div>
     </div>
    )
}

export default Home


