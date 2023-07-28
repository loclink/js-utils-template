import { Status } from '../../enums';
import { IUserInfo } from './types';
/**
 * 格式化用户信息
 * @example
 * 以这个方法为例定义一个例子，在这里你可以直接使用markdown语法来对方法描述一些示例
 * ```ts
 * formatUserInfo({username: 'loclink', age: 18, mobile: '15555555555'})
 * ```
 * @group 格式化方法
 * @param userInfo 用户信息
 * @returns
 *
 * > 这里还能使用markdown语法来添加额外的描述信息
 * ### 三级标题
 * #### 四级标题
 * 1. 有序列表1
 * 2. 有序列表2
 */
export const formatUserInfo = (userInfo: IUserInfo) => {
  return `姓名：${userInfo.username} 年龄：${userInfo.age} 手机号：${userInfo.mobile}`;
};

/**
 * 根据订单状态值返回订单描述信息
 * @group 格式化方法
 * @param status 订单状态值
 * @returns
 */
export const formatStatusStr = (status: Status) => {
  switch (status) {
    case Status.CANCELLED:
      return '订单已取消';
    case Status.COMPLETED:
      return '订单已完成';
    case Status.UNFINISHED:
      return '订单未完成';
  }
};
