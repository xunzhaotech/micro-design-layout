/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */

export function warn(valid: boolean, message: string) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error(`Warning: ${message}`);
  }
}

export function warning(valid: boolean, message: string) {
  warn(valid, `[@ant-design-vue/pro-layout] ${message}`);
}
