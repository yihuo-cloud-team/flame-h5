import Http from '../plugins/Http'
import jwt from './jwt'

export default function (context) {
    // localStorage.jwt = jwt.jwt;
    // localStorage.userInfo = JSON.stringify(jwt.userInfo);

    if (typeof localStorage.version_nb == 'undefined') {
            
        localStorage.version_nb = "2" ;
        if (context.route.name != 'login') {
            context.app.router.replace('/login');
        }

        return;

    }else {
        if (localStorage.version_nb != '2'){
            localStorage.version_nb = "2" ;
            if (context.route.name != 'login') {
                context.app.router.replace('/login');
            }
            return;
        }
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