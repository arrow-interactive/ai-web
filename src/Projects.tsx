import styles from './styles/Projects/Projects.module.scss';

function Projects () {
  return (
    <>
      <div class={styles.wrapper}>
        <div class={styles.sidebar}>
          Sidebar
        </div>
        <div class={styles.container}>
          <p>
            Arrow Interactive is an sub-organization of FOSSBAY dedicated towards
            making open-source game related technologies, such as game engines.
            However, Arrow Interactive also maintains static website generation tools.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
