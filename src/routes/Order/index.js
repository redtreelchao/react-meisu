import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'order',
  /*  Async getComponent is only invoked when route matches   异步获取组件*/
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Order = require('./containers/OrderContainer').default
      const reducer = require('./modules/order').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'order', reducer })

      /*  Return getComponent   */
      cb(null, Order)

      /* Webpack named bundle   */
    }, 'Order')
  }
})
