import React, { useState } from "react";
import { databases } from "../../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = "session_records";

function RecordsForm() {
  const [selectedType, setSelectedType] = useState("DHL Fastest Lap");

  const [driver_id, setDriver_id] = useState("");
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Replace these IDs later
  const recordIds = {
    "DHL Fastest Lap": "6a44f1530027e7a504c9",
    "Driver_id Of The Day": "6a44f0ff003db308570e",
    "Speed Master": "6a44f1b400151bf1c69b",
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const rowId = recordIds[selectedType];

      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, rowId, {
        driver_id,
        value,
      });

      setMessage(`${selectedType} updated successfully`);

      setDriver_id("");
      setValue("");
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="w-full flex justify-center px-6 py-10">
      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-400 mb-8">
          Session Records
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          >
            <option>DHL Fastest Lap</option>
            <option>Driver_id Of The Day</option>
            <option>Speed Master</option>
          </select>

          <input
            type="text"
            placeholder="Driver_id"
            value={driver_id}
            onChange={(e) => setDriver_id(e.target.value)}
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <button
            disabled={loading}
            className="bg-red-950 hover:bg-red-900 p-3 rounded-lg text-gray-400 font-semibold"
          >
            {loading ? "Updating..." : "Update Record"}
          </button>

          {message && <p className="text-center text-green-950">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default RecordsForm;
