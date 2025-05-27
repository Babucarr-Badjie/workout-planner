import { useState, useEffect } from "react";
import {
  getUserProgress,
  setUserProgress,
  getLastCompletedDate,
  setLastCompletedDate,
} from "../utilities/ProgressUtils";

export default function WorkoutProgress({ user }) {
  const [daysCompleted, setDaysCompleted] = useState(0);

  const [lastCompleted, setLastCompleted] = useState("");

  useEffect(() => {
    if (user) {
      setDaysCompleted(getUserProgress(user.username));
      setLastCompleted(getLastCompletedDate(user.username));
    }
  }, [user]);

  const todayStr = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  const handleCompleteDay = () => {
    const latestLastCompleted = getLastCompletedDate(user.username);
    if (latestLastCompleted === todayStr) return; // Already completed today

    const latestDaysCompleted = getUserProgress(user.username);
    const newProgress = Math.min(latestDaysCompleted + 1, 30);
    setDaysCompleted(newProgress);
    setUserProgress(user.username, newProgress);

    setLastCompleted(todayStr);
    setLastCompletedDate(user.username, todayStr);
  };

  const isTodayCompleted = lastCompleted === todayStr;

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
      <button
        onClick={handleCompleteDay}
        disabled={daysCompleted >= 30 || isTodayCompleted}
      >
        {isTodayCompleted
          ? "Today's Workout Completed"
          : "Mark Today as Complete"}
      </button>
    </div>
  );
}
