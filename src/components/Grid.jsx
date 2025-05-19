import { useEffect, useState } from "react";
import { workoutProgram as training_plan } from "../utilities";
import WorkoutCard from "./WorkoutCard";

export default function Grid() {
  // saved workout state variable
  const [savedWorkouts, setSavedWorkouts] = useState(null);

  // completed workout array
  const completedWorkout = Object.keys(savedWorkouts || {}).filter((val) => {
    const entry = savedWorkouts[val];
    return entry.isComplete;
  });

  // const isLocked = false;

  //   selectedWorkout
  // const selectedWorkout = 4;

  // selectedWorkout state variable
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // handle save workout function
  function handleSave(index, data) {
    // save to local storage and modify the saved Workouts state variable
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete,
      },
    };

    // invoke setter function and write to local storage
    setSavedWorkouts(newObj);
    localStorage.setItem("workoutPlanner", JSON.stringify(newObj));
    setSelectedWorkout(null);
  }

  // handle completed workout function
  function handleComplete(index, data) {
    // complete the workout and modify the completedWorkout array
    const newObj = { ...data };
    newObj.isComplete = true;
    handleSave(index, newObj);
  }

  // useEffect to check if there is a saved workout in local storage
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let savedData = {};
    if (localStorage.getItem("workoutPlanner")) {
      savedData = JSON.parse(localStorage.getItem("workoutPlanner"));
    }
    setSavedWorkouts(savedData);
  }, []);

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        // isLocked variable to check if the workout is locked
        const isLocked =
          workoutIndex === 0
            ? false
            : !completedWorkout.includes(`${workoutIndex - 1}`);

        console.log(workoutIndex, isLocked);

        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        // training plan
        const trainingPlan = training_plan[workoutIndex];

        // day number variable
        const dayNumber =
          workoutIndex / 8 <= 1 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        //   icon variable
        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        // if condition to check if the workout is selected
        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              workoutIndex={workoutIndex}
              type={type}
              dayNumber={dayNumber}
              icon={icon}
              handleSave={handleSave}
              handleComplete={handleComplete}
              savedWeights={savedWorkouts?.[workoutIndex]?.weights}
            />
          );
        }

        return (
          <button
            className={"card plan-card " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
            // add onClick to set selectedWorkout to workoutIndex
            onClick={() => {
              // check if the workout is locked
              if (isLocked) {
                return;
              }
              setSelectedWorkout(workoutIndex);
            }}
          >
            <div className="plan-card-header">
              <p>Day {dayNumber}</p>
            </div>
            {isLocked ? <i className="fa-solid fa-lock"></i> : icon}
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
