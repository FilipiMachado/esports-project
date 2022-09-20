// 18:00h -> 1080m

export function convertHourToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}