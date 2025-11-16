import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useApi } from "../Utlity/useApi";
import axios from "axios";

const BrandDetail: React.FC = () => {
  const api = useApi()
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [brand, setBrand] = useState<any>(null);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const res = await api.get(`/brand/getbrandDetail/${id}`);
        console.log(res)
        setBrand(res.data.brand);
        console.log(res.data.brand)
        setKeywords(res.data.keywords.map((k: any) => k.keyword));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    loadBrand();
  }, [id]);
  const handleFetchMentions = async () => {
    try {
      // setFetching(true);
      // const res = await axios.post(`/api/fetch/${id}`);
      // console.log("AI Fetch:", res.data);
      //
      // // Redirect to dashboard
      // window.location.href = `/brand/${id}/dashboard`;
    } catch (err) {
      console.error(err);
      setFetching(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-slate-900">
        Loading brand details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">

          {/* Top nav */}
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-600">
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50"
            >
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to dashboard
            </button>
          </div>

          {/* Header */}
          <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {brand?.brandName}
                </h1>

                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                  {brand?.category || "Uncategorized"}
                </span>
              </div>

              <p className="text-sm text-slate-600">
                Monitor all key conversations, keywords, and social touchpoints for this brand.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button className="inline-flex h-8 items-center justify-center rounded-full border border-transparent bg-transparent px-3 text-xs font-medium text-slate-700 hover:bg-slate-100">
                Edit Brand
              </button>

              <button
                onClick={handleFetchMentions}
                disabled={fetching}
                className="inline-flex h-8 items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-4 text-xs font-medium text-white shadow-sm hover:bg-black"
              >
                {fetching ? "Fetching..." : "Fetch Mentions"}
              </button>
            </div>
          </header>

          <div className="flex flex-col gap-5 lg:gap-6">

            {/* GRID */}
            <div className="grid gap-5 md:grid-cols-3 lg:gap-6">

              {/* Brand Overview */}
              <div className="md:col-span-2">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 p-5">
                    <h3 className="text-sm font-semibold tracking-tight">Brand overview</h3>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={brand?.logo || "https://placehold.co/80x80"}
                        className="h-10 w-10 rounded-xl border border-slate-200 object-cover"
                      />

                      <div>
                        <p className="text-sm font-medium text-slate-900">{brand?.brandName}</p>
                        <p className="text-xs text-slate-500">Primary workspace brand</p>
                      </div>
                    </div>

                    <div className="h-px w-full bg-slate-200"></div>

                    {/* Website */}
                    <div className="grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Website</p>
                        <span className="inline-flex gap-1.5 text-sm font-medium text-slate-900">
                          {brand?.brandWebsite || "No website provided"}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Alert Email</p>
                        <span className="inline-flex gap-1.5 text-sm text-slate-800">
                          {brand?.alertEmail || "No email"}
                        </span>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Twitter</p>
                        <span className="text-sm text-slate-900">
                          {brand?.social?.twitter || "@none"}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Reddit</p>
                        <span className="text-sm text-slate-900">

                          {brand?.social?.reddit || "@none"}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">YouTube</p>
                        <span className="text-sm text-slate-900">

                          {brand?.social?.youtube || "@none"}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="md:col-span-1">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 p-5">
                    <h3 className="text-sm font-semibold tracking-tight">Tracking keywords</h3>

                    <button className="inline-flex h-8 items-center justify-center rounded-full border border-slate-300 bg-white px-3 text-xs font-medium hover:bg-slate-50">
                      Add Keyword
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {keywords.map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Insights preview */}
            <div>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-5">
                  <h3 className="text-sm font-semibold tracking-tight">Insight preview</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600">
                    AI insights will appear here after you fetch mentions. Sentiment, spikes,
                    trending topics, and highlights will automatically be generated.
                  </p>
                </div>
              </div>
            </div>

            {/* Fetch Button */}
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleFetchMentions}
                disabled={fetching}
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 text-sm font-medium text-white hover:bg-black"
              >
                {fetching ? "Fetching..." : "Fetch Mentions with AI"}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BrandDetail;

