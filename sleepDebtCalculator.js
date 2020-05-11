// sleep (hrs) per day
const getSleepHours = (day) => {
  if (day === 'monday') {
    return 5;
  } else if (day === 'tuesday') {
    return 4;
  } else if (day === 'wednesday') {
    return 4;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 6;
  } else if (day === 'sunday') {
    return 4;
  } else {
    return 'Please enter a day of the week.';
  }
};
// total sleep hours actually slept
const getActualSleepHours = () => 5 + 4 + 4 + 5 + 5 + 6 + 4;
// ideal sleep hours preferred * 7(preferred hours a week)
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
// calculate sleep debt
const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {
  console.log('You\'re getting the perfect amount of sleep!');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You are getting more sleep than needed. You get ' + (idealSleepHours - actualSleepHours) + ' hours of sleep.');
} else {
  console.log('You get ' + (idealSleepHours - actualSleepHours) + ' hours of sleep. You need rest!');
}
};
calculateSleepDebt();
