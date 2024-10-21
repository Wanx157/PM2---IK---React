"use client";
import {useState} from "react";

export default function Favcolor(){
    const [warna, setwarna] = useState("White");
    const [bgcolor, setbgcolor] = useState("White")

    return(
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-black">Warna Favorit Saya Adalah</h1>
            <div className="w-24 rounded-md container mx-auto p-1 bg-white">
            <h1 className={`text-${bgcolor}`}> {warna}</h1>
            </div>
            <hr className="m-10" />
            <p >Ubah state warna ke warna:</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setwarna("Red"); setbgcolor("red-500")}}
                >
                Merah
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setwarna("Yellow"); setbgcolor("yellow-500")}}
                >
                Kuning
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setwarna("Blue"); setbgcolor("blue-500")}}
                >
                Biru
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setwarna("Green"); setbgcolor("green-500")}}
                >
                Hijau
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setwarna("Purple"); setbgcolor("purple-500")}}
                >
                Ungu
            </button>
        </div>
    );
}