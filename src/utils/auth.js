import { AUTH, SNACKBAR } from '../constants';
import { renderManagerView, renderUserView } from '../router';
import showSnackbar from './showSnackbar';

const setLoginedUser = (userInfo) => {
  localStorage.setItem('userAuth', JSON.stringify(userInfo));
};

export const signup = async (email, name, password) => {
  const url = 'https://woowa-vendingmachine-app.herokuapp.com/signup/';
  const userInfo = {
    email,
    name,
    password,
  };

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    if (!res.ok) {
      return await res.text().then((text) => {
        throw new Error(text);
      });
    }
    const response = await res.json();

    const userAuth = {
      accessToken: response.accessToken,
      id: response.user.id,
    };
    setLoginedUser(userAuth);
    renderManagerView();
    showSnackbar(SNACKBAR.SIGNUP_SUCCESS);
  } catch (error) {
    if (error.message === '"Email already exists"') {
      alert(AUTH.EMAIL_ALREADY_EXISTS);
    }
  }
};

export const login = async (email, password) => {
  const url = 'https://woowa-vendingmachine-app.herokuapp.com/login';
  const userInfo = {
    email,
    password,
  };
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    if (!res.ok) {
      return await res.text().then((text) => {
        throw new Error(text);
      });
    }
    const response = await res.json();
    const userAuth = {
      accessToken: response.accessToken,
      id: response.user.id,
    };
    setLoginedUser(userAuth);
    renderManagerView();
    showSnackbar(SNACKBAR.LOGIN_SUCCESS);
  } catch (error) {
    if (error.message === '"Cannot find user"') {
      alert(AUTH.CANNOT_FIND_USER);
    }
    if (error.message === '"Incorrect password"') {
      alert(AUTH.INCORRECT_PASSWORD);
    }
    if (error.message === '"Password is too short"') {
      alert(AUTH.PASSWORD_IS_TOO_SHORT);
    }
  }
};

export const logout = () => {
  localStorage.removeItem('userAuth');
  showSnackbar(SNACKBAR.LOGOUT_SUCCESS);
  renderUserView();
};

export const modifyUserInfo = async (email, name, password) => {
  const userInfo = JSON.parse(localStorage.getItem('userAuth'));
  const { id } = userInfo;
  const accessToken = `Bearer ${userInfo.accessToken}`;
  const url = `https://woowa-vendingmachine-app.herokuapp.com/600/users/${id}`;
  const newUserInfo = {
    email,
    name,
    password,
  };

  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(newUserInfo),
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  });

  try {
    if (!res.ok) {
      return await res.text().then((text) => {
        throw new Error(text);
      });
    }
    renderManagerView();
    showSnackbar(SNACKBAR.MODIFY_SUCCESS);
  } catch (error) {
    alert(error);
  }
};
