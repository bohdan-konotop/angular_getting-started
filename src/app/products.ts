export interface Product {
  id: number,
    title: string,
    description?: string,
    price: number,
}

export const products: Product[] = [
{
id: 0,
title: 'Phone XL',
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
'incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.',
price: 1100,
},
{
id: 1,
title: 'Phone Standart',
description: 'Vel pharetra vel turpis nunc eget lorem dolor. Semper eget duis at ' +
'tellus at urna condimentum. Ante in nibh mauris cursus mattis.',
price: 800
},
{
id: 2,
title: 'Phone Mini',
description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
' mollit anim id est laborum.',
price: 500
},
{
id: 3,
title: 'Phone',
price: 350
}
]
