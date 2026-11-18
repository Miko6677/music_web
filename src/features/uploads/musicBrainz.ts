export interface MusicBrainzReleaseSummary {
  id: string
  title: string
  artist_name: string
  date: string
  country: string
  track_count: number | null
  status: string
}

export interface MusicBrainzReleaseTrack {
  disc: number
  track: number
  title: string
  artist_name: string
}

export interface MusicBrainzRelease extends MusicBrainzReleaseSummary {
  release_year: number | null
  release_country: string
  label: string
  catalog_number: string
  total_discs: number | null
  total_tracks: number | null
  tracks: MusicBrainzReleaseTrack[]
  cover_preview_url: string | null
}
