import { Dialog } from './assets/components/ui/dialog'
import { CreateGoal } from './assets/components/ui/create-goal'
import { Summary } from './assets/components/ui/summary'
import { EmptyGoals } from './assets/components/ui/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //sixty seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}

//JSX - Javascript XML
//TODAS AS FUNÇÕES DO REACT QUE COMEÇAM COM "USE" SÃO CHAMADAS DE HOOK

//para que uma variável seja alterada em tempo real na tela, é preciso do useState, que gera um array contendo a variável a ser alterada e uma função que substitui seu valor, como no exemplo abaixo

//JSON.stringify(summary, null, 2) --> o null e o 2 são só para melhorar a identação do JSON

/*
CONCEITO DE ESTADO - REACT

  const [count, AumentarContagem] = useState(0)

  const increment = () => {
    AumentarContagem(count + 1)
  }

  useEffect() -> precisa de uma função de callback com tudo que vai ser executado, e após tudo, no fechamento da tag, se coloca um array chamado "array de dependências" que indica que assim que aquela variável for alterada, o useEffect vai ser executado novamente (sintaxe semelhante a de um setTimeout ou setInterval)
*/
