class AuthorizationStrategy {
    constructor() {
        if (this.constructor === AuthorizationStrategy) {
            throw new Error('You must use an implementation of an authorizer');
        }
    }

    authorize(arguments) {
        if (this.constructor === AuthorizationStrategy) {
            throw new Error('You must implement this method!');
        }
    }
}