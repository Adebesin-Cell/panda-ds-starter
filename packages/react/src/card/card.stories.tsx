import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button/button'
import { Card } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const WithAction: Story = {
  args: {
    children: (
      <>
        <p>Your changes are not saved yet.</p>
        <Button size="sm">Save</Button>
      </>
    ),
  },
}
