import { Product } from "../types"

type ProductFormProps ={
    product?: Product
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <>
           <div className="mb-4">
          <label htmlFor="name" className="text-gray-800">
            Nombre del Producto:
          </label>
          <input
            type="text"
            id="name"
            className="mt-2 block w-full p-3 bg-slate-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={product?.name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-800">
            Precio del Producto:
          </label>
          <input
            type="number"
            id="price"
            className="mt-2 block w-full p-3 bg-slate-50"
            placeholder="Precio del Producto. ej. 200, 300"
            name="price"
            defaultValue={product?.price}
          />
        </div>
    </>
  )
}
