export default (to, from, next) => {

  if (!!to.hash && to.hash[0] !== '/') {
    localStorage.setItem('sbisToken', to.hash.split('=')[1]);
    
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