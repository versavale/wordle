import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Come Giocare" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Indovina la parolina in 6 tentativi. Dopo ogni tentativo, il colore
        delle caselle c ambierà a seconda di quanto la tua risposta si avvicina
        alla soluzione.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500">
        La lettera W è nella parola, e nel posto giusto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500">
        La lettera L è nella parola, ma nel posto sbagliato.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500">La lettera U non è nella parola.</p>
    </BaseModal>
  )
}
