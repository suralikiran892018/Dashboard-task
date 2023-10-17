function Product({ image, title, description }) {
  return (
    <div className="flex gap-4 ">
      <img
        src={image}
        className="w-20 object-contain aspect-video rounded-xl"
        alt={title}
      />
      <div className="flex-grow">
        <h5 className="text-lg font-bold overflow-hidden">{title}</h5>
        <p className="w-48 xl:w-96 text-sm overflow-hidden whitespace-nowrap text-slate-600 text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProductsTable({ data }) {
  return (
    <table className="my-2 w-full overflow-scroll">
      <thead className="border-b ">
        <tr className="text-slate-500">
          <th className="text-left">Product Name</th>
          <th className="py-4">Stock</th>
          <th className="py-4">Price</th>
          <th className="py-4">Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="w-[80%] py-4">
            <img
              style={{ width: "9%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq36VMfQh9vJai9q-0egbgdjwsIsI_t436HA&usqp=CAU"
              alt=""
            />

            <h1 style={{ marginTop: "-60px", marginLeft: "130px" }}>
              Sharpness Illistartion{" "}
            </h1>
            <p style={{ marginTop: "10px", marginLeft: "130px" }}>
              Lorem ipsum dolor sit amet consectetur,{" "}
            </p>
          </td>

          <td className="w-[10%] py-2 text-center">32 in Stcok</td>
          <td className="w-[10%] py-2 text-center font-bold">$45.99</td>
          <td className="w-[10%] py-2 text-center">
            <p> 20</p>
          </td>
        </tr>



        <tr>
        <td className="w-[80%] py-4">
          <img
            style={{ width: "9%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpl86be0lsFM1sArPLr56nklhgHxAyoC3YQ&usqp=CAU"
            alt=""
          />

          <h1 style={{ marginTop: "-60px", marginLeft: "130px" }}>
            Sharpness Illistartion{" "}
          </h1>
          <p style={{ marginTop: "10px", marginLeft: "130px" }}>
            Lorem ipsum dolor sit amet consectetur,{" "}
          </p>
        </td>

        <td className="w-[10%] py-2 text-center">32 in Stcok</td>
        <td className="w-[10%] py-2 text-center font-bold">$45.99</td>
        <td className="w-[10%] py-2 text-center">
          <p> 20</p>
        </td>
      </tr>



      </tbody>
    </table>
  );
}

export default ProductsTable;
