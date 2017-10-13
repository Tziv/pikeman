const fs = require('fs');

const secretKeyProvider = {
    getSecretKey: getSecretKey
};

function getSecretKey() {
    return new Promise((resolve, reject) => {
        fs.readFile('../secret.key', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

module.exports = secretKeyProvider;