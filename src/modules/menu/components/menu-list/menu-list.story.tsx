import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';

export default {
  title: 'Menu/Menu List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args: any) => (
  <MenuList {...args} />
);

export const View = Template.bind({})
