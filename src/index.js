import React from 'react'
import styles from './styles.module.css'
import { Button } from './components/Button'
import { DefaultPrimaryPillProps, SelectedPrimaryPillProps} from './props/TextOnlyPrimaryPillProps'
import { PrimaryRectangleButton } from './props/TextOnly/Primary/TextOnlyPrimaryRectangleProps'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { Button, DefaultPrimaryPillProps, SelectedPrimaryPillProps, PrimaryRectangleButton }; 
