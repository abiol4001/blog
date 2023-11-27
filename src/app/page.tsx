import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({searchParams}: {searchParams: {page: string}}) {

  const page: number = parseInt(searchParams.page) || 1

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex flex-col lg:flex-row w-full px-4 md:px-10 lg:px-20'>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}
