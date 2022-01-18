import { PrimaryPalette } from "../../../constants/PrimaryPalette"

export const DefaultSecondaryPillProps = {
    width: '92px',
    height: '46px',
    top: '2px',
    left: '12px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['White'], 
    borderRadius: '49px',
    textColor: PrimaryPalette.Green['Green 400'],
    borderColor: PrimaryPalette.Green['Green 400'],
    border: '1px solid'
}

export const HoverSecondaryPillProps = {
    width: '92px',
    height: '46px',
    top: '2px',
    left: '12px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['White'], 
    borderRadius: '49px',
    textColor: PrimaryPalette.Green['Green 500'],
    border: PrimaryPalette.Green['Green 500']
}

export const SelectedSecondaryPillProps = {
    width: '92px',
    height: '46px',
    top: '2px',
    left: '12px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['White'], 
    borderRadius: '49px',
    textColor: PrimaryPalette.Monochrome['Black']
}

export const DisabledSecondaryPillProps = {
    width: '92px',
    height: '46px',
    top: '2px',
    left: '12px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['White'], 
    borderRadius: '49px',
    textColor: PrimaryPalette.Monochrome['Gray 200']
}