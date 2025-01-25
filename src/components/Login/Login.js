import { useEffect, useState } from 'react';
import '../Register/register.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

export default function Login() {
    useEffect(() => {
        document.title = 'Вход';
    }, []);

    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const createError = (text) => {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = text;

        return error;
    };

    const validate = e => {
        const inputContainer = document.querySelectorAll('.input-container');

        if (!formData.login) {
            e.preventDefault();
            document.getElementById('login').style.borderColor = '#f00';

            inputContainer[0].append(createError('Поле не может быть пустым'));
        }

        if (!formData.password) {
            e.preventDefault();
            document.getElementById('password').style.borderColor = '#f00';

            inputContainer[1].append(createError('Поле не может быть пустым'));
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
                    <label htmlFor='password'>Пароль</label>
                    <Input type='password' name='password' id='password'
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })} />
                </div>

                <Button type='submit'>Войти</Button>

                <div>Ещё нет аккаунта? <Link to='/register'>Зарегистрироваться</Link></div>
            </form>
        </section>
    )
}