import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Card({ img, title, year, rating, openPreviewModal, id }) {

	return (
		<div className="">
			<div className="w-[200px] h-[250px] ">
				<img className="w-full h-full object-cover" src={img} />
			</div>

			<div className="pt-3">
				<p className="text-2xl font-bold">{title}</p>
				<div className="flex  items-center gap-4 py-2 ">
					<p className="text-base font-semibold">{year}</p>
					<div className="w-3 h-3 rounded-full bg-gray-500" />
					<div className="flex items-center gap-1">
						<StarIcon className="w-4 h-4 text-yellow-500" />
						<p className="text-base font-medium">{rating}</p>
					</div>
				</div>
				<button onClick={() => openPreviewModal(id)} className="bg-black text-white px-5 py-2 rounded-lg text-xs cursor-pointer">
					Preview
				</button>
			</div>
		</div>
	);
}
