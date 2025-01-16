import React, { useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux';  
import './main.scss';

const Main = () => {
  const mode = useSelector((state) => state.mode.mode);  
  const [pro, setPro] = useState([]);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((res) => setPro(res));
  }, []);

  return (
    <div className={`main-container ${mode}`}>
       <div className='flex flex-wrap w-full' height={100}>
            {pro.map((item, saxta) => (
                <div key={saxta} className='w-3/12 flex justify-center'>
                    <div className='w-6/12'>
                        <h1 className='w-full'>{item.title}</h1>
                        <h2>{item.price} AZN</h2>
                        <img width={100} height={100} src={item.image} alt={item.title} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Main;
