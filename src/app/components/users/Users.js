import './Users.css';
import { Link } from 'react-router-dom'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { file_dir } from './../../services/fetch.js'

function Users(props) {
    const users = props.users;

    const editUser = (id) => {
        console.log("open form to edit"+ id)
    }

    const delUser = (id) => {
        if (window.confirm("Deseja realmente excluir o usuário de id: "+id+" ?")) {
            console.log("deleted");
        } else {
            console.log("cancel")
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
                    {users.map(user => {
                        return (
                            <tr className="table-l" key={user.cod}>
                                <td>{user.cod}</td>
                                <td>{user.nome}</td>
                                <td>{user.dataNasc}</td>
                                <td><img className="profilePicture" src={file_dir+'/users/'+user.foto} /></td>
                                <td><FontAwesomeIcon onClick={()=>{ editUser(user)}} icon={faPencilAlt} /></td>
                                <td><FontAwesomeIcon onClick={()=>{ delUser(user)}} icon={faTrashAlt} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default Users;