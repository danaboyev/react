import logo from '../images/logo.png'
import tel from '../images/tel.png'
import Button from './Buttons'
import '../styles/Btn.scss'

export default function Regis(){
    return (
        <>
            <hr/>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>

                <img src={logo} alt='qqq' />
                <Button width='192px' height='59px' radius='50px' text='Каталог' />
                <input type='search' placeholder='Поиск...' />
                <img src={tel} alt='aaa' />
                <Button width='192px' height='59px' radius='50px' text='Прайс-лист' />
            </div>
        </>
        
    )
}