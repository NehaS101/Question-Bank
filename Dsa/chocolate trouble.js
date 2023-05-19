function calculateRemainingChocolates(X, Y) {
    while (X !== Y && X > 0 && Y > 0) {
      if (X < Y) {
        Y -= X;
      } else {
        X -= Y;
      }
    }
  
    return Math.max(X, Y);
  }