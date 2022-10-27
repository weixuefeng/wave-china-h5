/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-27 11:43:03
 * @FilePath: /wave-china-h5/src/components/collection/baseInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { t } from 'i18next'

export default BaseInfo

function BaseInfo(props) {
  let { collectionInfo } = props
  return (
    <div className="baseinfo-wrap">
      <p className="title">{collectionInfo.name}</p>
      <div className="nums">
        <div className="nums-item">
          <span className="tip">{t('REMAINING')}</span>
          <span className="number">{collectionInfo.box_total - collectionInfo.sold_quantity}</span>
        </div>
        <div className="nums-item">
          <span className="tip">{t('CURRENT_RELASE')}</span>
          <span className="number">{collectionInfo.box_total}</span>
        </div>
      </div>
    </div>
  )
}
