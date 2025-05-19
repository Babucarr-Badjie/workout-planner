import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utilities";

export default function WorkoutCard(props) {
  const {
    trainingPlan,
    workoutIndex,
    type,
    dayNumber,
    icon,
    savedWeights,
    handleSave,
    handleComplete,
  } = props;

  // state variable showExerciseDescription
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);

  // destructure warmup and workout from trainingPlan
  const { warmup, workout } = trainingPlan || {};

  // weights state variable
  const [weights, setWeights] = useState(savedWeights || {});

  // handle add weight function
  function handleAddWeight(title, weight) {
    // console.log(title, weight)
    const newObject = { ...weights, [title]: weight };
    setWeights(newObject);
  }
  // showExerciseDescription
  // const showExerciseDescription = { name: "babu", description: "ok babu" };

  return (
    <div className="workout-container">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNumber}</p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2>
            <b>{type} Workout</b>
          </h2>
        </div>
      </div>
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            <React.Fragment key={warmupIndex}>
              <div className="exercise-name">
                <p>
                  {warmupIndex + 1}. {warmupExercise.name}
                </p>
                <button
                  className="help-icon"
                  onClick={() => {
                    setShowExerciseDescription({
                      name: warmupExercise.name,
                      description: exerciseDescriptions[warmupExercise.name],
                    });
                  }}
                >
                  <i className="fa-regular fa-circle-question" />
                </button>
              </div>
              <p className="exercise-info">{warmupExercise.sets}</p>
              <p className="exercise-info">{warmupExercise.reps}</p>
              <input className="weight-input" placeholder="N/A" disabled />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {workout.map((workoutExercise, wIndex) => {
          return (
            <React.Fragment key={wIndex}>
              <div className="exercise-name">
                <p>
                  {wIndex + 1}. {workoutExercise.name}
                </p>
                <button
                  className="help-icon"
                  onClick={() => {
                    setShowExerciseDescription({
                      name: workoutExercise.name,
                      description: exerciseDescriptions[workoutExercise.name],
                    });
                  }}
                >
                  <i className="fa-regular fa-circle-question" />
                </button>
              </div>
              <p className="exercise-info">{workoutExercise.sets}</p>
              <p className="exercise-info">{workoutExercise.reps}</p>
              <input
                className="weight-input"
                placeholder="12"
                value={weights[workoutExercise.name] || ""}
                onChange={(e) => {
                  handleAddWeight(workoutExercise.name, e.target.value);
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-buttons">
        <button
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
        >
          Save & Exit
        </button>
        <button
          onClick={() => {
            handleComplete(workoutIndex, { weights });
          }}
          disabled={Object.keys(weights).length !== workout.length}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
