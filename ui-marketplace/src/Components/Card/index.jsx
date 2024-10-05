import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/ShoppingCart";

export const Card = (product) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div className="flex my-5 px-5 width-products text-white">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
        className="w-56 h-56 rounded-lg"
      />

      <section className="w-full flex flex-col justify-evenly items-center max-sm:ml-5 max-md:ml-3">
        <h3 className=" text-cyan-500 text-lg font-extrabold text-center">
          {product.product.name.toUpperCase()}
        </h3>

        <p className="text-white">{product.product.formattedPrice}</p>
        <p className="text-white">{product.product.sku}</p>

        <button
          onClick={() => context.setCountItems(context.countItems + 1)}
          className="bg-cyan-600 rounded-full w-10 h-10 "
        >
          <img
            title="Agregar al carrito"
            className="w-6 h-6 m-auto"
            src="/add-shoping.svg"
            alt="Agregar al carrito"
          />
        </button>
      </section>
    </div>
  );
};
