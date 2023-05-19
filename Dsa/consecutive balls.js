function findRemainingBalls(N, balls, k) {
    const count = [1]; // Initialize count with the first ball
  
    for (let i = 1; i < N; i++) {
      if (balls[i] === balls[i - 1]) {
        count.push(count[count.length - 1] + 1);
  
        if (count[count.length - 1] === k) {
          count.pop();
        }
      } else {
        count.push(1);
      }
    }
  
    return count.length;
  }