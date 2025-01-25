import {useEffect, useState} from 'react';
import ListFile from '../ListFile/ListFile';
import './list_files.css';

export default function ListFiles() {
    useEffect(() => {
        document.title = 'Ваши файлы';
    }, []);

    const [files, setFiles] = useState([]);

    useEffect(() => {
        const storedFiles = localStorage.getItem('files');

        if (storedFiles) {
            setFiles(JSON.parse(storedFiles));
        } else {
            setFiles([
                {title: 'Название', id: 1,},
                {title: 'Название', id: 2,},
                {title: 'Название', id: 3,},
                {title: 'Название', id: 4,},
            ]);
        }
    }, []);

    const saveToLocalStorage = (updatedFiles) => {
        localStorage.setItem('files', JSON.stringify(updatedFiles));
    };

    const handleDeleteFile = (id) => {
        const updatedFiles = files.filter(file => file.id !== id);
        setFiles(updatedFiles);
        saveToLocalStorage(updatedFiles);
    };

    return (
        <section className="list-files">
            <h1>Ваши файлы</h1>

            <div className='list-files__container'>
                {files.map(file => (
                    <ListFile title={file.title} id={file.id} key={file.id} onClick={handleDeleteFile}/>
                ))}
            </div>
        </section>
    )
}