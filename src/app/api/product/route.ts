import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Air Jordan 1 Low SE",
//     price: 1909000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30fdd49f-8d18-4d19-a82f-fec143c9eaca/air-jordan-1-low-se-shoes-WSkjPL.png",
//   },
//   {
//     id: 2,
//     title: "Nike Air Force 1'07",
//     price: 1549000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
//   },
//   {
//     id: 3,
//     title: "Nike Dunk Low Retro",
//     price: 1549000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e6df1da-0701-4734-8615-5097961e863d/dunk-low-retro-shoes-bCzchX.png",
//   },
// ];
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Product not found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
