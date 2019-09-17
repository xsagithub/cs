import { formatMessage } from 'umi-plugin-locale'
import Link from 'umi/link'
// filter 配置结构
export const FILTER = {
  default: [
    { 
      id: 'id1',  
      label: formatMessage({ id: 'offers.list.filter.name'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id2',  
      label: formatMessage({ id: 'offers.list.filter.country'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id3',  
      label: formatMessage({ id: 'offers.list.filter.category'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    },
  ],
  list: [
    { 
      id: 'id1',  
      label: formatMessage({ id: 'offers.list.filter.name'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id2',  
      label: formatMessage({ id: 'offers.list.filter.country'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id3',  
      label: formatMessage({ id: 'offers.list.filter.category'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    },
  ],
  creatives: [
    { 
      id: 'id1',  
      label: formatMessage({ id: 'offers.creative.filter.name'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id2',  
      label: formatMessage({ id: 'offers.creative.filter.period'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }, { 
      id: 'id3',  
      label: formatMessage({ id: 'offers.creative.filter.status'}), 
      type: 'select', 
      placeholder: 'Luck1', 
      options: [] 
    }
  ]
}
export const OPERATION = {
  list: [
    { 
      key: 'create-offer', 
      name: formatMessage({ id: 'offers.list.operating.create' }), 
    }, { 
      key: 'pending-offer', 
      name: formatMessage({ id: 'offers.list.operating.pending' }) 
    }
  ],
  creatives: [
    { 
      key: 'add-creative', 
      name: formatMessage({ id: 'offers.creative.operating.add' }), 
    },
  ]
}
export const COLUMNS = {
  default: [
    { title: formatMessage({ id: 'offers.default.columns.id' }), dataIndex: 'id' }, 
    { title: formatMessage({ id: 'offers.list.columns.name' }), dataIndex: 'offer_name', render(t, d) {
      return <Link to={`/offer/${d.id}`}>{t}</Link>
    }},
    { title: formatMessage({ id: 'offers.default.columns.payout' }), dataIndex: 'payout' }, 
    { title: formatMessage({ id: 'offers.default.columns.epc' }), dataIndex: 'epc' }, 
    { title: formatMessage({ id: 'offers.default.columns.country' }), dataIndex: 'creator' }, 
    { title: formatMessage({ id: 'offers.default.columns.category' }), dataIndex: 'category_id' }, 
    { title: formatMessage({ id: 'offers.default.columns.expire' }), dataIndex: 'expired_time' }, 
    { title: formatMessage({ id: 'offers.default.columns.status' }), dataIndex: 'status' }, 
  ],
  list: [
    { title: formatMessage({ id: 'offers.list.columns.id' }), dataIndex: 'id' }, 
    { title: formatMessage({ id: 'offers.list.columns.name' }), dataIndex: 'name', render(t, d) {
      return <Link to={`/admin/offer/${d.id}`}>{t}</Link>
    }},
    { title: formatMessage({ id: 'offers.list.columns.defaultPayout' }), dataIndex: 'payout1' }, 
    { title: formatMessage({ id: 'offers.list.columns.payout' }), dataIndex: 'payout' }, 
    { title: formatMessage({ id: 'offers.list.columns.epc' }), dataIndex: 'epc' }, 
    { title: formatMessage({ id: 'offers.list.columns.country' }), dataIndex: 'creator' }, 
    { title: formatMessage({ id: 'offers.list.columns.category' }), dataIndex: 'category_id' }, 
    { title: formatMessage({ id: 'offers.list.columns.expire' }), dataIndex: 'expired_time' }, 
    { title: formatMessage({ id: 'offers.list.columns.status' }), dataIndex: 'status' }, 
  ],
  creatives: [
    { title: formatMessage({ id: 'offers.creative.columns.id' }), dataIndex: 'key1' }, 
    { title: formatMessage({ id: 'offers.creative.columns.offerName' }), dataIndex: 'key2' },
    { title: formatMessage({ id: 'offers.creative.columns.type' }), dataIndex: 'key3' }, 
    { title: formatMessage({ id: 'offers.creative.columns.offer' }), dataIndex: 'key4' }, 
    { title: formatMessage({ id: 'offers.creative.columns.size' }), dataIndex: 'key5' }, 
    { title: formatMessage({ id: 'offers.creative.columns.created' }), dataIndex: 'key6' }, 
    { title: formatMessage({ id: 'offers.creative.columns.status' }), dataIndex: 'key7' }, 
    { title: formatMessage({ id: 'offers.creative.columns.action' }), dataIndex: 'key8' }, 
  ]
}