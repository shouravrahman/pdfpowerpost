"use client";
import React from "react";

export default function Files({ data, handleDelete }: any) {
	return (
		<>
			{data.length > 0 && (
				<ul>
					{data.map((file: any) => (
						<li key={file.id}>
							<a href={file.key} target="_blank" rel="noreferrer">
								{file.name}
							</a>
							<button onClick={() => handleDelete(file.key)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
