/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
export interface AffixProps {
  offsetBottom: number;
  offsetTop: number;
  target?: () => HTMLElement;

  onChange?: (affixed: boolean) => void;
}
