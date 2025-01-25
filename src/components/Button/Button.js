import './button.css';

export default function Button({ children, type = 'button', onClick = null }) {
    return <button type={type} onClick={onClick}>{children}</button>
}