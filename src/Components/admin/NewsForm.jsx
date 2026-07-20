import React, { useState } from "react";
import { databases } from "../../lib/appwrite";
import { ID } from "appwrite";
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = "news";

function NewsForm() {
  const [formData, setFormData] = useState({
    rowId: "",
    title: "",
    description: "",
    image: "",
    type: "",
    redirect_url: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        type: formData.type,
        redirect_url: formData.redirect_url,
      };

      if (formData.rowId.trim()) {
        await databases.updateDocument(
          DATABASE_ID,
          COLLECTION_ID,
          formData.rowId,
          data,
        );

        setMessage("News updated successfully");
      } else {
        await databases.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          ID.unique(),
          data,
        );

        setMessage("News created successfully");

        setFormData({
          rowId: "",
          title: "",
          description: "",
          image: "",
          type: "",
          redirect_url: "",
        });
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="w-full flex justify-center  px-6 py-10">
      <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-700  rounded-xl p-8 ">
        <h1 className="text-3xl font-bold text-gray-400 mb-8">
          News Management Component
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="rowId"
            value={formData.rowId}
            onChange={handleChange}
            placeholder="Row ID (leave empty for new item)"
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="News Title"
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none resize-none"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <input
            type="text"
            name="redirect_url"
            value={formData.redirect_url}
            onChange={handleChange}
            placeholder="Redirect URL"
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type (Penalty / FIA / Race / Driver etc)"
            required
            className="bg-zinc-800 p-3 rounded-lg text-gray-400 outline-none"
          />

          <button
            disabled={loading}
            className="bg-red-950 hover:bg-red-900 p-3 rounded-lg text-gray-400 font-semibold"
          >
            {loading
              ? "Processing..."
              : formData.rowId
                ? "Update News"
                : "Create News"}
          </button>

          {message && <p className="text-center text-green-900">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default NewsForm;
