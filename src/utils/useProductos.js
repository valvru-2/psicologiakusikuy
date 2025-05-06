import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Ajustá la ruta si es necesario

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase.from("productos").select("*");
      if (error) {
        console.error(error);
        setError(error);
        setProductos([]);
      } else {
        setProductos(data);
      }
      setLoading(false);
    };

    fetchProductos();
  }, []);

  return { productos, loading, error };
}