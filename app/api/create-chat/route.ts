import { downloadPDF } from "@/utils/files"

export async function POST(request:Request){

  const url= await request.json()

   const pdf = await downloadPDF(url)
   console.log("pdf ",pdf)
  return Response.json({url})
}
