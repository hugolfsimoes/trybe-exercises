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
  const valorTotal = order.payment.total = '50';
  const nomeCliente = order.name = 'Luiz Silva';
  const pizzaPedida = Object.keys(order.order.pizza)
  const bebidasPedidas = order.order.drinks.coke.type;
  order.order.pizza.calabresa;
  console.log(`Olá ${nomeCliente}, o total do seu pedido de ${pizzaPedida} e ${bebidasPedidas} é R$ ${valorTotal},00.`);
}

orderModifier(order);