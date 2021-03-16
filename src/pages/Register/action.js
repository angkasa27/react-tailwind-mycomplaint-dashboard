import { registerUser } from '../../utils/fetch';
import { setToken } from '../../utils/storage';

export function register(data, setResponse) {
  registerUser(data)
    .then((res) => {
      if (res.data.accessToken) {
        setToken(res.data.accessToken);
        return setResponse({ success: true, message: 'SUKSES' });
        // location.href = `/`;
      } else {
        console.log(res.message);
        return setResponse({ success: false, message: res.message });
      }
    })
    .catch((err) => {
      console.log(err);
      return setResponse({
        success: false,
        message: 'Silahkan Hubungi Developer',
      });
      // dispatch(loginFailedAction(message));
      // dispatch(loadingAction(false));
    });
}
