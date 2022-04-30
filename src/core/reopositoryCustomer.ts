import Customer from "./Customer";

export default interface repositoryCustomer {
  save(customer: Customer): Promise<Customer>
  delete(customer: Customer): Promise<void>
  getAll(): Promise<Customer[]>
}