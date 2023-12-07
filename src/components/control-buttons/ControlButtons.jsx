import './ControlButtons.css'
import { SetLanguageButton } from './set-language-button/SetLanguageButton.jsx'
// import { SoundIcon } from '../../elements/control-button-icons/ControlButtonIcons.jsx'
import { SetDarkModeButton } from './set-dark-mode-button/SetDarkModeButton.jsx'
import { SetColorPaletteButton } from './set-color-palette-button/SetColorPaletteButton'

export function ControlButtonsAndEmail () {
  return (
    <div className='CBAE_controlButtonIcons'>
      <div className='CBAE_control'>
        <SetDarkModeButton />
        {/* <button className='CBAE_controlIcon'><SoundIcon /></button> */}
        <SetColorPaletteButton />
        <SetLanguageButton />
      </div>
    </div>
  )
}
