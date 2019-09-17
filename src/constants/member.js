import { formatMessage } from 'umi-plugin-locale'
const fm = str => formatMessage({ id: str })

const optionRole = [
  { name: fm('member.option.role.am'), value: '1' },
  { name: fm('member.option.role.admin'), value: '2' },
  { name: fm('member.option.role.finance'), value: '3' },
  { name: fm('member.option.role.cs'), value: '4' },
]

const optionStatus = [
  { name: fm('member.option.status.approved'), value: '1' },
  { name: fm('member.option.status.pending'), value: '2' },
]

// const Con = {
//   email: fm('user.register.label_email'),
//   password: fm('user.register.label_password'),
//   confirmPassword: fm('user.register.label_confirmPassword'),
//   phone: fm('user.register.label_phone'),
//   status: fm('domain.list.columns.status'),
//   time: fm('domain.list.columns.time'),
//   add: fm('domain.list.button.Add'),
//   popTitle: fm('domain.pop.title'),
//   cancel: fm('domain.pop.cancel'),
// }
export {
  optionRole,
  optionStatus
}