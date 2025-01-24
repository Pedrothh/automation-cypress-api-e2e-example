import BasePage from "./BasePage";

const userNameInput = 'input[name="userName"]'
const passwordInput = 'input[name="password"]'
const submitBtn = 'input[name="submit"]'
const loginSuccessfullyMessageMapping = 'body > div:nth-child(6) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > h3:nth-child(1)'
const loginFailMessageMapping = 'body > div:nth-child(6) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3) > form > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > span'



class LoginPage extends BasePage {

  typeUserName(username) {    
    this.limparEPreencherCampo(userNameInput, username);
  }

  typePassword(password) {    
    this.limparEPreencherCampo(passwordInput, password);
  }

  pressSubmit() {    
    this.click(submitBtn);
  }

  shouldSeeTheMessage(loginMessage) {
    if (loginMessage == 'Login Successfully') {
      this.validarText(loginSuccessfullyMessageMapping, loginMessage);
    } else if (loginMessage == 'Enter your userName and password correct') {
      this.validarText(loginFailMessageMapping, loginMessage);
    }
  }
}

export default LoginPage;