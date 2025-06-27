import CN2015 from '@json/CN/2015.json';
import CN2016 from '@json/CN/2016.json';
import CN2017 from '@json/CN/2017.json';
import CN2018 from '@json/CN/2018.json';
import CN2019 from '@json/CN/2019.json';
import CN2020 from '@json/CN/2020.json';
import CN2021 from '@json/CN/2021.json';
import CN2022 from '@json/CN/2022.json';
import CN2023 from '@json/CN/2023.json';
import CN2024 from '@json/CN/2024.json';
import CN2025 from '@json/CN/2025.json';

export const holidayDataMap = new Map([
  ['CN-2015', CN2015],
  ['CN-2016', CN2016],
  ['CN-2017', CN2017],
  ['CN-2018', CN2018],
  ['CN-2019', CN2019],
  ['CN-2020', CN2020],
  ['CN-2021', CN2021],
  ['CN-2022', CN2022],
  ['CN-2023', CN2023],
  ['CN-2024', CN2024],
  ['CN-2025', CN2025],
  // 可以继续添加其他年份和地区的数据
]);

export function getHolidayData(region: string, year: number) {
  const key = `${region}-${year}`;
  return holidayDataMap.get(key);
}
