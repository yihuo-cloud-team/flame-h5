import Http from '../plugins/Http'
import jwt from './jwt'

export default function (context) {
    // localStorage.jwt = jwt.jwt;
    // localStorage.userInfo = JSON.stringify(jwt.userInfo);

    let v = '5';

    if (localStorage.version_nb != v) {
        localStorage.version_nb = v;
        if (context.route.name != 'login') {
            context.app.router.replace('/login');
        }
        return;
    }


    if (typeof localStorage.jwt == 'undefined') {
        // 未登录
        if (context.route.name != 'login') {
            context.app.router.replace('/login');
        }

    } else {

        return new Promise(async (next) => {
            try {
                next();
            } catch (e) {
                console.warn(e);
                console.warn('验证失败！');
                // context.app.router.replace('/login');
            }
        });
    }
}