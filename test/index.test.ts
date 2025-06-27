import WhenOff from '../src';

const whenOff = new WhenOff();
console.log('🎉', whenOff.isHoliday(new Date('2025-02-04')), '是否节假日');
console.log('🎉', whenOff.isWorkingDay(new Date('2025-02-08')), '是否工作日');
console.log('💼', whenOff.isAlternateWorkDay(new Date('2025-01-26')), '是否补班日');
console.log('🎉🎉', whenOff.getDateInfo(new Date('2025-01-29')));
console.log('🎉🎉', whenOff.getHolidayStats(), '节假日统计');
