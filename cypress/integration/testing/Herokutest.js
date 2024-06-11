import LoginPage from "../../support/pageobjects/herroku/login";
describe('Herroku1', () => {
    const login=new LoginPage();
    it('Test1', () => {
        login.visiturl();
        login.login();
    });
});