`use strict`

module.exports = {
    login:(un, pw) => {
        if (un === `nick` && pw === `1234`){
            return true;
        }
        return false;
    }
};