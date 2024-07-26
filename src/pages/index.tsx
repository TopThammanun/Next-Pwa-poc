import { Fragment, ReactElement } from 'react'
import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import { Button, Input } from '@nextui-org/react'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <div className='flex w-full flex-col gap-5'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-8'>
          <h1 className='text-xl font-semibold'>PWA-OFFLINE-MODE</h1>

          <div className='w-full px-5 md:px-[10%] lg:px-[20%]'>
            <div className='grid grid-cols-12 gap-4'>
              <Input
                type='email'
                label='Email address'
                placeholder='Enter your email'
                className='col-span-12'
                isRequired
                labelPlacement='outside'
              />
              <Input
                type='text'
                label='First name'
                placeholder='Enter your first name'
                className='col-span-6'
                isRequired
                labelPlacement='outside'
              />
              <Input
                type='text'
                label='Last name'
                placeholder='Enter your last name'
                className='col-span-6'
                isRequired
                labelPlacement='outside'
              />
              <Input
                type='address'
                label='Address'
                placeholder='Enter your address Lane 1, Street 1'
                className='col-span-12'
                isRequired
                labelPlacement='outside'
              />
              <Input
                type='city'
                label='City'
                placeholder='Enter your city'
                className='col-span-6'
                isRequired
                labelPlacement='outside'
              />
              <Input
                type='postcode'
                label='Postcode'
                placeholder='12345'
                className='col-span-6'
                isRequired
                labelPlacement='outside'
              />
              <Button color='primary' className='col-span-12 mt-5'>
                Submit
              </Button>
            </div>
          </div>
        </div>
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
