import './Users.css';
import { Link } from "react-router-dom"

function Users(props) {
    const users = props.users;
    return (
        <section>
            <div className="table-header text-center mb-1">
                <h5>Usuários</h5>
                <Link to="/newuser" className="btn btn-primary">New User</Link>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-l">
                        <th> Código </th>
                        <th> Nome </th>
                        <th> Data de Nascimento </th>
                        <th> Foto </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr className="table-l" key={user.cod}>
                                <td>{user.cod}</td>
                                <td>{user.nome}</td>
                                <td>{user.dataNasc}</td>
                                <td>{user.foto}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default Users;