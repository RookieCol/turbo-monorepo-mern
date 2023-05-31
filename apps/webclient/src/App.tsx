

function App() {
  
  return (
    <>
      
        <button onClick={async () => {
          const response = await fetch("/api")
          const data = await response.text()
          console.log(data)
        }}> Hola mundo
        </button>
        
    </>
  )
}

export default App
