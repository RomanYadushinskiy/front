import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from '@app/common/components/footer-link/footer-link.component';

export default {
  title: 'Common/Footer Link',
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
    <ul>
        <FooterLink {...args} />
    </ul>
);

export const View = Template.bind({});
View.args = {
    href: "tel:+0441234567",
    children: "044 123 45 67"
};