import { request, api_dir } from './fetch.js';

class User {
	
    getAllUsers(){
        const url = api_dir + '/users';
		return request(url, '', 'GET');
    }

    createUser(user){
        const url = api_dir + '/user/create';
		return request(url, user, 'PUT');
    }

    editUser(user){
        const url = api_dir + '/user/edit';
		return request(url, user, 'PUT');
    }

    deleteUser(id){
        const url = api_dir + '/user/delete';
		return request(url, {id: id}, 'DELETE');
    }
}

export default User;