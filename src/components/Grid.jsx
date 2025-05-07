import { workoutProgram as training_plan } from "../utilities";
import WorkoutCard from "./WorkoutCard";

export default function Grid() {
  const isLocked = true;

  //   selectedWorkout
  const selectedWorkout = 4;

  return (
    <div className="training-grid-plan">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        // type
        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        // training plan
        const trainingPlan = training_plan[workoutIndex];

        // if condition to check if the workout is selected
        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              workoutIndex={workoutIndex}
              type={type}
            />
          );
        }

        return (
          <button
            className={"card plan-card " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>
                Day{" "}
                {workoutIndex / 8 <= 1
                  ? "0" + (workoutIndex + 1)
                  : workoutIndex + 1}
              </p>
            </div>
            {isLocked ? (
              <i className="fa-solid fa-lock"></i>
            ) : workoutIndex % 3 === 0 ? (
              <i className="fa-solid fa-dumbbell"></i>
            ) : workoutIndex % 3 === 1 ? (
              <i className="fa-solid fa-weight-hanging"></i>
            ) : (
              <i className="fa-solid fa-bolt"></i>
            )}
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
