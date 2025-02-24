import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2025',
      receipt: 1000,
    },
    {
      date: '02/01/2025',
      receipt: 1500,
    },
    {
      date: '03/01/2025',
      receipt: 2000,
    },
  ])
})
