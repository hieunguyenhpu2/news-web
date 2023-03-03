//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Sport from '~/pages/Sport';
import Bitesize from '~/pages/Bitesize';
import Search from '~/pages/Search';

//! cấu hình cho không cần đăng nhập cũng xem được
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/sport', component: Sport},
    {path: '/bitesize', component: Bitesize, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
]

// cấu hình cho phải đăng nhập mới xem được
const privateRoutes = []

export {publicRoutes, privateRoutes}