# music web

## Import release metadata while organizing uploads

On the **Uploads** page, open **Batch organize audio** and expand **Get album data from MusicBrainz** for a group. Search by album and optional artist, choose the exact release after checking its date, country, label, catalog number and track list, then apply the release metadata and credits. The preview includes the complete available track list, artist credits, recording IDs, lengths, ISRCs, media formats, barcode and genre tags.

Tracks are matched to the selected local audio by a unique title or reliable disc/track position. Exact recording IDs are searched first so an existing song can be reused; candidates remain visible for manual selection. New song records are created only for selected local audio files. Other tracks in the source release remain a comparison list and do not create audio-less records. Existing non-empty metadata and covers are preserved unless the user explicitly chooses to replace a cover.

The optional **Import and select front cover** action copies a selected Cover Art Archive image into the existing image library only after an explicit rights confirmation. Importing does not automatically replace an existing album cover, and the normal review and publish confirmation remains required. Artwork may be copyrighted; import it only when you have the right to use it. Metadata and artwork source links are shown in the dialog.

MusicBrainz is the authorized source currently supported by this feature. QQ Music, NetEase Cloud Music and Kugou are not queried unless official API access and use permissions are obtained; no unofficial scraping or audio downloading is used.

## Login

The sign-in page supports the existing EMOS login link and a manual, one-time EMOS token entry. The token field is masked, sent only in a POST body through the current site's `/api/login` session flow, and cleared after the attempt; it is not stored in browser storage or placed in a URL. When the app is deployed at `https://music.emos.best/`, the frontend calls its same-origin `/api` backend.
