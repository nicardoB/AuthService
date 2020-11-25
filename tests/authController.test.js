`use strict`

const controller = require (`./../controllers/authController`);

test (`login with no params returns false`, () => {
    expect (controller.login()).toBe(false);
});

test (`login with invalid credentials returns false`, () => {
    expect (controller.login(`nick`, `1235`)).toBe(false);
});

test (`login with valid returns true`, () => {
    expect (controller.login(`nick`, `1234`)).toBe(true);
});