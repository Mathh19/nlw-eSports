// 1080 = "18:00"
export function convertMinuesToHoursString(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const minutesAfterHour = minutes % 60;

  return  `${String(hours).padStart(2, '0')}:${String(minutesAfterHour).padStart(2, '0')}`;
}
