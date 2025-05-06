import { useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import { useCarrito } from "../../utils/useCarrito";

export const Checkout = () => {
  const productos = useCarrito((state) => state.productosCarrito);
  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Procesando pago..."); // Luego reemplazamos por Culqi/Niubiz
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-semibold text-amber-700">Datos de contacto</h2>

        <div className="space-y-4">
          <Input label="Nombre completo" name="nombre" value={form.nombre} onChange={handleChange} required />
          <Input label="Correo electrónico" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Input label="Teléfono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} />
          <Textarea label="Dirección" name="direccion" value={form.direccion} onChange={handleChange} />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl text-lg transition"
        >
          Proceder al pago
        </button>
      </form>

      {/* Resumen */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 space-y-6">
        <div className="flex items-center gap-3 text-amber-600">
          <ShoppingCart size={24} />
          <h2 className="text-xl font-semibold">Resumen del pedido</h2>
        </div>

        {productos.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <ul className="space-y-4">
            {productos.map((p) => (
              <li key={p.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div>
                  <p className="font-medium">{p.nombre}</p>
                  <p className="text-sm text-gray-500">Cantidad: {p.cantidad}</p>
                </div>
                <p className="text-amber-700 font-semibold">S/ {p.precio * p.cantidad}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="text-amber-700">S/ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        {...props}
      />
    </div>
  );
}

function Textarea({ label, name, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        rows={3}
        {...props}
      />
    </div>
  );
}
