import Client from "../core/Client"

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function rederHead() {
    return (
      <tr>
        <th className="p-4 text-left">Código</th>
        <th className="p-4 text-left">Nome</th>
        <th className="p-4 text-left">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' :  'bg-purple-100'}`}>
          <td className="p-4 text-left">{client.nome}</td>
          <td className="p-4 text-left">{client.id}</td>
          <td className="p-4 text-left">{client.idade}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full overflow-hidden rounded-xl">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-600 to-purple-800
      `}>
        { rederHead() }
      </thead>
      <tbody>
        { renderData () }
      </tbody>
    </table>
  )
}