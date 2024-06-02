"use client";
export default function Button() {
  return (
    <div className="mt-5">
        <button className="bg-green-500 rounded-sm px-4 py-2" onClick={()=>console.log('i have clicked ')}>CLick here</button>
      </div>
  )
}
