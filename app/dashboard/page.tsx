// app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Client {
  id: string
  name: string
  email: string
}

export default function DashboardPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('clients').select('*')
    if (error) console.error(error)
    else setClients(data || [])
    setLoading(false)
  }

  const addClient = async () => {
    if (!newName || !newEmail) return
    const { error } = await supabase.from('clients').insert([{ name: newName, email: newEmail }])
    if (error) {
      console.error(error)
    } else {
      setNewName('')
      setNewEmail('')
      fetchClients()
    }
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Your Clients</h1>

      <div className="mb-6 space-y-2">
        <Input
          placeholder="Client name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          placeholder="Client email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <Button onClick={addClient}>Add Client</Button>
      </div>

      {loading ? (
        <p>Loading clients...</p>
      ) : (
        <ul className="space-y-2">
          {clients.map((client) => (
            <li key={client.id} className="p-4 rounded bg-muted border">
              <p className="font-medium">{client.name}</p>
              <p className="text-sm text-muted-foreground">{client.email}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
