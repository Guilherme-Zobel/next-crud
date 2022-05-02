import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useCustomers from "../hooks/useCustomers";

export default function Home() {

  const {
    selectCustomer,
    deleteCustomer,
    saveCustomer,
    newCustomer,
    customer,
    customers,
    visibleTable,
    displayTable,
  } = useCustomers()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        { visibleTable ? (
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
          selectedCustomer={selectCustomer}
          deleteCustomer={deleteCustomer}
        />
        </>
          
        ) : (
          <Form
            customer={customer}
            customerChanged={saveCustomer}
            canceled={() => displayTable()}
          
          />
          
        )}
      </Layout>
    </div>
  )
}