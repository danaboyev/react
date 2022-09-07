import Button from '../components/Buttons'
import '../styles/Card.scss'
export default function Card (props){
    return(
        <div className="card">
            <p className='green'>ПОПУЛЯРНОЕ</p>
            <img src={`/images/${props.image}`} />
            <p>
               Название: <span>{props.cardTitle}</span>
            </p>
            <p>
                Штрихкод: <span>{props.Штрихкод}</span>
            </p>
            <p>
                Производитель: <span>{props.Производитель}</span>
            </p>
            <p>
                Бренд: <span>{props.Бренд}</span>
            </p>
            <h6 className="flex">
                {props.cost} <Button  text='В КОРЗИНУ' width='143px' height='32px' radius='80px'/>
            </h6>

        </div>
    )
}