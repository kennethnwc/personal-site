export const getTimeDiff = (past: string) => {
  const date1 = new Date();
  const date2 = new Date(past);
  console.log(date1, date2);
  const diff = Math.floor(date1.getTime() - date2.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  const message = `${years} years ${months > 0 && "and " + months + "months"}`;

  return message;
};
