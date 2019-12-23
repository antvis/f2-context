// 支付宝小程序的context适配

const CAPITALIZED_ATTRS_MAP = {
  fillStyle: 'FillStyle',
  fontSize: 'FontSize',
  globalAlpha: 'GlobalAlpha',
  opacity: 'GlobalAlpha',
  lineCap: 'LineCap',
  lineJoin: 'LineJoin',
  lineWidth: 'LineWidth',
  miterLimit: 'MiterLimit',
  strokeStyle: 'StrokeStyle',
  textAlign: 'TextAlign',
  textBaseline: 'TextBaseline',
  shadow: 'Shadow'
};

export default (ctx: any) => {
  Object.keys(CAPITALIZED_ATTRS_MAP).map(key => {
    Object.defineProperty(ctx, key, {
      set(value) {
        if (key === 'shadow' && ctx.setShadow && Array.isArray(value)) {
          ctx.setShadow(value[0], value[1], value[2], value[3]);
        } else {
          const name = 'set' + CAPITALIZED_ATTRS_MAP[key];
          ctx[name](value);
        }
      }
    });
    return key;
  });
  return ctx;
}