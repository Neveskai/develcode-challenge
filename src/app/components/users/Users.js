import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from './../../../store/store.user'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { file_dir } from './../../services/fetch.js'
import UserService from './../../services/user.service'
import './Users.css'

function Users() {
    const userService = new UserService();
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    //Start All Users
    useEffect(() => {
        const p = userService.getAllUsers();
        p.then(users => dispatch(setUsers(users)));
    })

    const editUser = (user) => {
        navigate('/useredit', { state: { user: user } });
    }

    const delUser = (id) => {
        if (window.confirm("Deseja realmente excluir o usuário de id: " + id + " ?")) {
            userService.deleteUser(id);
        }
    }

    return (
        <section>
            <div className="table-header text-center mb-1">
                <h5>Usuários</h5>
                <Link to="/userform" className="btn btn-primary">New User</Link>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-l">
                        <th> Código </th>
                        <th> Nome </th>
                        <th> Data de Nascimento </th>
                        <th> Foto </th>
                        <th> Editar</th>
                        <th> Excluir </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr className="table-l" key={user.cod}>
                                <td>{user.cod}</td>
                                <td>{user.nome}</td>
                                <td>{user.dataNasc}</td>
                                <td><img alt="profile" className="profilePicture" src={file_dir + '/users/' + user.foto} /></td>
                                <td><FontAwesomeIcon className="btn-hover" onClick={() => { editUser(user) }} icon={faPencilAlt} /></td>
                                <td><FontAwesomeIcon className="btn-hover" onClick={() => { delUser(user.cod) }} icon={faTrashAlt} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default Users;