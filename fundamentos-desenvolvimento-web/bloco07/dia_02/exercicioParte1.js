const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const nomeEntregador = order.order.delivery.deliveryPerson;
  const nomeCliente = order.name;
  const telefoneCliente = order.phoneNumber;
  const ruaCliente = order.address.street;
  const numeroEnderecoCLiente = order.address.number;
  const aptCliente = order.address.apartment;

  console.log(`Olá ${nomeEntregador}, entraga para: ${nomeCliente}, Telefone: ${telefoneCliente}, R. ${ruaCliente}, Nº: ${numeroEnderecoCLiente}, AP: ${aptCliente}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.payment.total = '50';
  const nomeCliente = order.name = 'Luiz Silva';
  order.order.pizza.muzzarella. =
    order.order.pizza.calabresa;
  const pizzaPedida = Object.keys(order.order.pizza)
  console.log(order);
  "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
}

orderModifier(order);