import { useState, useEffect } from "react";
import { getUserProgress, setUserProgress } from "../utilities/ProgressUtils";

export default function WorkoutProgress({ user }) {
  const [daysCompleted, setDaysCompleted] = useState(0);

  useEffect(() => {
    if (user) {
      setDaysCompleted(getUserProgress(user.username));
    }
  }, [user]);

  const handleCompleteDay = () => {
    const newProgress = Math.min(daysCompleted + 1, 30);
    setDaysCompleted(newProgress);
    setUserProgress(user.username, newProgress);
  };

  return (
    <div
      className="progress-tracker"
      style={{
        margin: "1rem 0",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <p>
        <strong>Days Completed:</strong> {daysCompleted} / 30
      </p>
      <p>
        <strong>Days Left:</strong> {30 - daysCompleted}
      </p>
      <button onClick={handleCompleteDay} disabled={daysCompleted >= 30}>
        Mark Today as Complete
      </button>
    </div>
  );
}
