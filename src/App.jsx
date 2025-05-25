import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Layout>
        <main>
          {/* PAGE 1 */}
          <Hero />

          {/* PAGE 2 */}
          <Grid />
        </main>
      </Layout>
    </>
  );
}

export default App;
