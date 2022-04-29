import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  customer: Customer
}

export default function Form (props: FormProps) {
  const id = props.customer?.id
  const [name, setName] = useState(props.customer?.name ?? '')
  const [age, setAge] = useState(props.customer?.age ?? 0)
  return (
    <div>
      { id ? (
        <Input
          readOnly
          title="Código"
          value={id}
          className="mb-5"

        />
      ) : false }
      <Input
        title="Name"
        value={name}
        onChange={setName}
        className="mb-5"
        />
      <Input
        title="Age"
        type="number"
        value={age}
        onChange={setAge}
        />
        <div className="flex justify-end mt-7">
          <Button className="mr-2 bg-gradient-to-r from-blue-500 to-blue-700">
            {id ? 'Alterar' : 'Salvar'}
          </Button>
          <Button className=" bg-gradient-to-r from-gray-500 to-gray-700">
              Cancelar
          </Button>
        </div>
    </div>
    
  )
}