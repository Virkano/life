import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

// 添加 duration 插件
dayjs.extend(duration)

export function diffTime(time) {
  // 获取当前时间
  const now = dayjs()

  // 获取指定时间
  const specifiedDate = dayjs(time)

  // 计算时间差
  const diff = dayjs.duration(now.diff(specifiedDate))

  // 计算年份、月份和天数
  const years = diff.years()
  const months = diff.months()
  const days = diff.days()

  // 根据结果显示年份、月份和天数
  let result = ''
  if (years > 0 && months >= 12)
    result += `${years}年`
  else if (months > 0)
    result += `${months}个月`
  else if (days > 0)
    result += `${days}天`

  return result
}
