"use client"

import ClientSide from "@/components/layouts/ClientSide"
import { Place, PlaceFilters } from "@/components/place"
import { getSeed, useHash } from "@/utils"
import { Stack } from "@mantine/core"
import { parseInt } from "lodash"
import { useEffect } from "react"

export default function Page() {
  const [hash, setHash] = useHash()

  useEffect(() => {
    if (!hash) setHash(`${getSeed()}`)
  }, [hash])

  return (
    <ClientSide>
      {hash && (
        <Stack>
          <PlaceFilters seed={parseInt(hash)} />
          <Place seed={parseInt(hash)} mt="xl" />
        </Stack>
      )}
    </ClientSide>
  )
}
