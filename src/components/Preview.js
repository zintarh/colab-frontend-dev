import React from "react";
import { Modal } from "./Modal";

export default function Preview({ isOpen, closeModal, movie }) {
	console.log(movie);
	return (
		<Modal isOpen={isOpen} closeModal={closeModal} title="">
			<p className="font-bold text-2xl">{movie.name}</p>
			<div className="w-full h-[400px] pt-5 pb-10">
				<img
					className="w-full h-full object-cover"
					src={movie.img}
					alt="movie image"
				/>
				<div className="flex gap-5 py-4">
					<p className="font-bold">
						Year: <span className="font-normal">{movie.year}</span>
					</p>
					<p className="font-bold">
						Rating: <span className="font-normal">{movie.rating}</span>
					</p>
				</div>
			</div>
		</Modal>
	);
}
