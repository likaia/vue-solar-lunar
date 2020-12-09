/**
 * 公历 ->-< 农历转换工具类
 */
/**
 * 返回农历year年中哪个月是闰月，没有闰月返回0
 * @param year int 年份
 */
export declare function getLunarLeapMonth(year: number): number | false;
/**
 * 返回农历year年闰月的天数（如果没有闰月则返回0）
 * @param year int 年份
 */
export declare function getLeapMonthDaysCount(year: number): 30 | 0 | 29;
/**
 * 返回农历year年的总天数
 * @param year int 年份
 */
export declare function getLunarYearDaysCount(year: number): number | false;
/**
 * 返回农历year年month月的天数
 * @param year int 年份
 * @param month int 月份 1~12
 */
export declare function getLunarYearMonthDaysCount(year: number, month: number): false | 30 | 29;
/**
 * 返回某年的第n个节气为几日(从0小寒起算)
 * @param year int 年份
 * @param n 节气编号 0~23
 */
export declare function getLunarTermDay(year: number, n: number): number | false;
/**
 * 阳历某个月份天数
 * @param year int 年份
 * @param month int 月份 1~12
 */
export declare function getSolarMonthDaysCount(year: number, month: number): number | false;
/**
 * 获取指定日期是阳历年中的第几天
 * @param year int 年份
 * @param month int 月份 1-12
 * @param day int 日期
 */
export declare function getSolarDayNumber(year: number, month: number, day: number): number | false;
/**
 * 阳历日期转农历日期
 * @param year int 年份
 * @param month int 月份 1~12
 * @param day int 日期 1~31
 */
export declare function solarToLunar(year: number, month: number, day: number): false | {
    year: number;
    ncWeek: string;
    month: number;
    day: number;
    isLeap: boolean;
    Terms: string | boolean;
    monthStr: string;
    dayStr: string | boolean;
};
