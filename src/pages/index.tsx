import { Fragment, ReactElement, useEffect, useState } from 'react'
import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import OnlineStatus from '@/components/onlineStatus'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-wrap items-center justify-center gap-5'>PWA-OFFLINE-MODE</div>
        <OnlineStatus />
      </div>
    </Fragment>
  )
}

export default Home
Home.auth = false

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
