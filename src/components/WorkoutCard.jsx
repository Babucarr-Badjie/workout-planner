export default function WorkoutCard(props) {

  const {trainingPlan, workoutIndex, type} = props;

  // destructure warmup and workout from trainingPlan
  const { warmup, workout } = trainingPlan || {};


  return (
    <div className="workout-container">
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNumber}</p>
          {icon}
        </div>
      </div>
      
    </div>
  );
}
