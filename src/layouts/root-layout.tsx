'use client'

import { StateType } from '@/store'
import Head from 'next/head'
import React, { Fragment, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import LoadingScreen from '@/components/loading-screen'

type Props = {
  children: ReactNode
  title?: string
}

const RootLayout = (props: Props) => {
  const loaderState = useSelector((state: StateType) => state.loaderState)

  return (
    <Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_PROJECT_NAME}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='' />
        <meta name='keyword' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      </Head>
      <main>
        <LoadingScreen isLoading={loaderState.loader > 0} />
        {props.children}
      </main>
    </Fragment>
  )
}

export default RootLayout
