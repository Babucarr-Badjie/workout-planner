import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import AuthModal from "./authComponents/AuthModal";
import { useEffect, useState } from "react";
import WorkoutProgress from "./components/WorkoutProgress";

function App() {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  // Check for user in localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Function to handle displaying workouts when Start Now button is clicked
  const displayWorkouts = () => {
    if (!user) {
      setShowAuthModal(true); // Show modal if not logged in
    } else {
      setShowWorkouts(true); // Show workouts if logged in
    }
  };

  // Handle successful login/signup
  const handleAuth = (userData) => {
    setUser(userData);
    setShowWorkouts(true);
    setShowAuthModal(false);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setShowWorkouts(false);
    // Do NOT remove users from localStorage!
  };

  return (
    <>
      <header style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user && (
          <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
            Logout
          </button>
        )}
      </header>
      <Layout>
        <main>
          <Hero
            displayWorkouts={displayWorkouts}
            startedWorkout={showWorkouts}
          />
          {showWorkouts && <Grid />}

          {showAuthModal && (
            <AuthModal
              onClose={() => setShowAuthModal(false)}
              onAuth={handleAuth}
            />
          )}

          {user && <WorkoutProgress user={user} />}
        </main>
      </Layout>
    </>
  );
}

export default App;
