import { getHolidayData } from '../data';
import { HolidayTypeEnum, RegionEnum } from '../enums';

class WhenOff {
  private currentRegion: RegionEnum;
  private currentYear: number;

  constructor(region: RegionEnum = RegionEnum.CN, year: number = new Date().getFullYear()) {
    this.currentRegion = region;
    this.currentYear = year;
  }

  private formatDateString(date: Date) {
    // 需要判断输入的date是否是一个合法的日期
    if (!(date instanceof Date)) {
      throw new Error('请输入正确的日期格式，例如：2024-01-01、2024/01/01');
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return {
      year,
      month,
      day,
    };
  }

  /**
   * @description 判断指定日期是否为节假日
   */
  isHoliday(date: Date, region: 'CN' = this.currentRegion) {
    const { year, month, day } = this.formatDateString(date);
    const data = getHolidayData(region, year);
    const dateStr = `${year}-${month}-${day}`;

    if (!data) {
      console.warn(`⚠️ 未找到${region} ${year}年的节假日数据`);
      return;
    }

    const holiday = data.dates.find(
      (item) => item.date === dateStr && item.type === HolidayTypeEnum.PUBLIC_HOLIDAY,
    );

    return !!holiday;
  }

  /**
   * @description 判断指定日期是否为工作日
   */
  isWorkingDay(date: Date) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // 如果是周六或者周日，判断是否是补班日/节假日
      return this.isAlternateWorkDay(date) || this.isHoliday(date);
    }

    return !this.isHoliday(date);
  }

  /**
   * @description 判断指定日期是否为补班日
   */
  isAlternateWorkDay(date: Date, region: string = this.currentRegion) {
    const { year, month, day } = this.formatDateString(date);
    const data = getHolidayData(region, year);
    const dateStr = `${year}-${month}-${day}`;

    if (!data) {
      console.warn(`⚠️ 未找到${region} ${year}年的节假日数据`);
      return;
    }

    const alternateWorkDay = data.dates.find(
      (item) => item.date === dateStr && item.type === HolidayTypeEnum.ALTERNATE_WORKDAY,
    );

    return !!alternateWorkDay;
  }

  /**
   * @description 获取指定日期节假日相关信息
   */
  getDateInfo(date: Date, region: 'CN' = this.currentRegion) {
    const { year, month, day } = this.formatDateString(date);
    const data = getHolidayData(region, year);
    const dateStr = `${year}-${month}-${day}`;

    if (!data) {
      console.warn(`⚠️ 未找到${region} ${year}年的节假日数据`);
      return;
    }

    const holiday = data.dates.find((item) => item.date === dateStr);

    return holiday;
  }

  /**
   * @description 获取节假日统计信息
   */
  getHolidayStats(region: 'CN' = this.currentRegion) {
    const data = getHolidayData(region, this.currentYear);

    if (!data) {
      console.warn(`⚠️ 未找到${region} ${this.currentYear}年的节假日数据`);
      return;
    }

    const holidays = data.dates.filter((item) => item.type === HolidayTypeEnum.PUBLIC_HOLIDAY);
    const alternateWorkdays = data.dates.filter(
      (item) => item.type === HolidayTypeEnum.ALTERNATE_WORKDAY,
    );

    return {
      totalHolidays: holidays.length,
      totalAlternateWorkdays: alternateWorkdays.length,
    };
  }
}

export default WhenOff;
