import React, { useState } from 'react';
import './UserForm.css';

function UsersForm() {
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
            setForm({ ...form, foto: file});
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

    const handleFormChange = (param: string) => (e: any) => {
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
                <label className="imgInput">
                    Foto
                    <input
                        type="file"
                        accept="image/*"
                        onChange={showPreview}
                    />
                    <img id="blah" src="#" alt="your image" />
                </label>
                <input className="btn btn-primary btn-block mt-1" type="submit" />
            </form>
        </section>
    );
}

export default UsersForm;