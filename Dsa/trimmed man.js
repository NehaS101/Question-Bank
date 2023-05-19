function calculateAlexScore(grades, N) {
  // Sort the grades in ascending order
  grades.sort((a, b) => a - b);

  // Remove the lowest N grades and the highest N grades
  const remainingGrades = grades.slice(N, grades.length - N);

  // Calculate the average of the remaining grades rounded down
  const sum = remainingGrades.reduce((total, grade) => total + grade, 0);
  const average = Math.floor(sum / (3 * N));

  // Return the average as Alex's score
  return average;
}


