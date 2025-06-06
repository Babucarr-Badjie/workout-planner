export function getUserProgress(username) {
  return parseInt(localStorage.getItem(`progress_${username}`) || "0", 10);
}

export function setUserProgress(username, daysCompleted) {
  localStorage.setItem(`progress_${username}`, daysCompleted);
}

export function getLastCompletedDate(username) {
  return localStorage.getItem(`lastCompleted_${username}`) || "";
}

export function setLastCompletedDate(username, dateStr) {
  localStorage.setItem(`lastCompleted_${username}`, dateStr);
}
