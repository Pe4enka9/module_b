import './input.css';

export default function Input({type, value, onChange, name = null, id = null, style = null}) {
    return <input type={type} name={name} id={id} value={value} onChange={onChange} style={style}/>
}