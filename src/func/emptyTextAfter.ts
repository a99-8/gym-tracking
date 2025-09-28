const emptyTextAfter = (count: number) => {
  if (count === 0) {
    return "لا يوجد مدخلات بعد.";
  }
  if (count < 5) {
    return `سيتم إعادة ضبط القائمة بعد إضافة ${5 - count} عناصر.`;
  }
  return "سيتم إعادة ضبط القائمة بعد إضافة العنصر التالي.";
};

export default emptyTextAfter;
