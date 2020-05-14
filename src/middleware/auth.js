import Http from '../plugins/Http'
import jwt from './jwt'

export default function (context) {
    localStorage.jwt = jwt.jwt;

    let v = '6';

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


            if (typeof localStorage.userInfo == 'undefined') {
                try {
                    const res = await Http.post('/user/save_info', {});
                    localStorage.userInfo = JSON.stringify(res.data);
                    localStorage.user_id = res.data.id;

                } catch (e) {
                    console.error(e);
                    console.error('验证失败！');
                    context.app.router.replace('/login');
                    return;
                }
                next();
            } else {
                next();
            }

        });
    }
}