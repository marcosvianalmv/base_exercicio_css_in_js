import { FormEvent, useState } from 'react'

import { FormSecao } from './styles'
import { BtnPesquisarCSS } from './styles'
import { CampoCSS } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormSecao onSubmit={aoEnviarForm}>
      <CampoCSS
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisarCSS type="submit">Pesquisar</BtnPesquisarCSS>
    </FormSecao>
  )
}
export default FormVagas
