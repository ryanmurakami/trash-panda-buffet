import axios from 'axios'
import { get } from 'lodash'

export async function getNewCustomer (dispatch, used = []) {
  dispatch({
    type: 'CUSTOMER_FETCHING'
  })

  let url = 'trashPanda'
  if (used.length) {
    url = `${url}?used=${used.join(',')}`
  }

  const res = await axios.get(url)

  dispatch({
    type: 'CUSTOMER_FETCHED',
    customer: Object.assign({}, get(res, 'data.customer'), {
      accruedPoints: 0,
      remainingItems: 4
    })
  })
}
