import '../../style/Rates.css';
import ratesData from './data/rates.json';

export default function Card() {
    return (
        <div className="rate_wrapper">
            {ratesData.map((item, index) =>(            //перебираю массив с тарифами, добавляю классы Выбранный и для изменения бэкграунд цвета на карточках
                <div className={"rate" + (item.isSelected? " selected" : "")} key={index}>      
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


/* 
export default function Rates() {
    return (
        <div>
            {rateArr.map((item, index) =>
            <Rate key={index} rateName={item.name} price={item.price} speed={item.speed} color={item.bgcolor}/>)}
        </div> */