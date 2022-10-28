/*
 * @Author: zxt0805 zhuxiaotong@diynova.com
 * @Date: 2022-10-17 12:47:13
 * @LastEditors: zxt0805 zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-28 17:59:37
 * @FilePath: /wave-china-h5/src/model/navModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class PageModel {
  title: string
  description: string
  name: string
  image: string
  constructor(title: string, description: string = '', name: string, image: string = '') {
    this.title = title
    this.description = description
    this.name = name
    this.image = image
  }
}
