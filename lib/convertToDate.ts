const convertToDate = (pageNum: number) => {
  const LUT = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];

  return LUT[pageNum - 1] + " Jan " + (pageNum + 15);
};

export default convertToDate;
