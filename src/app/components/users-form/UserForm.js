import React, { useState } from 'react';
import UserService from './../../services/user.service'
import FileService from './../../services/file.service'
import './UserForm.css';

const UsersForm = () => {

    const userService = new UserService();
    const fileService = new FileService();

    const [form, setForm] = useState({
        nome: "",
        dataNasc: "",
        foto: false
    });

    const handleFormChange = (param) => (e) => {
        setForm({ ...form, [param]: e.target.value });
    };

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

    const showPreview = (event) => {
        const [file] = event.target.files;
        const img = document.getElementById('previewImg');
        if (file) img.src = URL.createObjectURL(file);
        setForm({ ...form, foto: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValidation(form)) {
            userService.createUser(form).then(cod => {
                if (form.foto) {
                    const file = document.getElementById('profileImg');
                    fileService.setProfilePicture(file.files[0], cod.cod);
                }
            })
        }
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
                <input className="btn btn-primary btn-block mt-1" type="submit" />
            </form>
        </section>
    );
}

export default UsersForm;