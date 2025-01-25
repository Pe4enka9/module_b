import './list_file.css';
import Button from '../Button/Button';
import {Link} from "react-router-dom";

export default function ListFile({title, id, onClick}) {
    return (
        <div className='file'>
            <div className='file__img'></div>

            <h2>{title}</h2>
            <h3>Идентификатор: {id}</h3>

            <div className='file__buttons'>
                <Link to={`/edit/${id}`}>
                    <Button>Редактировать</Button>
                </Link>
                <Button onClick={() => onClick(id)}>Удалить</Button>
                <Button>Изменить права</Button>
            </div>
        </div>
    )
}