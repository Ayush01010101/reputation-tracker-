import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card.tsx"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { useApi } from "../Utlity/useApi.ts"
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterBrand() {
  const api = useApi()
  const [form, setForm] = useState({
    brandName: "",
    website: "",
    category: "",
    logoUrl: "",
    alertEmail: "",
    twitter: "",
    youtube: "",
    reddit: "",
    keywords: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const createBrand = async () => {
    try {
      const payload = {
        brandName: form.brandName,

        website: form.website,
        category: form.category,
        logoUrl: form.logoUrl,
        alertEmail: form.alertEmail,
        social: {
          twitter: form.twitter,
          youtube: form.youtube,
          reddit: form.reddit,
        },
        keywords: form.keywords.split(",").map((kw) => kw.trim()),
      }

      if (!payload.alertEmail && !payload.brandName && !payload.website && !payload.category && !payload.social.twitter && !payload.social.youtube && !payload.social.reddit) {
        toast.error('Please Fill All The Details')
        return
      }
      const res = await api.post("/brand/create", payload)
      toast.success("Brand Register Succesfully")
    } catch (err) {
      console.log(err)
      toast.error("Failed To Register Brand")
    }
  }

  return (

    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 bg-gray-50">
      <Toaster />

      {/* Left Side (Image) - Naya URL yahaan hai */}
      <div className="hidden lg:block">
        <img
          src="https://i.pinimg.com/736x/b4/c6/01/b4c6018760a91a6fafd8034e054a9ce4.jpg"
          alt="Modern workspace"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex   items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full  shadow-xl rounded-xl p-5 px-10 max-w-lg space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Register Your Brand
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details below to start tracking.
            </p>
          </div>

          <div className="space-y-6">

            {/* Grid for core info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* --- FIX: Added className --- */}
                <Label htmlFor="brandName" className="block mb-1.5">Brand Name</Label>
                <Input id="brandName" name="brandName" onChange={handleChange} />
              </div>
              <div>
                {/* --- FIX: Added className --- */}
                <Label htmlFor="website" className="block mb-1.5">Website</Label>
                <Input id="website" name="website" type="url" placeholder="https://example.com" onChange={handleChange} />
              </div>
              <div>
                {/* --- FIX: Added className --- */}
                <Label htmlFor="category" className="block mb-1.5">Category</Label>
                <Input id="category" name="category" onChange={handleChange} />
              </div>
              <div>
                {/* --- FIX: Added className --- */}
                <Label htmlFor="logoUrl" className="block mb-1.5">Logo URL</Label>
                <Input id="logoUrl" name="logoUrl" type="url" placeholder="https://.../logo.png" onChange={handleChange} />
              </div>
            </div>

            {/* Single field */}
            <div>
              {/* --- FIX: Added className --- */}
              <Label htmlFor="alertEmail" className="block mb-1.5">Alert Email</Label>
              <Input id="alertEmail" name="alertEmail" type="email" onChange={handleChange} />
            </div>

            {/* Group for Socials */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Social Profiles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  {/* --- FIX: Added className --- */}
                  <Label htmlFor="twitter" className="block mb-1.5">Twitter</Label>
                  <Input id="twitter" name="twitter" placeholder="@brand" onChange={handleChange} />
                </div>
                <div>
                  {/* --- FIX: Added className --- */}
                  <Label htmlFor="youtube" className="block mb-1.5">YouTube</Label>
                  <Input id="youtube" name="youtube" placeholder="@BrandChannel" onChange={handleChange} />
                </div>
                <div>
                  {/* --- FIX: Added className --- */}
                  <Label htmlFor="reddit" className="block mb-1.5">Reddit</Label>
                  <Input id="reddit" name="reddit" placeholder="r/brand" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Keywords field */}
            <div>
              {/* --- FIX: Added className --- */}
              <Label htmlFor="keywords" className="block mb-1.5">Keywords (comma separated)</Label>
              <Input
                id="keywords"
                name="keywords"
                placeholder="Zomato, Zomato delivery, @zomato"
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <Button onClick={createBrand} className="w-full">
              Create Brand
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}
