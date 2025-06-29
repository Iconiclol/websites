"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"

const releases = [
  {
    title: "Midnight Protocol",
    artist: "AURORA SYNTH",
    cover: "/placeholder.svg?height=250&width=250",
    releaseDate: "2024-01-15",
    duration: "4:32",
  },
  {
    title: "Digital Dreams",
    artist: "NEON PULSE",
    cover: "/placeholder.svg?height=250&width=250",
    releaseDate: "2024-01-08",
    duration: "3:45",
  },
  {
    title: "Void Transmission",
    artist: "VOID WALKER",
    cover: "/placeholder.svg?height=250&width=250",
    releaseDate: "2023-12-22",
    duration: "6:18",
  },
  {
    title: "Crystal Cascade",
    artist: "CRYSTAL ECHO",
    cover: "/placeholder.svg?height=250&width=250",
    releaseDate: "2023-12-15",
    duration: "5:02",
  },
]

export default function Releases() {
  return (
    <section id="releases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h2 className="text-4xl font-bold mb-4 text-white">Latest Releases</h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">Fresh tracks from our talented artists</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release) => (
            <Card
              key={release.title}
              className="group bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:bg-slate-800/50"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={release.cover || "/placeholder.svg"}
                    alt={release.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-900/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                    <span className="text-xs text-white">{release.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{release.title}</h3>
                  <p className="text-blue-300 text-sm mb-2">{release.artist}</p>
                  <p className="text-blue-200/60 text-xs mb-4">{new Date(release.releaseDate).toLocaleDateString()}</p>

                  <Button
                    size="sm"
                    className="w-full bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500/80 text-white border border-white/20"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
