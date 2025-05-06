// /prisma/seed.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: 'Remera negra', description: 'Remera algodón', price: 29.99, imageUrl: '/img/remera.jpg' },
      { name: 'Pantalón beige', description: 'Pantalón slim fit', price: 59.99, imageUrl: '/img/pantalon.jpg' },
    ],
  });
}

main().finally(() => prisma.$disconnect());
