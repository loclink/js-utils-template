/**
 * 这是一个人类的示例
 */
export class Person {
  /** 姓名 */
  name: string;

  /**
   * 
   * @param name 姓名
   */
  constructor(name: string) {
    this.name = name;
  }
  /** 说hello */
  seyHello() {
    return `hello ${this.name}`;
  }
}
