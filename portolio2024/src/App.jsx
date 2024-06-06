import { useState,useEffect } from 'react'
import Home from './Pages/Home';

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <div>
          <Home />
        </div>
      {/* )} */}
    </div>
  );
}

export default App
