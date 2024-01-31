import Navbar from "../../componant/NavBar";
import OtherNavBar from "../../componant/otherNavBar";

const AddWatch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const formDataToObject = (formData) => {
      const productData = {};

      productData["Product Name"] = formData.get("productName");

      const productImages = [];
      for (let i = 1; i <= 3; i++) {
        const imageKey = `productImage${i}`;
        const imageUrl = formData.get(imageKey);
        if (imageUrl) {
          productImages.push(imageUrl);
        }
      }
      productData["Product Images"] = formData.get("imgUrl");

      // Price
      productData["Price"] = {
        Original: formData.get("originalPrice"),
        Discounted: formData.get("discountedPrice")
      };

      // Details
      productData["Details"] = {
        Style: formData.get("style"),
        "Clasp type": formData.get("claspType"),
        "Water resistance depth": formData.get("waterResistanceDepth"),
        Movement: formData.get("movement"),
        "Case material": formData.get("caseMaterial"),
        "Band length": formData.get("bandLength"),
        "Dial window material type": formData.get("dialWindowMaterialType"),
        "Case thickness": formData.get("caseThickness"),
        "Band width": formData.get("bandWidth"),
        "Case shape": formData.get("caseShape"),
        "Item type": formData.get("itemType"),
        "Band material type": formData.get("bandMaterialType"),
        "Dial diameter": formData.get("dialDiameter"),
        Gender: formData.get("gender"),
        SKU: formData.get("sku"),
        "Care Label": formData.get("careLabel"),
        Color: formData.get("color"),
        "Main Material": formData.get("mainMaterial"),
        Model: formData.get("model"),
        "Production Country": formData.get("productionCountry"),
        "Size (L x W x H cm)": formData.get("size"),
        "Weight (kg)": formData.get("weight")
      };

      return productData;
    };

    const productData = formDataToObject(formData);
    console.log(productData);

    fetch("http://localhost:5000/watchData", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(productData)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="absolute">
       <OtherNavBar></OtherNavBar>
      </div>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mx-32 mt-40 w-6/12 bg-gray-100 px-9 py-16"
        action=""
      >
        <h1 className="font-Questrial tracking-widest uppercase text-xl">
          Add Watch
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <label
            className="flex flex-col gap-3 col-span-3"
            htmlFor="productName"
          >
            <h1 className="font-semibold">Product Name</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="productName"
              id="productName"
              placeholder="Product Name"
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="originalPrice"
          >
            <h1 className="font-semibold">Original Price</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="originalPrice"
              id="originalPrice"
              placeholder="Original Price"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="discountedPrice"
          >
            <h1 className="font-semibold">Discounted Price</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="discountedPrice"
              id="discountedPrice"
              placeholder="Discounted Price"
            />
          </label>
        </div>
        {/* Add more input fields based on the provided product details */}
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="style">
            <h1 className="font-semibold">Style</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="style"
              id="style"
              placeholder="Style"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="claspType">
            <h1 className="font-semibold">Clasp Type</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="claspType"
              id="claspType"
              placeholder="Clasp Type"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="waterResistanceDepth"
          >
            <h1 className="font-semibold">Water Resistance Depth</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="waterResistanceDepth"
              id="waterResistanceDepth"
              placeholder="Water Resistance Depth"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="movement">
            <h1 className="font-semibold">Movement</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="movement"
              id="movement"
              placeholder="Movement"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="caseMaterial"
          >
            <h1 className="font-semibold">Case Material</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="caseMaterial"
              id="caseMaterial"
              placeholder="Case Material"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="bandLength"
          >
            <h1 className="font-semibold">Band Length</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="bandLength"
              id="bandLength"
              placeholder="Band Length"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="dialWindowMaterialType"
          >
            <h1 className="font-semibold">Dial Window Material Type</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="dialWindowMaterialType"
              id="dialWindowMaterialType"
              placeholder="Dial Window Material Type"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="caseThickness"
          >
            <h1 className="font-semibold">Case Thickness</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="caseThickness"
              id="caseThickness"
              placeholder="Case Thickness"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="bandWidth">
            <h1 className="font-semibold">Band Width</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="bandWidth"
              id="bandWidth"
              placeholder="Band Width"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="caseShape">
            <h1 className="font-semibold">Case Shape</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="caseShape"
              id="caseShape"
              placeholder="Case Shape"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="itemType">
            <h1 className="font-semibold">Item Type</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="itemType"
              id="itemType"
              placeholder="Item Type"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="bandMaterialType"
          >
            <h1 className="font-semibold">Band Material Type</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="bandMaterialType"
              id="bandMaterialType"
              placeholder="Band Material Type"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="dialDiameter"
          >
            <h1 className="font-semibold">Dial Diameter</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="dialDiameter"
              id="dialDiameter"
              placeholder="Dial Diameter"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="gender">
            <h1 className="font-semibold">Gender</h1>
            <select
              className="border px-6 py-3 rounded w-full"
              name="gender"
              id="gender"
              placeholder="Gender"
            >
              <option value="men">Male</option>
              <option value="woman">Female</option>
            </select>
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="sku">
            <h1 className="font-semibold">SKU</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="sku"
              id="sku"
              placeholder="SKU"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="careLabel">
            <h1 className="font-semibold">Care Label</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="careLabel"
              id="careLabel"
              placeholder="Care Label"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="color">
            <h1 className="font-semibold">Color</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="color"
              id="color"
              placeholder="Color"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="mainMaterial"
          >
            <h1 className="font-semibold">Main Material</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="mainMaterial"
              id="mainMaterial"
              placeholder="Main Material"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="model">
            <h1 className="font-semibold">Model</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="model"
              id="model"
              placeholder="Model"
            />
          </label>
          <label
            className="flex flex-col gap-3 col-span-1"
            htmlFor="productionCountry"
          >
            <h1 className="font-semibold">Production Country</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="productionCountry"
              id="productionCountry"
              placeholder="Production Country"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="size">
            <h1 className="font-semibold">Size (L x W x H cm)</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="size"
              id="size"
              placeholder="Size (L x W x H cm)"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-3 col-span-1" htmlFor="weight">
            <h1 className="font-semibold">Weight (kg)</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="weight"
              id="weight"
              placeholder="Weight (kg)"
            />
          </label>
          <label className="flex flex-col gap-3 col-span-1" htmlFor="weight">
            <h1 className="font-semibold">Img url</h1>
            <input
              type="text"
              className="border px-6 py-3 rounded w-full"
              name="imgUrl"
              id="weight"
              placeholder="Img url"
            />
          </label>
        </div>
        <button className="bg-gray-600 text-white py-3 rounded"> submit</button>
      </form>
    </>
  );
};

export default AddWatch;
