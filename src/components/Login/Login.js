import {useEffect, useState} from 'react';
import '../Register/register.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {Link, useNavigate} from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Вход';
    }, []);

    const [formData, setFormData] = useState({
        login: '',
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

        if (!formData.password) {
            newErrors.password = 'Поле не может быть пустым';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate('/');
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
                    <label htmlFor='password'>Пароль</label>
                    <Input type='password' name='password' id='password' value={formData.password}
                           onChange={handleInputChange} style={{borderColor: errors.password ? '#f00' : ''}}/>
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <Button type='submit'>Войти</Button>

                <div>Ещё нет аккаунта? <Link to='/register'>Зарегистрироваться</Link></div>
            </form>
        </section>
    )
}