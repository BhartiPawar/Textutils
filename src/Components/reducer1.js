const reducer = (count, action) => {

  switch (action.type) {
    case "INC":
      return (count += 1);
    case "DEC":
      let newCount = 0;
      count >= 1 ? (newCount = count - 1) : (newCount = 0);
      return newCount;
    default:
      return count;
  }
};

export default reducer;
