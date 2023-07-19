import '../style/Rates.css';

function Rates(props) {
    return ( 
            <div className="unlimited">
                <div className="rate_title">{props.name}</div>
                <div className="rate_price">
                    <p className='rate_currency'>руб.</p>
                    <p className='rate_number'>{props.price}</p>
                    <p className='rate_month'>/мес.</p>  
                </div>
                <div className="rate_speed">до {props.speed} Мбит/сек.</div>
                <div className="rate_traffic">Обьем включенного траффика не ограничен</div>
            </div>
    );
}

export default Rates;