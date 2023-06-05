import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});
View.args = {
  imagePath: '/assets/pizza/silver.jpg',
  weight: 0.8,
  title: 'Китайський Шовк',
  ingredients:
    'Тонкошаровий матеріал. Створює ефект шовку',
  price: 638,
};