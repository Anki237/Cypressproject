import OrangeLogin from "../../support/pageobjects/orangehrm/orangehrmlogin";
import OrangeLogout from "../../support/pageobjects/orangehrm/orangehrmlogout";
import Link from "../../support/pageobjects/orangehrm/link";

describe('orangehrm1', () => {
    const login1=new OrangeLogin();
    const link1= new Link();
    const logout1=new OrangeLogout();
    it('loginhrm', () => {
        login1.visiturl1();
        login1.loginDetails();
    });
    it('test1', () => {
        login1.visiturl1();
        login1.loginDetails();
        link1.linkClick('Admin');

    });
    it('logouthrm', () => {
        login1.visiturl1();
        login1.loginDetails();
        link1.linkClick('Admin');

       
        logout1.logout2();
    });
});
   
