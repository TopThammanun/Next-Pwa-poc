import { Fragment, ReactElement } from 'react'
import MainLayout from '@/layouts/main-layout'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-wrap items-center justify-center gap-5'>Template NextJs and NextUI</div>
      </div>
    </Fragment>
  )
}

export default Home
Home.auth = false

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}
