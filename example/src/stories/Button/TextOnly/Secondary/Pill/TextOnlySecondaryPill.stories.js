import React from 'react';
import { Button } from '../../../../../../../src/components/Button';
import { 
  DefaultSecondaryPillProps,
  HoverSecondaryPillProps,
  SelectedSecondaryPillProps,
  DisabledSecondaryPillProps

} from '../../../../../../../src/props/TextOnly/Secondary/TextOnlySecondaryPillProps';

export default {
  title: 'Buttons/Text Only/Secondary/Pill',
  component: Button,
};

const TemplateButton= (args) => {
    return (
    <Button {...args}/>
    )
}

const DefaultPill = TemplateButton.bind({});
DefaultPill.args = DefaultSecondaryPillProps;



export { DefaultPill }; 



