import './list_file.css';
import Button from '../Button/Button';

export default function ListFile({title, id, onClick}) {
    return (
        <div className='file'>
            <div className='file__img'></div>

            <h2>{title}</h2>
            <h3>Идентификатор: {id}</h3>

            <div className='file__buttons'>
                <Button>Редактировать</Button>
                <Button onClick={() => onClick(id)}>Удалить</Button>
                <Button>Изменить права</Button>
            </div>
        </div>
    )
}