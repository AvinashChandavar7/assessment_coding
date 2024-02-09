
import { useState } from 'react';
import './Faq.css'
import FaqData from '../../json/faq.json'

const Faq = () => {


  // eslint-disable-next-line no-unused-vars
  const [Faq, setFaq] = useState(FaqData);
  const [display, setDisplay] = useState(false);

  const handleClick = (id) => {
    setDisplay((prevId) => (prevId === id ? null : id));
  };





  const menu = Faq.data.menu.map((item) => (
    <div key={item.id} className='accordion'>
      {
        item.items.length !== 0 ? <>
          {
            item.items.map((i) => (

              <div key={i.id} className='accordion__container ' >
                <div
                  className={`accordion__container--title ${display === i.id ? 'active' : ''}`}
                  onClick={() => handleClick(i.id)}
                >{i.name}</div>

                {
                  display === i.id &&
                  <div className='accordion__container--body'>
                    {i.description}
                  </div>
                }
              </div>
            ))
          }

        </> :
          <>
            <div className='accordion__container '  >
              <div className={`accordion__container--title `} >{item.name}</div>
              {
                item.description && (

                  <div className='accordion__container--body'>
                    {item.description}
                  </div>
                )
              }
            </div>
          </>
      }
    </div>
  ))




  return (
    <section className='faq__container'>
      <div className='faq__header'>
        <h1>FAQ</h1>
      </div>
      {menu}
    </section>
  )
}

export default Faq