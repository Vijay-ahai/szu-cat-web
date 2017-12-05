import more from '../src/components/notif_more'
import home from './components/Home'
const routers = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/notif_more',
    name: 'notif_more',
    component: more
  }

]
export default routers
