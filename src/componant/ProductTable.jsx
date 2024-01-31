import { useLoaderData } from "react-router-dom";

const ProductTable = () => {
  const product = useLoaderData();

  const {
    "Product Name": productName,
    // "Product Images": productImages,
    Price: { Original: originalPrice, Discounted: discountedPrice },
    Details: {
      Style,
      "Clasp type": claspType,
      "Water resistance depth": waterResistanceDepth,
      Movement,
      "Case material": caseMaterial,
      "Band length": bandLength,
      "Dial window material type": dialWindowMaterialType,
      "Case thickness": caseThickness,
      "Band width": bandWidth,
      "Case shape": caseShape,
      "Item type": itemType,
      "Band material type": bandMaterialType,
      "Dial diameter": dialDiameter,
      Gender,
      SKU,
      "Care Label": careLabel,
      Color,
      "Main Material": mainMaterial,
      Model,
      "Production Country": productionCountry,
      "Size (L x W x H cm)": size,
      "Weight (kg)": weight
    }
  } = product;

  return (
    <section className=" py-9 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-Questrial tracking-widest">
          {productName}
        </h1>
        <div className="text-lg flex gap-6 font-Questrial tracking-widest">
          <h1 className="text-red-600">{discountedPrice}</h1>
          <h1 className="line-through ">{originalPrice}</h1>
        </div>
          </div>
          <div className="">
              <table className="table-fixed w-full">
              <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Style</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize  ">{Style}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Clasp Type</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{claspType}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Water Resistance Depth</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{waterResistanceDepth}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Movement</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{Movement}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Case Material</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{caseMaterial}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Band Length</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{bandLength}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Dial Window Material Type</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{dialWindowMaterialType}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Case Thickness</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{caseThickness}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Band Width</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{bandWidth}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Case Shape</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{caseShape}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Item Type</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{itemType}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Band Material Type</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{bandMaterialType}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Dial Diameter</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{dialDiameter}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Gender</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{Gender}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">SKU</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{SKU}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Care Label</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{careLabel}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Color</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{Color}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Main Material</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{mainMaterial}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Model</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{Model}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Production Country</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{productionCountry}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Size (L x W x H cm)</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{size}</td>
        </tr>
        <tr className="border-b">
            <td className="px-3 py-4 font-lg font-Questrial uppercase border-r tracking-widest">Weight (kg)</td>
            <td className="px-3 py-4 font-Questrial text-sm capitalize ">{weight}</td>
        </tr>
              </table>
            </div>
    </section>
  );
};

export default ProductTable;
