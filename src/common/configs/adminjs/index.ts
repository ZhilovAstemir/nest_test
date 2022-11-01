import { AdminModuleOptions } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import { NewsResource } from '../../../modules/news/news.entity';
import { UserResource } from '../../../modules/users/user.entity';
import locale from './locale';
import {OrderResource} from "../../../modules/orders/order.entity";

const DEFAULT_ADMIN = {
  email: 'sdfgsdfg@sdfsf.com',
  password: 'ksdjfgjfjfh',
};

const MENAGERS = {
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

export const AdminJSConfig = {
  useFactory: (): AdminModuleOptions => ({
    adminJsOptions: {
      rootPath: '/admin',
      resources: [UserResource, NewsResource, OrderResource],
      dashboard: {
        component: AdminJS.bundle(
          './components/Dashboard.tsx',
          'DashboardRoute',
        ),
      },
      branding: {
        logo: false,
        companyName: 'nest_test',
        withMadeWithLove: false,
      },
      locale,
    },
    auth: {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'secret',
    },
    sessionOptions: {
      resave: true,
      saveUninitialized: true,
      secret: 'secret',
    },
  }),
};
