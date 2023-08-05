import '../../style/Rates.scss';
import React, { useState } from 'react';
/* import style from '../Card/style.module.scss'; */
import ratesData from '../data/rates.json';

export default function Card() {
    const [selected, setSelected] = useState(Array(ratesData.length).fill(false));
    const handleChange = (index) => {
        setSelected(prevState => prevState.map((_, i) => i === index));
        console.log('bla');
    }
    return (
        <div className="rate_wrapper">
            {ratesData.map((item, index) =>(            //перебираю массив с тарифами, добавляю классы Выбранный и для изменения бэкграунд цвета на карточках
                <div className={"rate" + (selected[index]? ' selected' : "")} key={index} onClick={() => handleChange(index)}>    {/* присваиваю класс есл итариф выбран, и вешаю обработчик онклик */}  
                    <div className={"rate_title" + (item.bgcolor ? ` ${item.bgcolor}` : "" )}>{item.name}</div> 
                    <div className={"rate_price" + (item.bgcolor ? ` light_${item.bgcolor}` : "" )}>
                        <p className='rate_currency'>руб.</p>
                        <p className='rate_number'>{item.price}</p>
                        <p className='rate_month'>/мес.</p>  
                    </div>
                    <div className="rate_speed">до {item.speed} Мбит/сек.</div>
                    <div className="rate_traffic">Обьем включенного траффика не ограничен</div>
                </div>
                ))
            }
            </div>
    );
}
