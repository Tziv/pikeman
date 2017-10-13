class Authorizer {
    constructor() {
        if (this.constructor === Authorizer) {
            throw new Error('You must use an implementation of an authorizer');
        }
    }

    authorize(arguments) {
        if (this.constructor === Authorizer) {
            throw new Error('You must implement this method!');
        }
    }
}

module.exports = Authorizer;