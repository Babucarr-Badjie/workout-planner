export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <h1 className="text-gradient">Workout Planner</h1>
      <p>
        <strong>The 30 Simple Workouts Program</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>
        Design & written by{" "}
        <a
          href="https://babucarr-badjie-portfolio.netlify.app/"
          target="_blank"
        >
          Babucarr Badjie
        </a>
      </p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
