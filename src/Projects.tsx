import styles from './styles/Projects/Projects.module.scss';

function Projects () {
  return (
    <>
      <div class={styles.wrapper}>
        {/* TODO: Make a sidebar. */}
        <div class={styles.sidebar}>
          I'm just a sidebar, don't mind me.
          <br />
          Look at me, being a sidebar.
        </div>
        <div class={styles.container}>
          {/* TODO: Actually write projects. */}
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
