import moment from 'moment'

export default {
  ranges: () => {
    const mt = moment
    const dt = new Date()
    const [days, month, year] = ['days', 'month', 'year']
    const Yesterday = mt(dt).add(-1, days)
    const startDate = mt().month(mt().month() - 1).startOf(month)
    const endDate = mt().month(mt().month() - 1).endOf(month)
    const startYear = mt().year(mt().year()).startOf(year)
    const endYear = mt().year(mt().year()).endOf(year)
  
    return {
      // 今天
      Today: [mt(), mt()],
      // 昨天
      Yesterday: [Yesterday, Yesterday],
      // 过去7天
      Last7Days: [mt(dt).add(-7, days), mt(dt).add(-1, days)],
      // 本月
      ThisMonth: [mt().startOf(month), mt().endOf(month)],
      // 上个月
      LastMonth: [mt(startDate), mt(endDate)],
      // 今年
      ThisYear: [startYear, endYear],
    }
  }
}