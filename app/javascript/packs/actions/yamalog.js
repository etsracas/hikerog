import { CREATE_YAMALOG_LIST } from '../constants/yamalog'

export const createYamalogList = (yamalogs) => ({
  type: CREATE_YAMALOG_LIST,
  yamalogs,
})
