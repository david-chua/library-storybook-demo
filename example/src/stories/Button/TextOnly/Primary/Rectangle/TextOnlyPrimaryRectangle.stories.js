import React from 'react';
import { Button } from '../../../../../../../src/components/Button';
import { 
    DefaultPrimaryRectangleProps,
    PrimaryRectangleButton,
    DisabledPrimaryRectangleProps,
    HoverPrimaryRectangleProps,
    SelectedPrimaryRectangleProps
} from '../../../../../../../src/props/TextOnly/Primary/TextOnlyPrimaryRectangleProps';

export default {
  title: 'Buttons/Text Only/Primary/Rectangle',
  component: Button,
};

const TemplateButton= (args) => {
    return (
    <Button {...args}/>
    )
}

const Default = TemplateButton.bind({});
Default.args = DefaultPrimaryRectangleProps;

const Hover = TemplateButton.bind({});
Hover.args = HoverPrimaryRectangleProps

const Selected = TemplateButton.bind({});
Selected.args = SelectedPrimaryRectangleProps

const Disabled = TemplateButton.bind({});
Disabled.args = DisabledPrimaryRectangleProps

const SecondDefault = PrimaryRectangleButton;
SecondDefault.args = {text: "Action"}

export { Default, Hover, Selected, Disabled, SecondDefault }; 



