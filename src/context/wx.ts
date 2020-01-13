// 微信程序的context适配

const CAPITALIZED_ATTRS_MAP = {
  fontSize: 'FontSize',
  opacity: 'GlobalAlpha',
  lineDash: 'LineDash',
  textAlign: 'TextAlign',
};

/**
 * wxapp textAlign align 可选值为 left|center|right
 * 标准canvas textAlign align 可选值为 left|center|right|start|end
 */
const TEXT_ALIGN_MAP = {
  start: 'left',
  end: 'right',
};

export default (ctx: any) => {
  Object.keys(CAPITALIZED_ATTRS_MAP).map(style => {
    Object.defineProperty(ctx, style, {
      set: value => {
        if (style === 'textAlign') {
          value = TEXT_ALIGN_MAP[value] ? TEXT_ALIGN_MAP[value] : value;
        }
        const name = 'set' + CAPITALIZED_ATTRS_MAP[style];
        ctx[name](value);
      }
    });
    return style;
  });
}
