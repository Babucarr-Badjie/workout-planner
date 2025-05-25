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
      <p>Design & written by </p>
      <a href="https://babucarr-badjie-portfolio.netlify.app/" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/93027934?v=4"
          alt=""
        />
        <p>Babucarr Badjie</p>
        <i class="fa-regular fa-address-card"></i>
      </a>
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
