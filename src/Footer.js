import React from 'react'
import './styles/Footer.scss'
// import image from './images/logo2.png'
import Button from './components/Buttons'
export default function Footer() {
  return (
    <footer style={{width:'1140px', margin:'0 auto'}}>
      <section className='footer1'>
        <div className="post1">
         {/* <img src={image} alt="" />  */}
         <p className='sultan_text'>Компания «Султан» — снабжаем розничные магазины товарами 
            "под ключ" в Кокчетаве и Акмолинской области</p>
          <input className='footer-input' type="search" placeholder='Введите ваш E-mail' />
        </div>
        <div className="site_bar">
          <h4>Меню сайта:</h4>
          <a className='footer_link' href="./">О компании</a>
          <a className='footer_link' href="/About">Доставка и оплата</a>
          <a className='footer_link' href="/Contact">Корзина</a>
        </div>
        <div className="download_post">
          <h4>Скачать прайс-лист:</h4>
          <Button text='Прайс-лист' width='214px' height='59px' radius='50px'/>
        </div>

      </section>


    </footer>
  )
}
