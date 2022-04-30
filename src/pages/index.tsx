import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {

  const customers = [
    new Customer('Ana', 34, '1'),
    new Customer('Bia', 45, '2'),
    new Customer('Carlos', 23, '3'),
    new Customer('Pedro', 54, '4'),
  ]

  function selectedCustomer(customer: Customer) {
    console.log(customer.name);
  }

  function excludedCustomer(customer: Customer) {
    console.log(`Excluded... ${customer.name}`);
  }

  function saveCustomer(customer: Customer) {
    console.log(customer);
    
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

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
            onClick={() => setVisible('form')}
            className={`
              mb-4 
              bg-gradient-to-r from-green-500 to-green-700`}
          >
            Novo Cliente
          </Button>
        </div>
        <Table customers={customers}
          selectedCustomer={selectedCustomer}
          excludedCustomer={excludedCustomer}
        />
        </>
          
        ): (
          <Form
            customer={customers[2]}
            customerChanged={saveCustomer}
            canceled={() => setVisible('table')}
          
          />
          
        )}
      </Layout>
    </div>
  )
}