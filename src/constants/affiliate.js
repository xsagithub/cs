import { formatMessage } from 'umi-plugin-locale'
import { date } from '@/utils'

const { Today, Yesterday, Last7Days, ThisMonth, LastMonth, ThisYear } = date.ranges()

const fm = str => formatMessage({ id: str })
const Con = {
  dh: { d: '16', h: [1, 2] },
  head: 'head',
  top: 'top',
  affiliateInformation: fm('affiliates.add.affiliateInformation'),
  basicInformation: fm('affiliates.edit.basicInformation'),
  userInformation: fm('affiliates.add.userInformation'),
  billingInformation: fm('affiliates.add.billingInformation'),
  offerSettings: fm('affiliates.add.offerSettings'),
  add: fm('affiliates.add.add'),
  edit: fm('affiliates.edit.edit'),
  clear: fm('affiliates.add.clear'),
  affiliateID: fm('affiliates.list.columns.affiliateID'),
  affiiiate: fm('affiliates.list.columns.affiiiate'),
  accountManager: fm('affiliates.list.columns.accountManager'),
  offer: fm('affiliates.list.columns.offer'),
  clicks: fm('affiliates.list.columns.clicks'),
  conversions: fm('affiliates.list.columns.conversions'),
  conversionRate: fm('affiliates.list.columns.conversionRate'),
  confirmedOrder: fm('affiliates.list.columns.confirmedOrder'),
  Revenue: fm('affiliates.list.columns.Revenue'),
  repeatOrders: fm('affiliates.list.columns.repeatOrders'),
  bonus: fm('affiliates.list.columns.bonus'),
  totalRevenue: fm('affiliates.list.columns.totalRevenue'),
  source: fm('affiliates.list.columns.source'),
  status: fm('affiliates.list.columns.status'),
  actions: fm('affiliates.list.columns.actions'),
  addAffiliate: fm('affiliates.list.button.addAffiliate'),
  pendingAffiliate: fm('affiliates.list.button.pendingAffiliate'),
  offerName: fm('affiliates.columns.offerName'),
  defaultPayout: fm('affiliates.columns.defaultPayout'),
  payout: fm('affiliates.columns.payout'),
}

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

const filter = [
  {
    id: 'select1',  // 后台参数
    label: 'Affiliate ID/Name',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Affiliate ID/Name',
    disabled: false,
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
  {
    id: 'select2',  // 后台参数
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
  {
    id: 'select3',  // 后台参数
    label: 'Source',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Source',
    mode: true, // 是否多选
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
  {
    id: 'time1',  // 后台参数
    label: 'Period',  // 表头名字
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
    id: 'select4',  // 后台参数
    label: 'Account Manager',  // 表头名字
    type: 'select', // 表单类型
    placeholder: 'Account Manager',
    mode: true, // 是否多选
    options: [
      { value: 1, name: '1111' },
      { value: 2, name: '2222' },
      { value: 3, name: '3333' },
    ],
    cb: v => v,
  },
]

const addData = {
  affiliateInformation: [
    { 
      label: 'Affiliate ID', 
      id: 'd0', 
      type: 'Text', 
    },
    { 
      label: 'Affiliate', 
      id: 'd1', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制500字符',
      }
    }, 
    { 
      label: 'Adress 1', 
      id: 'd2', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制1000字符',
      }
    }, 
    { 
      label: 'Adress 2', 
      id: 'd3', 
      type: 'Input', 
      props: {
        placeholder: '限制1000字符',
      }
    }, 
    { 
      label: 'City', 
      id: 'd4', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '限制200字符',
      }
    }, 
    { 
      label: 'Country', 
      id: 'd5', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '限制200字符',
      }
    }, 
    { 
      label: 'Phone', 
      id: 'd6', 
      type: 'Select', 
      required: true,
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '限制200字符',
      }
    }, 
  ],
  userInformation: [
    { 
      label: 'First Name', 
      id: 'd1', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'Last Name', 
      id: 'd2', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'E-mail', 
      id: 'd3', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'Password', 
      id: 'd4', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: 'Password must be between 6 and 16 characters.',
      }
    },
    { 
      label: <em>Password<span>(confirm)</span></em>, 
      id: 'd5', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '6-16位字符',
      }
    },
    { 
      label: 'Phone', 
      id: 'd6', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '6-16位字符',
      }
    },
    { 
      label: 'Status', 
      id: 'd7', 
      type: 'Select', 
      required: true, 
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '6-16位字符',
      }
    },
    { 
      label: 'Account Manager', 
      id: 'd8', 
      type: 'Select', 
      required: true, 
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '6-16位字符',
      }
    },
  ],
  billingInformation: [
    { 
      label: 'Address 1', 
      id: 'd0', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '正常输入框',
      }
    }, 
    { 
      label: 'Address 2', 
      id: 'd1', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'City', 
      id: 'd2', 
      type: 'Select', 
      required: true,
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Country', 
      id: 'd3', 
      type: 'Select', 
      required: true,
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Region', 
      id: 'd4', 
      type: 'Select', 
      required: true,
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Zipcode', 
      id: 'd5', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Payment Method', 
      id: 'd6', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Beneficiary Name', 
      id: 'd7', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Bank Name', 
      id: 'd8', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Swift Number', 
      id: 'd9', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Account Number', 
      id: 'd10', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    { 
      label: 'Billing Frequency', 
      id: 'd11', 
      type: 'Select',
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      required: true,
      props: {
        placeholder: '正常输入框',
      }
    },
    {
      label: 'Other Details',
      id: 'd12',
      type: 'TextArea',
    },
  ],
  domain: [
    {
      label: 'Domain',
      id: 'd0',
      type: 'Select',
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
    }, 
  ],
}

const editData = {
  basicInformation: [
    { 
      label: 'Affiliate ID', 
      id: 'd0', 
      type: 'Text', 
    },
    { 
      label: 'Affiliate', 
      id: 'd1', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制500字符',
      }
    },
    { 
      label: 'Adress 1', 
      id: 'd2', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制1000字符',
      }
    },
    { 
      label: 'Adress 2', 
      id: 'd3', 
      type: 'Input', 
      props: {
        placeholder: '限制1000字符',
      }
    },
    { 
      label: 'City', 
      id: 'd4', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '限制200字符',
      }
    },
    { 
      label: 'Country', 
      id: 'd5', 
      type: 'Input', 
      required: true,
      props: {
        placeholder: '限制200字符',
      }
    },
    { 
      label: 'First Name', 
      id: 'd6', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'Last Name', 
      id: 'd7', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'E-mail', 
      id: 'd8', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '限制100字符',
      }
    },
    { 
      label: 'Phone', 
      id: 'd9', 
      type: 'Input', 
      required: true, 
      props: {
        placeholder: '6-16位字符',
      }
    },
    { 
      label: 'Status', 
      id: 'd10', 
      type: 'Select', 
      required: true, 
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '6-16位字符',
      }
    },
    { 
      label: 'Account Manager', 
      id: 'd11', 
      type: 'Select', 
      required: true, 
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
      props: {
        placeholder: '6-16位字符',
      }
    },
  ],
  domain: [
    {
      label: 'Domain',
      id: 'd0',
      type: 'Select',
      option: [
        { name: '汉皇重色思倾国', value: '1' },
        { name: '御宇多年求不得', value: '2' },
        { name: '杨家有女初长成', value: '3' },
      ],
    }, 
  ],
  billingInformation: [
    { 
       label: 'Payable Type', 
       id: 'd00', 
       type: 'Select', 
       required: true,
       option: [
        { name: '芙蓉帐暖度春宵', value: '13'},
        { name: '春宵苦短日高起', value: '14'},
        { name: '从此君王不早朝', value: '15'},
       ],
       props: {
         placeholder: '正常输入框',
       }
     }, 
    { 
       label: 'Address 1', 
       id: 'd0', 
       type: 'Input', 
       required: true, 
       props: {
         placeholder: '正常输入框',
       }
     }, 
     { 
       label: 'Address 2', 
       id: 'd1', 
       type: 'Input', 
       required: true, 
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'City', 
       id: 'd2', 
       type: 'Select', 
       required: true,
       option: [
         { name: '汉皇重色思倾国', value: '1' },
         { name: '御宇多年求不得', value: '2' },
         { name: '杨家有女初长成', value: '3' },
       ],
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Country', 
       id: 'd3', 
       type: 'Select', 
       required: true,
       option: [
         { name: '汉皇重色思倾国', value: '1' },
         { name: '御宇多年求不得', value: '2' },
         { name: '杨家有女初长成', value: '3' },
       ],
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Region', 
       id: 'd4', 
       type: 'Select', 
       required: true,
       option: [
         { name: '汉皇重色思倾国', value: '1' },
         { name: '御宇多年求不得', value: '2' },
         { name: '杨家有女初长成', value: '3' },
       ],
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Zipcode', 
       id: 'd5', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Payment Method', 
       id: 'd6', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Beneficiary Name', 
       id: 'd7', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Bank Name', 
       id: 'd8', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Swift Number', 
       id: 'd9', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Account Number', 
       id: 'd10', 
       type: 'Input', 
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     { 
       label: 'Billing Frequency', 
       id: 'd11', 
       type: 'Select',
       option: [
         { name: '汉皇重色思倾国', value: '1' },
         { name: '御宇多年求不得', value: '2' },
         { name: '杨家有女初长成', value: '3' },
       ],
       required: true,
       props: {
         placeholder: '正常输入框',
       }
     },
     {
       label: 'Other Details',
       id: 'd12',
       type: 'TextArea',
     }, 
  ]
}

export {
  Con,
  buttons,
  filter,
  addData,  // add 页面
  editData, // edit 页面
}