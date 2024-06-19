import BasePage from "./BasePage";

const userNameInput = 'input[name="userName"]'
const passwordInput = 'input[name="password"]'
const submitBtn = 'input[name="submit"]'
const loginSuccessfullyMessageMapping = 'body > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > h3:nth-child(1)'



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

  shouldSeeTheMessageLoginSuccessfully(loginSuccessfullyMessage) {    
    this.validarText(loginSuccessfullyMessageMapping, loginSuccessfullyMessage);
  }
}

export default LoginPage;