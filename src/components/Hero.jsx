export default function Hero(props) {
  // destructure displayWorkouts and startedWorkout from props
  const { displayWorkouts, startedWorkout } = props;
  return (
    <>
      <h5>Complete this training program if you want to ...</h5>
      <div className="benefits-list">
        <p>✅ Follow a simple program with guaranteed results.</p>
        <p>✅ Get fit, healthy, strong and shredded.</p>
        <p>✅ Learn more about the gym, training and technique.</p>
        <p>✅ Build lasting gym confidence 🦾</p>
      </div>

      {/* rules*/}
      <h3>The Rules</h3>
      <p>
        To complete this program, you <b>MUST</b> follow these 3 simple rules:
      </p>
      <ul className="rule-list">
        <div className="rule-item">
          <p>
            <b>Rest</b>
          </p>
          <p>
            Every rep is a pause rep following a{" "}
            <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">
              2 - 2 - 2 tempo
            </abbr>
          </p>
        </div>
        <div className="rule-item">
          <p>
            <b>Reps</b>
          </p>
          <p>Ensure that you are taking rest days where necessary</p>
        </div>
        <div className="rule-item">
          <p>
            <b>Weight*</b>
          </p>
          <p>
            Select the maximum weight that allows you to complete the set with
            good form
          </p>
        </div>
      </ul>
      <small>
        * The first and second set should be at 75% and 85% of your working
        weight used for the last two sets.{" "}
      </small>
      <h3>The Training Plan</h3>
      <p>
        This training plan uses a structure known as the{" "}
        <abbr title="training one major muscle group per day, such as chest, back, shoulders, legs, and arms">
          <b>Bro Split</b>
        </abbr>
        , and follows this rotation ⬇️
      </p>
      <p>
        <b>
          <i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i>
        </b>
      </p>
      <div className="card challenge">
        <h3>🔥Your Challenge</h3>
        <p>
          Complete all of the workouts and track your progress along the way ✅
        </p>
        <button onClick={displayWorkouts} disabled={startedWorkout}>
          Start Now &rarr;
        </button>
      </div>
    </>
  );
}
