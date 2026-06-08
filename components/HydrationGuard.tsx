'use client'

import { useEffect } from 'react'

export default function HydrationGuard() {
  useEffect(() => {
    document.documentElement.classList.remove('no-js')
  }, [])
  return null
}
