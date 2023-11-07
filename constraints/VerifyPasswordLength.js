module.exports = password => {
    if (password.length < 5) {
        return Promise.reject({
            message: 'Password debe contener 5 caracteres'});
    }
    return Promise.resolve({
        message:'password is valid'});
};