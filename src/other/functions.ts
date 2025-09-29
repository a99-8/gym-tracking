import { counter } from "./constants";

const emptyTextAfter = (count: number) => {
  if (count === 0) {
    return "لا يوجد مدخلات بعد.";
  }
  if (count < 5) {
    return `سيتم إعادة ضبط القائمة بعد إضافة ${counter - count} عناصر.`;
  }
  return "سيتم إعادة ضبط القائمة بعد إضافة العنصر التالي.";
};

const formattedDate = () => {
  const currentDate = new Date();
  /* the date of today dd-mm-yyyy */
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const datePart = `${year}-${month}-${day}`;

  /* the time of today hh:mm a/p */
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  /* more func for time */
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = hours.toString().padStart(2, "0");
  const timePart = `${formattedHours}:${minutes} ${ampm}`;

  /* final marging */
  return `${datePart} ${timePart}`;
};

export { emptyTextAfter, formattedDate };
