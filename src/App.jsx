import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [showWorkouts, setShowWorkouts] = useState(false);

  // Function to handle displaying workouts when Start Now button is clicked
  const displayWorkouts = () => {
    setShowWorkouts(true);
  };
  return (
    <>
      <Layout>
        <main>
          {/* PAGE 1 */}
          <Hero
            displayWorkouts={displayWorkouts}
            startedWorkout={showWorkouts}
          />
          {showWorkouts && <Grid />}

          {/* PAGE 2 */}
          {/* <Grid /> */}
        </main>
      </Layout>
    </>
  );
}

export default App;
