import axios from 'axios';

export default (to, from, next) => {

  if (!!to.hash) {
    localStorage.setItem('token', to.hash.split('=')[1]);
    const bodyRecord = {
      "id": 1,
      "jsonrpc": "2.0",
      "method": "User.GetCurrentUserInfo",
      "params": {},
      "protocol": 5
    };
    axios.post('https://fix-online.sbis.ru/service/?srv=1', bodyRecord, { headers: { 'X-SBISAccessToken': localStorage.getItem('token')}})
      .then(res => {
        const item = res.result
        localStorage.setItem('userSbis', JSON.stringify(item));
    })
    window.close();
  }

  if (localStorage.getItem('token') != null && localStorage.getItem('token').length > 0) {
    // verify jwt
    next()
  } else {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    next('/user/login')
  }
}
