/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-13 20:35:18
 * @FilePath: /wave-chinese-website/src/components/collection/staticInfo.tsx
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 20:54:29
 * @FilePath: /wave-chinese-website/src/components/index/staticInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { t } from 'i18next'
import copy from 'copy-to-clipboard'

import { message } from 'antd'

export default StaticInfo

function StaticInfo(props) {
  const [showAllIntro, setShowAllIntro] = useState(false)
  const [isShowBubble, setIsShowBubble] = useState(false)

  function changeShowAllIntro() {
    setShowAllIntro(!showAllIntro)
  }
  function checkMore() {
    window.open('https://www.newtonproject.org/en/evt/')
  }
  function copyAddress(str) {
    copy(str)
    message.success(t('COPYSUCCESS'))
  }
  function showBubble(val, event) {
    event = event || window.event
    if (val) {
      event.stopPropagation()
    }
    setIsShowBubble(val)
  }
  return (
    <div className="staticinfo-wrap" onClick={e => showBubble(false, e)}>
      <p className="title introduction">{t('INTRODUCTION')}</p>
      <div className="content-wrap">
        <p className={showAllIntro ? '' : 'h-[3rem] text-gray666 line-clamp-2'}>{props.collectionInfo.description}</p>
        <p className="more" onClick={changeShowAllIntro}>
          {showAllIntro ? t('COLLAPSE') : t('MORE')}
        </p>
      </div>
    </div>
  )
}
