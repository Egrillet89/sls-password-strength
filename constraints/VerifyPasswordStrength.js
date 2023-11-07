const zxcvbn = require('zxcvbn');

module.exports = password => {
    const score = zxcvbn(password).score;
    if (score < 2) {
        return Promise.reject({
            score,
            message: 'Password débil'
        });
    }
    return Promise.resolve({
        score,
        message: 'Password fuerte'
    });
};