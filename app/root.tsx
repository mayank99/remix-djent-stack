import { Links, LinksFunction, LiveReload, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration } from 'remix';
import styles from './root.min.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'alternate icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'stylesheet', href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix Djent App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
