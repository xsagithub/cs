import { formatMessage } from 'umi-plugin-locale'
import { date } from '@/utils'

const fm = str => formatMessage({ id: str })
const { Today, Yesterday, Last7Days, ThisMonth, LastMonth, ThisYear } = date.ranges()

const Con = {
  ID: fm('payouts.list.columns.ID'),
  Date: fm('payouts.list.columns.Date'),
  Type: fm('payouts.list.columns.Type'),
  Period: fm('payouts.list.columns.Period'),
  Amount: fm('payouts.list.columns.Amount'),
  Payment: fm('payouts.list.columns.Payment'),
  Status: fm('payouts.list.columns.Status'),
  Detail: fm('payouts.list.columns.Detail'),
  OfferID: fm('payouts.pop.payoutsDetail.OfferID'),
  Offer: fm('payouts.pop.payoutsDetail.Offer'),
  Payout: fm('payouts.pop.payoutsDetail.Payout'),
  ConfirmedOrder: fm('payouts.pop.payoutsDetail.ConfirmedOrder'),
  Amount: fm('payouts.pop.payoutsDetail.Amount'),
  TotalAmount: fm('payouts.pop.payoutsDetail.TotalAmount'),
  title: fm('payouts.pop.payoutsDetail.title'),
  LTV: fm('payouts.pop.BillDetail.LTV'),
  Bonus: fm('payouts.pop.BillDetail.Bonus'),
  title: fm('payouts.pop.BillDetail.title'),
}

const filter = [
  {
    id: 'time1',  // 后台参数
    label: 'Luck3',  // 表头名字
    type: 'date', // 表单类型
    options: {
      Today,
      Yesterday,
      'Last 7 Days': Last7Days,
      'This Month': ThisMonth,
      'Last Month': LastMonth,
      'This Year': ThisYear,
    },
  },
  {
    id: 'select1',  // 后台参数
    label: 'Type',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Type',
    disabled: false,
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
  {
    id: 'select3',  // 后台参数
    label: 'Status',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Status',
    mode: true, // 是否多选
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
]

const buttons = [
  {
    id: 4,
    label: 'Apply',
    type: 'submit',
  },
  {
    id: 5,
    label: 'Clear',
    type: 'clear',
  },
]

export {
  Con,
  buttons,
  filter,
} 
