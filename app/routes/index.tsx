import { LinksFunction } from 'remix';
import styles from './index.min.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Index() {
  return (
    <main>
      <h1>
        Remix <em>Djent</em> Stack
      </h1>

      <section>
        <h2>Remix-specific links</h2>
        <ul>
          <li>
            <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
              Remix Docs
            </a>
          </li>
          <li>
            <a target='_blank' href='https://remix.run/stacks' rel='noreferrer'>
              Remix Stacks
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Some djent music while you're here</h2>
        <ul>
          <li>
            <a target='_blank' href='https://www.youtube.com/watch?v=0jpOBd949O4' rel='noreferrer'>
              <em>Physical Education</em> - Animals As Leaders
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.youtube.com/watch?v=QNvsMEZqt5Y' rel='noreferrer'>
              <em>Picayune</em> - Satyr
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
