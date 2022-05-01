import { useEffect, useState } from "react"
import customerCollection from "../backend/db/CustomerCollection"
import Customer from "../core/Customer"
import repositoryCustomer from "../core/ReopositoryCustomer"
import useTableOrForm from "./useTableOrForm"

export default function useCustomers () {
  const repo: repositoryCustomer = new customerCollection()
  
  const {
    visibleTable,
    displayTable,
    displayForm } = useTableOrForm()

  const [customer, setCustomer] = useState<Customer>(Customer.empty)
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers)
      displayTable()
    })
  }

  function selectCustomer(customer: Customer) {
    setCustomer(customer)
    displayForm()
  }

  async function deleteCustomer(customer: Customer) {
    await repo.delete(customer)
    getAll()
  }

  async function saveCustomer(customer: Customer) {
    await repo.save(customer)
    getAll()
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    displayForm()
  }

  return {
    newCustomer,
    saveCustomer,
    deleteCustomer,
    selectCustomer,
    getAll,
    customer,
    customers,
    visibleTable,
    displayTable,
  }
}
