import img1 from'./images/icon.png'
import img2 from './images/icon2.png'
import {Link} from 'react-router-dom'
import './styles/Navbar.scss'
import Regis from './components/Regis'
 
export default function NavBar(){
    return(
        <div style={{width:'1140px', margin:'0 auto'}}>
            < div className='nav'>
                <div className='location'>
                <img className='image' src={img1} alt='qwe'/>
                <p className='text'>г. Кокчетав, ул. Ж. Ташенова 129Б  <br />
                 <span className='span1'> Рынок Восточный</span></p>
                 <img className='image' src={img2} alt='qwe'/>
                    <p className='text' >opt.sultan@mail.ru <br />
                 <span className='span1'>На связи в любое время</span></p>
                 </div>
                 <nav>
                <Link className='link' to='/'>О компании</Link>
                <Link className='link' to='/about'>Доставка и оплата</Link>
                <Link className='link' to='/contact'>Корзина</Link>
                </nav>

             </div>
            <Regis />
        </div>
       
    )
}