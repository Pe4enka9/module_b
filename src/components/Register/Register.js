import {useEffect, useState} from 'react';
import './register.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {Link, useNavigate} from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Регистрация';
    }, []);

    const [formData, setFormData] = useState({
        login: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});

        if (value.trim() !== '') {
            setErrors((prevErrors) => {
                const updatedErrors = {...prevErrors};
                delete updatedErrors[name];
                return updatedErrors;
            });
        }
    }

    const validate = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.login) {
            newErrors.login = 'Поле не может быть пустым';
        }

        if (!formData.firstName) {
            newErrors.firstName = 'Поле не может быть пустым';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Поле не может быть пустым';
        }

        if (!formData.password) {
            newErrors.password = 'Поле не может быть пустым';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate('/login');
        }
    };


    return (
        <section className='register'>
            <form onSubmit={validate}>
                <div className='input-container'>
                    <label htmlFor='login'>Логин</label>
                    <Input type='text' name='login' id='login' value={formData.login} onChange={handleInputChange}
                           style={{borderColor: errors.login ? '#f00' : ''}}/>
                    {errors.login && <div className="error">{errors.login}</div>}
                </div>

                <div className='input-container'>
                    <label htmlFor='firstName'>Имя</label>
                    <Input type='text' name='firstName' id='firstName' value={formData.firstName}
                           onChange={handleInputChange} style={{borderColor: errors.firstName ? '#f00' : ''}}/>
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>

                <div className='input-container'>
                    <label htmlFor='lastName'>Фамилия</label>
                    <Input type='text' name='lastName' id='lastName' value={formData.lastName}
                           onChange={handleInputChange} style={{borderColor: errors.lastName ? '#f00' : ''}}/>
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>

                <div className='input-container'>
                    <label htmlFor='password'>Пароль</label>
                    <Input type='password' name='password' id='password' value={formData.password}
                           onChange={handleInputChange} style={{borderColor: errors.password ? '#f00' : ''}}/>
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <Button type='submit'>Зарегистрироваться</Button>

                <div>Уже есть аккаунт? <Link to='/login'>Войти</Link></div>
            </form>
        </section>
    )
}