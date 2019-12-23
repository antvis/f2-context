import wx from './context/wx';
import my from './context/my';
import { isWx, isMy } from './util';

const auto = (ctx: any) => {
  if (isWx) {
    return wx(ctx);
  }
  if (isMy) {
    return my(ctx);
  }
  return ctx;
}

export {
  auto,
  wx,
  my
}
