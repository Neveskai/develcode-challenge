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
}

export default User;