import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'mycoupons',
  /*  Async getComponent is only invoked when route matches   异步获取组件*/
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Mycoupons = require('./containers/MyCoupons').default
      const reducer = require('./modules/mycoupons').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'mycoupons', reducer })

      /*  Return getComponent   */
      cb(null, Mycoupons)

      /* Webpack named bundle   */
    }, 'MyCoupons')
  }
})
