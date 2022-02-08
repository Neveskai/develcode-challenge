import React, { useState } from 'react';
import './UserForm.css';

const UsersForm = () => {

    const [form, setForm] = useState({
        nome: "",
        dataNasc: "",
        foto: null
    });

    const showPreview = (event) => {
        const imgInp = event.target;
        const blah = document.getElementById('blah');
        const [file] = imgInp.files;
        if (file) {
            blah.src = URL.createObjectURL(file);
            setForm({ ...form, foto: file });
        }
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
        if (form.foto === null) {
            alert("Foto inválida");
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValidation(form)) console.log("submit");
    }

    const handleFormChange = (param) => (e) => {
        setForm({ ...form, [param]: e.target.value });
    };

    return (
        <section>
            <h5 className="mt-2">User Form</h5>
            <form className="userForm" onSubmit={handleSubmit}>
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
                        onChange={showPreview}
                    />
                </label>
                <label>
                    Preview
                    <img id="blah" src="#" alt="your profile" />
                </label>
                <input className="btn btn-primary btn-block mt-1" type="submit" />
            </form>
        </section>
    );
}

export default UsersForm;