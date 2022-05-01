import Customer from "./Customer";

export default interface REPOSITORYCUSTOMER {
  save(customer: Customer): Promise<Customer>
  delete(customer: Customer): Promise<void>
  getAll(): Promise<Customer[]>
}