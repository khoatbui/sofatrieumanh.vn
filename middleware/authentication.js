export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.login.loginStatus) {
    return redirect('/admin/login');
  } else {
  }
}
