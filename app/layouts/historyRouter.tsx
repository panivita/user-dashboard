import { History } from 'history'
import { useLayoutEffect, useState } from 'react'
import { BrowserRouterProps as NativeBrowserRouterProps, Router } from 'react-router'

export interface BrowserRouterProps extends Omit<NativeBrowserRouterProps, 'window'> {
  history: History
}

const HistoryRouter = ({ history, ...restProps }: BrowserRouterProps) => {
  const [routing, handleRouting] = useState({ location: history.location, action: history.action })

  useLayoutEffect(() => history.listen(handleRouting), [history])

  return <Router {...restProps} location={routing.location} navigationType={routing.action} navigator={history} />
}

export { HistoryRouter }
