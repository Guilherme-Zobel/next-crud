import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {

  const customers = [
    new Customer('Ana', 34, '1'),
    new Customer('Bia', 45, '2'),
    new Customer('Caralos', 23, '3'),
    new Customer('Pedro', 54, '4'),
  ]

  function selectedCustomer(customer: Customer) {
    console.log(customer.nome);
  }

  function excludedCustomer(customer: Customer) {
    console.log(`Excluded... ${customer.nome}`);
  }

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button className="mb-4">Novo Cliente</Button>
        </div>
        <Table customers={customers}
          selectedCustomer={selectedCustomer}
          excludedCustomer={excludedCustomer}
        />
      </Layout>
    </div>
  )
}