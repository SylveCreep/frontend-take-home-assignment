import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

interface TabItem {
  value: string
  label: string
}

const TabItemsData: TabItem[] = [
  {
    value: '0',
    label: 'All',
  },
  {
    value: '1',
    label: 'Pending',
  },
  {
    value: '2',
    label: 'Completed',
  },
]

export type TCurrentStatus = '0' | '1' | '2'

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState<TCurrentStatus>('0')

  const TodoTabs = () => {
    const TabItem = (item: TabItem) => {
      return (
        <Tabs.Trigger
          className={`
        rounded-full
        px-6
        py-3
        ${
          item.value === currentStatus
            ? 'border-[1px] border-gray-700  bg-gray-700 text-white'
            : 'border-[1px] border-gray-200 text-gray-700'
        }
      `}
          value={String(item.value)}
        >
          {item.label}
        </Tabs.Trigger>
      )
    }

    const handleChangeTab = (e: string) => {
      switch (e) {
        case '0':
          setCurrentStatus(e)
          break
        case '1':
          setCurrentStatus(e)
          break
        case '2':
          setCurrentStatus(e)
          break
        default:
          break
      }
    }

    return (
      <Tabs.Root
        defaultValue={'completed'}
        onValueChange={(e: string) => handleChangeTab(e)}
      >
        <Tabs.List className="flex flex-row gap-3">
          {TabItemsData?.map((item: TabItem) => {
            return (
              <TabItem
                key={String(item.value)}
                value={item.value}
                label={item.label}
              />
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    )
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <TodoTabs />
        </div>

        <div className="pt-10">
          <TodoList status={currentStatus} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
