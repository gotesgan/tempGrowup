"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: string
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setIsExpired(true)
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (isExpired) {
    return <div className="text-2xl font-bold">We're launching keep checking!</div>
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col">
          <div className="rounded-lg bg-blue-700 p-4 shadow-lg">
            <span className="text-3xl font-bold">{item.value}</span>
          </div>
          <span className="mt-2 text-sm text-blue-300">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
