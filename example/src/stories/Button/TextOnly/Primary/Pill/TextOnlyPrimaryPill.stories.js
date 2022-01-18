import React from 'react';
import { Button } from '../../../../../../../src/components/Button';
import { 
    DefaultPrimaryPillProps,
    DisabledPrimaryPillProps,
    HoverPrimaryPillProps,
    SelectedPrimaryPillProps

} from '../../../../../../../src/props/TextOnly/Primary/TextOnlyPrimaryPillProps';

export default {
  title: 'Buttons/Text Only/Primary/Pill',
  component: Button,
};

const TemplateButton= (args) => {
    return (
    <Button {...args}/>
    )
}

const Default = TemplateButton.bind({});
Default.args = DefaultPrimaryPillProps

const Hover = TemplateButton.bind({});
Hover.args = HoverPrimaryPillProps

const Selected = TemplateButton.bind({});
Selected.args = SelectedPrimaryPillProps

const Disabled = TemplateButton.bind({});
Disabled.args = DisabledPrimaryPillProps

export { Default, Hover, Selected, Disabled }; 



