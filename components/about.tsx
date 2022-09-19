import { DATE, TIME } from '@lib/constants';
import styleUtils from './utils.module.css';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <p>
        Ory Summit is a global, free, and hybrid conference around identity management for the Ory
        Community - users, developers, contributors, partners, and everyone else who is passionate
        about the future of cloud networking.
      </p>
      <p>
        Topics are focused on but not limited to authentication, authorization, access control, and
        security.
      </p>
      <h2 className={styles.infosmall}>{DATE}</h2>
      <p className={styles.info}>Starts at {TIME}</p>
      <h2>The themes</h2>
      <ul>
        <li>
          <strong>Ory implementation -</strong> how to implement Ory into an application/project
        </li>
        <li>
          <strong>Ecosystem & Integration -</strong> how to use Ory with third-party solutions
        </li>
        <li>
          <strong>Community Talks -</strong> learn from Ory Community members
        </li>
        <li>
          <strong>Teams & Workflow -</strong> how Ory is making software teams more effective
        </li>
        <li>
          <strong>Concept Talks -</strong> authorization & authentication, open source, cloud
          architecture & security, and more.
        </li>
      </ul>
      <h2>How can i attend</h2>
      <p>
        There are two options to attend Ory Summit 2022:
        <ul>
          <li>
            {' '}
            Watch the sessions live online at <a href="./stage/main">summit.ory.sh.</a>
          </li>
          <li>Attend the event live in the Ory Headquarters in Munich, Germany.</li>
        </ul>
        <a href="https://share-eu1.hsforms.com/1JJOxdq5jQ9qSwS2ZrCAYfQextgn">Fill out this form</a>{' '}
        if you would like to attend the event live in Munich.
      </p>
      <h2>Why Ory Summit</h2>
      <ul>
        <li>Code examples and answers from the experts</li>
        <li>Expand your network and get in touch with Ory engineers</li>
        <li>Learn about cloud security best practices</li>
        <li>Get inspired by tech pioneers and industry leaders</li>
        <li>Level up your skills by engaging in tech talks delivered by proven experts.</li>
      </ul>
      <p>
        For all general inquiries, please contact: <a href="mailto:office@ory.sh">office@ory.sh</a>
      </p>
    </div>
  );
}
