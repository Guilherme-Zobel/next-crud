import { useEffect, useState } from "react";
import customerCollection from "../backend/db/CustomerCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import repositoryCustomer from "../core/ReopositoryCustomer";

export default function Home() {

  const repo: repositoryCustomer = new customerCollection()
  
  const [customer, setCustomer] = useState<Customer>(Customer.empty)
  const [customers, setCustomers] = useState<Customer[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers)
      setVisible('table')
    })
  }

  function selectedCustomer(customer: Customer) {
    setCustomer(customer)
    setVisible('form')
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
    setVisible('form')
  }

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        { visible === 'table' ? (
        <>
        <div className="flex justify-end">
          <Button
            onClick={newCustomer}
            className={`
              mb-4 
              bg-gradient-to-r from-green-500 to-green-700`}
          >
            Novo Cliente
          </Button>
        </div>
        <Table customers={customers}
          selectedCustomer={selectedCustomer}
          deleteCustomer={deleteCustomer}
        />
        </>
          
        ) : (
          <Form
            customer={customer}
            customerChanged={saveCustomer}
            canceled={() => setVisible('table')}
          
          />
          
        )}
      </Layout>
    </div>
  )
}