import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Informazioni" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Questa è la versione italiana di{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Wordle{' '}
        </a>
        - basato sul codice del clone{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          scritto da Hanna Park.
        </a>
        <br></br>
        La lista delle parole disponibili è basata sulla lista di frequenza
        delle parole italiane con cinque lettere. <br></br>
        Gioca all'originale (EN){' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          qui
        </a>
        .
      </p>
    </BaseModal>
  )
}
