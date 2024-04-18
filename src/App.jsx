import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Oklahoma&appid=fd18eaa1881dbcf3aa724bcbe9ace557';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <span>City: {data?.name}</span>
      <span>Today's Temperature: {data?.main?.temp} Kelvin</span>
      <br />
      <span>Minimum Temp. :{data?.main?.temp_min}</span>
      <br />
      <span>Maximum Temp. :{data?.main?.temp_max}</span>
    </div>
  )
}

export default App
