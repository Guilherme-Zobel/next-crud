import Customer from "../core/Customer"
import { iconEdition, iconTrash } from "./Icones"

interface TableProps {
  customers: Customer[]
  selectedCustomer?: (customer: Customer) => void
  excludedCustomer?: (customer: Customer) => void
}

export default function Table(props: TableProps) {

  const displayActions = props.excludedCustomer || props.selectedCustomer

  function rederHead() {
    return (
      <tr>
        <th className="p-4 text-left">Código</th>
        <th className="p-4 text-left">Nome</th>
        <th className="p-4 text-left">Idade</th>
        {displayActions ? <th className="p-4">Ações</th> : false}
      </tr>
    )
  }

  function renderData() {
    return props.customers?.map((customer, i) => {
      return (
        <tr key={customer.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' :  'bg-purple-100'}`}>
          <td className="p-4 text-left">{customer.name}</td>
          <td className="p-4 text-left">{customer.id}</td>
          <td className="p-4 text-left">{customer.age}</td>
          {displayActions ? renderAction(customer) : false}
        </tr>
      )
    })
  }

  function renderAction(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button onClick={()=> props.selectedCustomer?.(customer)} className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {iconEdition}
          </button>
          ) : false }
        {props.excludedCustomer ? (
          <button onClick={()=> props.excludedCustomer?.(customer)} className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {iconTrash}
          </button>
          ): false}
      </td>
    )
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