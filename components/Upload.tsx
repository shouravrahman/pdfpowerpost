"use client";
import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { UploadButton } from "@/utils/uploadthing.ts";
import { useMutation } from "@tanstack/react-query";
import { downloadPDF } from "@/utils/files";
import axios from "axios";

export default function Upload() {
	const [pdfData, setPdfData] = React.useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
	};

   const {mutate} = useMutation({
      mutationFn: async (url) => {
         const response = await axios.post("/api/create-chat",{
           url
          })
          return response.data
      }
   })
	return (
		<section className="h-fit text-white flex items-center justify-center bg-[#0c0644] py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
			<div className="w-[500px] p-6 bg-[#29255798] rounded-xl shadow-lg">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-2">
						<div className="flex items-center justify-center">
							<label className="text-lg  font-bold text-center">
								Upload your pdf here
							</label>
							{/* {pdfData && (
								<button
									type="button"
									onClick={() => setPdfData("")}
									className="text-sm  hover:text-gray-100 focus:outline-none"
								>
									Edit PDF
								</button>
							)} */}
						</div>
						{pdfData ? (
							<a
								target="_blank"
								href={pdfData[0]?.url}
								className="pt-4 text-blue-400 underline"
							>
								{pdfData[0]?.name}
							</a>
						) : (
							<UploadButton
								endpoint={"pdfUploader"}
								onClientUploadComplete={(data: any) => {
									console.log("files", data);
									setPdfData(data);
                           mutate(data[0].url,{
                              onSuccess: (data) => {
                                 console.log(data)
                                 // await downloadPDF(data)
                              },
                              onError:(err) => {
                                 console.log(err)
                                 toast.error(err.message)
                              },
                           })
									toast.success("Upload completed");
								}}
								onUploadError={(error) => {
									console.log(error);
									toast.error("Upload Failed");
								}}
								className="w-full ut-button:bg-[#2C16FF]  flex justify-center  rounded-md py-4  transition duration-300"
							/>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}
