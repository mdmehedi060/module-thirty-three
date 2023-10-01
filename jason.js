const user = { name: 'Tushar', id: '01', job: 'actor' };
const stringifyed = JSON.stringify(user);
// console.log(user);
// console.log(stringifyed);

const shop = {
  owner: 'Alia',
  Adress: {
    street: 'kochokhet voter goli',
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  Produects: ['laptop', 'monitor', 'mic', 'keybord'],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);