import { useEffect, useState } from 'react';
import './register.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Link, useNavigate } from 'react-router-dom';

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

    const createError = (text) => {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = text;

        return error;
    };

    const validate = e => {
        let isValid = false;
        const inputContainer = document.querySelectorAll('.input-container');

        if (!formData.login) {
            e.preventDefault();
            document.getElementById('login').style.borderColor = '#f00';

            inputContainer[0].append(createError('Поле не может быть пустым'));
            isValid = true;
        }

        if (!formData.firstName) {
            e.preventDefault();
            document.getElementById('firstName').style.borderColor = '#f00';

            inputContainer[1].append(createError('Поле не может быть пустым'));
            isValid = true;
        }

        if (!formData.lastName) {
            e.preventDefault();
            document.getElementById('lastName').style.borderColor = '#f00';

            inputContainer[2].append(createError('Поле не может быть пустым'));
            isValid = true;
        }

        if (!formData.password) {
            e.preventDefault();
            document.getElementById('password').style.borderColor = '#f00';

            inputContainer[3].append(createError('Поле не может быть пустым'));
            isValid = true;
        }

        if (isValid) {
            navigate('/login');
        }
    };


    return (
        <section className='register'>
            <form onSubmit={validate}>
                <div className='input-container'>
                    <label htmlFor='login'>Логин</label>
                    <Input type='text' name='login' id='login'
                        value={formData.login}
                        onChange={e => setFormData({ ...formData, login: e.target.value })} />
                </div>

                <div className='input-container'>
                    <label htmlFor='firstName'>Имя</label>
                    <Input type='text' name='firstName' id='firstName'
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                </div>

                <div className='input-container'>
                    <label htmlFor='lastName'>Фамилия</label>
                    <Input type='text' name='lastName' id='lastName'
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                </div>

                <div className='input-container'>
                    <label htmlFor='password'>Пароль</label>
                    <Input type='password' name='password' id='password'
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })} />
                </div>

                <Button type='submit'>Зарегистрироваться</Button>

                <div>Уже есть аккаунт? <Link to='/login'>Войти</Link></div>
            </form>
        </section>
    )
}