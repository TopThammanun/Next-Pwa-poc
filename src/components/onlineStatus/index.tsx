'use client'

import React, { Fragment, useEffect, useState } from 'react'
import NoWifi from '@/icon/nowifi'
import Wifi from '@/icon/wifi'
import useOnlineStatus from '@/hooks/useOnlineStatus'
import { Badge, Avatar, Chip } from '@nextui-org/react'

const OnlineStatus = () => {
  const { isOnline } = useOnlineStatus()

  return (
    <Fragment>
      {isOnline() ? (
        <Chip size='md' className='p-2' color='success' variant='flat'>
          <div className='flex items-center'>
            <Wifi className='h-8 w-8 p-1 text-success-500' />
            <p>Online</p>
          </div>
        </Chip>
      ) : (
        <Chip size='md' className='p-2' color='danger' variant='flat'>
          <div className='flex items-center'>
            <NoWifi className='h-8 w-8 p-1 text-red-500' />
            <p>Offline</p>
          </div>
        </Chip>
      )}
    </Fragment>
  )
}

export default OnlineStatus
