import Button from "./components/Buttons";
import "./styles/Header.scss"

export default function Header (){
    return(
        <div className="header">
            <div className="aaa" style={{width:'1140px', margin:'0 auto'}}>
                <h1>Бытовая химия, 
                косметика 
                и хозтовары
                  </h1>
                <p className="p">
                    оптом по кокчетаву и области
                </p>
                <Button text='В КАТАЛОГ' width='300px' height='95px' radius='50px'/>
                
                <div className="but">
                    <Button  text='+' width='39px' height='39px' radius='50%'/>
                    <p className="text1">Только самые <br /> выгодные предложения</p>
                    <Button  text='+' width='39px' height='39px' radius='50%'/>
                    <p className="text1">Бесплатная доставка <br /> по Кокчетаву от 10 тыс ₸</p>
                </div>
            
            </div>
           
        </div>
    )
}