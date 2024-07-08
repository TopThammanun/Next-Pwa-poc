'use client'

import React, { Fragment, useEffect, useState } from 'react'
import NoWifi from '@/icon/nowifi'
import Wifi from '@/icon/wifi'
import useOnlineStatus from '@/hooks/useOnlineStatus'

const OnlineStatus = () => {
  const { isOnline } = useOnlineStatus()

  return (
    <Fragment>
      {isOnline() ? <Wifi className='h-8 w-8 text-success-500' /> : <NoWifi className='h-8 w-8 text-red-500' />}
    </Fragment>
  )
}

export default OnlineStatus
