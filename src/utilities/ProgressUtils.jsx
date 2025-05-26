export function getUserProgress(username) {
  return parseInt(localStorage.getItem(`progress_${username}`) || "0", 10);
}

export function setUserProgress(username, daysCompleted) {
  localStorage.setItem(`progress_${username}`, daysCompleted);
}
