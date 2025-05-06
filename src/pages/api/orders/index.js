import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, address, cart } = req.body;
    if (!name || !email || !address || !cart?.length) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await prisma.order.create({
      data: {
        name,
        email,
        address,
        total,
        items: {
          create: cart.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
      },
    });

    res.status(201).json(order);
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
