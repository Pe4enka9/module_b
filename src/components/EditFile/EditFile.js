import './edit_file.css';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Input from "../Input/Input";

export default function EditFile() {
    useEffect(() => {
        document.title = 'Редактировать файл';
    }, []);

    const {id} = useParams();
    const navigate = useNavigate();

    const [files, setFiles] = useState([]);
    const [editedFile, setEditedFile] = useState({title: '', id: null});

    useEffect(() => {
        const storedFiles = localStorage.getItem('files');

        if (storedFiles) {
            const parsedFiles = JSON.parse(storedFiles);
            setFiles(parsedFiles);

            const fileToEdit = parsedFiles.find(file => file.id === Number(id));

            if (fileToEdit) {
                setEditedFile(fileToEdit);
            }
        }
    }, [id]);

    const handleInputChange = (e) => {
        const {value} = e.target;
        setEditedFile({...editedFile, title: value});
    };

    const handleSave = () => {
        const updatedFiles = files.map(f => f.id === editedFile.id ? editedFile : f);
        setFiles(updatedFiles);
        localStorage.setItem('files', JSON.stringify(updatedFiles));
        navigate('/');
    };

    if (!editedFile.id) {
        return (
            <section className="edit-file">
                <h2>Файл не найден</h2>
            </section>
        )
    }

    return (
        <section className="edit-file">
            <h1>Редактировать файл</h1>

            <div className="input-container">
                <label htmlFor="title">Название файла</label>
                <Input type="text" id="title" value={editedFile.title} onChange={handleInputChange}/>
            </div>

            <div className="edit-file__buttons">
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={() => navigate('/')}>Отмена</button>
            </div>
        </section>
    )
}