/**
 * 这是一个用户身份的枚举值示例
 * @enum
 */
export enum Role {
  /** 管理员 */
  ADMIN = 1,

  /** 普通用户 */
  MEMBER = 2
}

/**
 * 订单状态
 * @enum
 */
export enum Status {
  /** 订单已完成 */
  COMPLETED = 1,
  /** 订单未完成 */
  UNFINISHED = 2,
  /** 订单已取消 */
  CANCELLED = 3
}
