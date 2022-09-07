import '../styles/Btn.scss'

export default function Button(props){

    const styles ={
       btn:{
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
       }
    }

    if(props.text == "+"){
       styles.btn.borderRadius = props.radius
        
    }else{
        <button className="btn" style={styles.btn}>{props.text}</button>

    }

    return(
        <button className="btn" style={styles.btn}>{props.text}</button>
    )
}