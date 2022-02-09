import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { file_dir } from './../../services/fetch.js'
import UserService from './../../services/user.service'
import FileService from './../../services/file.service'
import './UserForm.css';

function boolval(val) {
    if (val == 0) return false;
    return true;
}

const UsersForm = () => {

    let navigate = useNavigate();
    const { state } = useLocation();
    const userService = new UserService();
    const fileService = new FileService();

    const [btnLock, setBtnLock] = useState(false);
    const [form, setForm] = useState({
        dataNasc: "",
        nome: "",
        foto: false,
        cod: 0
    });

    useEffect(() => {
        if (state !== null) {
            state.user.foto = boolval(state.user.foto);
            setForm({ ...state.user });
            document.getElementById('previewImg').src = file_dir + '/users/' + state.user.foto;
        }
    }, [state])

    const handleFormChange = (param) => (e) => {
        setForm({ ...form, [param]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBtnLock(true);
        if (formValidation(form)) {
            const file = document.getElementById('profileImg');
            if (state === null) {
                userService.createUser(form).then(cod => {
                    if (file.files[0] !== undefined) fileService.setProfilePicture(file.files[0], cod.cod);
                    setBtnLock(false);
                    navigate('/users');
                })
            } else {
                userService.editUser(form).then(cod => {
                    if (file.files[0] !== undefined) fileService.setProfilePicture(file.files[0], cod.cod);
                    setBtnLock(false);
                    navigate('/users');
                })
            }
        } else {
            setBtnLock(false);
        }
    }

    const showPreview = (event) => {
        const [file] = event.target.files;
        const img = document.getElementById('previewImg');
        if (file) img.src = URL.createObjectURL(file);
        setForm({ ...form, foto: true });
    }
    
    const formValidation = (form) => {
        if (form.nome === "") {
            alert("Nome inválido");
            return false;
        }
        if (form.dataNasc === "") {
            alert("Data de Nascimento inválida");
            return false;
        }
        return true;
    }

    return (
        <section>
            <h5 className="mt-2">User Form</h5>
            <form className="userForm" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                <label>
                    Nome
                    <input
                        type="text"
                        className="form-control"
                        value={form.nome}
                        onInput={handleFormChange("nome")}
                    />
                </label>
                <label>
                    Data de Nascimento
                    <input type="date"
                        className="form-control"
                        value={form.dataNasc}
                        onInput={handleFormChange("dataNasc")}
                    />
                </label>
                <label>
                    Foto
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control mb-1"
                        id="profileImg"
                        onChange={showPreview}
                    />
                </label>
                <label>
                    Preview
                    <img id="previewImg" src="#" alt="your profile" />
                </label>
                <input className="btn btn-primary btn-block mt-1" type="submit" disabled={btnLock} />
            </form>
        </section>
    );
}

export default UsersForm;