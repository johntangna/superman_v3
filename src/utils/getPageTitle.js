import defaultSetting from '@/setting'

const title = defaultSetting.title || '欧美斯-订单处理系统'

export default function getPageTitle(pageTitle){
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`
}