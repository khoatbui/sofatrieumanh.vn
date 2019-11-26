export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.login.loginStatus) {
    console.log(store.state.login.loginStatus);
    return redirect('/admin/login');
  } else {
    console.log(store.state.login.loginStatus);
    console.log('Da dang nhap thanh cong');
  }
}
