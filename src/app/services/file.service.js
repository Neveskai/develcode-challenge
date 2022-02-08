import { uploadFile, file_dir } from './fetch.js';

class File {
    setProfilePicture(file, cod){
        const url = file_dir + '/setProfilePicture/'+cod;
		return uploadFile(url, file);
    }
}

export default File;