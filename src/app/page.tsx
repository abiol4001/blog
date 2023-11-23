import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex w-full'>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
