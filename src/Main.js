import Card from './components/Card'
import ImageSlider from './components/ImageSlider'
import Maps from './components/Maps'
import { SliderData } from './components/SliderData'

import './styles/Main.scss'
export default function Main() {
  return (
    <main style={{width:'1140px', margin:'0 auto'}}>
        <h1>Акционные товары</h1>
        <div className='grid-container'>
          <Card 
          cardTitle='AOS Ср-во для мытья посуды Апельсин+мята'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='image1.png'
          />
          <Card 
          cardTitle='AOS средство для мытья посуды Crystal'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='image 21.png'
          />
          <Card 
          cardTitle='ARIEL Автмат Гель СМС жидкое 
          в растворимых капсулах Liquid Capsules Горный родник'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='images3.png'
          />
          <Card 
          cardTitle='BIMAX Порошок стиральный Автомат 100 пятен COMPACT'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='images4.png'
          />

        </div>
        <div className='grid-container'>
          <Card 
          cardTitle='AOS Ср-во для мытья посуды Апельсин+мята'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='image1.png'
          />
          <Card 
          cardTitle='AOS средство для мытья посуды Crystal'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='image 21.png'
          />
          <Card 
          cardTitle='ARIEL Автмат Гель СМС жидкое 
          в растворимых капсулах Liquid Capsules Горный родник'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='images3.png'
          />
          <Card 
          cardTitle='BIMAX Порошок стиральный Автомат 100 пятен COMPACT'
          Штрихкод='4604049097548'
          Производитель='Нэфис'
          Бренд='AOS'
          cost='48,76 ₸'
          image='images4.png'
          />

        </div>

        <div className='galary'>
          <h1 className='galary_title'>Категории <span className='span2'>товаров</span></h1>
          <p className='galary_text'>10 000+ ходовых позиций по спецмальным ценам</p>

          <ImageSlider slides={SliderData} />

          

           <Maps />       
        </div>
    </main>
  )
}
