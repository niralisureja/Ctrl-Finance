"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type FormResponse = {
  id: string
  timestamp: string
  name: string
  email: string
  message: string
}

export default function ResponsesPage() {
  const router = useRouter()
  const [responses, setResponses] = useState<FormResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResponses() {
      try {
        const response = await fetch("/api/admin/responses")
        
        if (response.status === 401) {
          // Redirect to login if unauthorized
          router.push("/admin")
          return
        }
        
        if (!response.ok) {
          throw new Error("Failed to fetch responses")
        }
        
        const data = await response.json()
        setResponses(data.responses)
      } catch (error) {
        console.error("Error fetching responses:", error)
        setError("Failed to load responses. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    
    fetchResponses()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Form Responses</h1>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
          <div className="flex justify-center items-center h-64">
            <p className="text-muted-foreground">Loading responses...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Form Responses</h1>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
            {error}
          </div>
        )}
        
        {responses.length === 0 ? (
          <div className="bg-muted rounded-md p-8 text-center">
            <p className="text-muted-foreground">No form responses yet.</p>
          </div>
        ) : (
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="detail">Detail View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-4">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="py-3 px-4 text-left font-medium">Date</th>
                      <th className="py-3 px-4 text-left font-medium">Name</th>
                      <th className="py-3 px-4 text-left font-medium">Email</th>
                      <th className="py-3 px-4 text-left font-medium">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responses.map((response) => (
                      <tr key={response.id} className="border-b">
                        <td className="py-3 px-4">
                          {new Date(response.timestamp).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">{response.name}</td>
                        <td className="py-3 px-4">{response.email}</td>
                        <td className="py-3 px-4">
                          <div className="max-w-xs truncate">{response.message}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="detail" className="space-y-6">
              {responses.map((response) => (
                <div key={response.id} className="rounded-md border p-6">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-medium">{response.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {new Date(response.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-medium">Email:</span> {response.email}</p>
                    <div>
                      <p className="font-medium">Message:</p>
                      <p className="mt-1 whitespace-pre-wrap">{response.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}