// weixin miniprogram
// @ts-ignore
const isWx = (typeof wx === 'object') && (typeof wx.getSystemInfoSync === 'function');

// ant miniprogram
// @ts-ignore
const isMy = (typeof my === 'object') && (typeof my.getSystemInfoSync === 'function');

export {
  isWx,
  isMy,
}
