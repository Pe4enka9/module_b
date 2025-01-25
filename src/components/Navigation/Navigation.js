import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    return (
        <nav>
            <Link to="/" className='link'>Ваши файлы</Link>
            <Link to="/register" className='link'>Регистрация</Link>
            <Link to="/login" className='link'>Вход</Link>
        </nav>
    )
}