import { useEffect } from 'react';
import ListFile from '../ListFile/ListFile';
import './list_files.css';

export default function ListFiles() {
    useEffect(() => {
        document.title = 'Ваши файлы';
    }, []);

    const files = [
        {
            title: 'Название',
            id: 1,
        },
        {
            title: 'Название',
            id: 2,
        },
        {
            title: 'Название',
            id: 3,
        },
        {
            title: 'Название',
            id: 4,
        },
    ];

    return (
        <section className="list-files">
            <h1>Ваши файлы</h1>

            <div className='list-files__container'>
                {files.map(file => (
                    <ListFile title={file.title} id={file.id} key={file.id} />
                ))}
            </div>
        </section>
    )
}