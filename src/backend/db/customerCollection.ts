import firebase from "../config";
import Customer from "../../core/Customer";
import repositoryCustomer from "../../core/reopositoryCustomer";

export default class customerCollection implements repositoryCustomer {
 
  #converter = {
    toFirestore(customer: Customer) {
      return {
        nome: customer.name,
        age: customer.age,
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Customer {
      const data = snapshot?.data(options)
      return new Customer(data.name, data.age, snapshot?.id)
    }
  }

  async save(customer: Customer): Promise<Customer> {
    if(customer?.id) {
      await this.colection().doc(customer.id).set(customer)
      return customer
    } else {
      const docRef = await this.colection().add(customer)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async delete(customer: Customer): Promise<void> {
    return this.colection().doc(customer.id).delete()
  }

  async getAll(): Promise<Customer[]> {
    const query = await this.colection().get() 
    return query.docs.map(doc => doc.data()) ?? []
  }

  private colection() {
    return firebase
    .firestore().collection('customers')
    .withConverter(this.#converter)
  }

}