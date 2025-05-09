"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate?: string // Make targetDate optional
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)
  const [nextMonthDate, setNextMonthDate] = useState("")

  // Calculate the 1st of the next month
  useEffect(() => {
    const calculateNextMonth = () => {
      const today = new Date()
      // Get the 1st day of the next month
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
      return nextMonth.toISOString()
    }

    setNextMonthDate(calculateNextMonth())
  }, [])

  useEffect(() => {
    if (!nextMonthDate) return

    const target = new Date(nextMonthDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        // If we've reached the target date, recalculate for the next month
        setNextMonthDate(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString())
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [nextMonthDate])

  // Format the date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold text-blue-200">
        Opening on {nextMonthDate ? formatDate(nextMonthDate) : "June 1st"}
      </h3>
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
    </div>
  )
}
