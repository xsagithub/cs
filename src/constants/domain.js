import { formatMessage } from 'umi-plugin-locale'
const fm = str => formatMessage({ id: str })
const Con = {
  domainId: fm('domain.list.columns.domainId'),
  domain: fm('domain.list.columns.domain'),
  type: fm('domain.list.columns.type'),
  offerName: fm('domain.list.columns.offerName'),
  status: fm('domain.list.columns.status'),
  time: fm('domain.list.columns.time'),
  add: fm('domain.list.button.Add'),
  popTitle: fm('domain.pop.title'),
  cancel: fm('domain.pop.cancel'),
}

// 表格数据
const tableData = [
  {
    id: '10298',
    domain: 'ABC.com',
    type: 'Global',
    offerName: 'Offer Name',
    status: true,
    time: 'Jun 11,2019',
  },
]

// Filter
const filter = [
  {
    id: 'input1',  // 后台参数
    label: 'Domain',  // 表头名字
    type: 'input', // 表单类型
    placeholder: 'Domain',
    cb: v => v,
  },
  {
    id: 'select1',  // 后台参数
    label: 'Offer ID/Name',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Offer ID/Name',
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
    label: 'Type',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Type',
    mode: true, // 是否多选
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
  {
    id: 'select4',  // 后台参数
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

// button 列表
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

const domainForms = [
  { 
    label: 'Name', 
    id: 'd1', 
    type: 'Input', 
    required: true, 
    props: {
      placeholder: '限制500字符',
    }
  },
  { 
    label: 'Type', 
    id: 'd2', 
    type: 'Select', 
    required: true, 
    props: {
      placeholder: '限制500字符',
    },
    option: [
      { name: '汉皇重色思倾国', value: '1' },
      { name: '御宇多年求不得', value: '2' },
      { name: '杨家有女初长成', value: '3' },
    ],
  },
  { 
    label: 'Offer', 
    id: 'd3', 
    type: 'Select', 
    required: true, 
    props: {
      placeholder: '限制500字符',
    },
    option: [
      { name: '汉皇重色思倾国', value: '1' },
      { name: '御宇多年求不得', value: '2' },
      { name: '杨家有女初长成', value: '3' },
    ],
  },
  { 
    label: 'Status', 
    id: 'd4', 
    type: 'Select', 
    required: true, 
    props: {
      placeholder: '限制500字符',
    },
    option: [
      { name: '汉皇重色思倾国', value: '1' },
      { name: '御宇多年求不得', value: '2' },
      { name: '杨家有女初长成', value: '3' },
    ],
  },
]

export {
  tableData,
  Con,
  filter,
  buttons,
  domainForms,
}

