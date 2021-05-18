import { Redirect, Route } from 'react-router-dom'
import useAuth from '../hook/useAuth'

export default function PrivateRoute(props) {
    let { login } = useAuth()

    if (!login) {
        setTimeout(() => {
            document.querySelector('.popup-login').style.display = 'flex'
        }, 500);

        return <Route>
            <Redirect path="/" />
        </Route>
    }
    return <Route {...props} />
}
