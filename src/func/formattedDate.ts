const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("ar-EG", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export default formattedDate;
