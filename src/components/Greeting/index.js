import * as React from "react"
import { Svg } from "./style"

function Greeting(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        fill="#fdd7ad"
        d="M411.383 409.465l-80.211 56.574-48.215 33.879c-8.863 6.207-21.078 4.066-27.309-4.781l-17.406-24.574a19.03 19.03 0 00-13.226-8.106c-44.715-6.07-74.922-48.992-74.922-48.992L14.422 220.867c-9.438-12.84-7.434-30.773 4.61-41.215a29.517 29.517 0 0122.577-6.21 29.51 29.51 0 0120 12.183l-8.53-12.117-26.2-37.203-9.555-13.485a29.446 29.446 0 01.692-34.816 32.15 32.15 0 016.484-6.23 29.385 29.385 0 0140.96 7.086L42.93 56.772a29.444 29.444 0 01-2.973-29.55 29.443 29.443 0 0124.29-17.098 29.432 29.432 0 0126.812 12.77l22.613 32.085a29.424 29.424 0 01-2.973-29.55 29.426 29.426 0 0124.285-17.094 29.423 29.423 0 0126.817 12.766l35.668 50.687 71.68 101.727a119.277 119.277 0 0025.773 27.562 19.621 19.621 0 0030.46-9.984v-.082c-.51-16.043-3.41-29.867-3.753-42.414-.93-35.41-4.856-71.68 11.187-83.028 16.043-11.347 36.098 9.215 38.657 36.864 4.004 42.668 23.117 78.761 35.406 130.132 7.851 33.282 2.305 75.95-2.563 101.973a58.779 58.779 0 009.73 44.633l2.048 2.984a19.505 19.505 0 013.344 14.637 19.505 19.505 0 01-8.055 12.672zm0 0"
      />
      <path
        fill="#cbb292"
        d="M314.078 290.32a8.39 8.39 0 01-2.844 1.297 8.531 8.531 0 01-10.347-6.203 73.004 73.004 0 016.492-52.648c2.8-5.317 9.726-17.461 11.297-20.48a94.445 94.445 0 006.094-31.173 86.643 86.643 0 017.457 28.797 105.587 105.587 0 01-9.805 30.934 56.104 56.104 0 00-4.98 40.465 8.534 8.534 0 01-3.364 9.011zm0 0"
      />
      <path
        fill="#fee7ce"
        d="M175.785 381.797a8.52 8.52 0 01-6.402 1.46 8.55 8.55 0 01-5.543-3.523l-33.91-48.144a8.532 8.532 0 016.207-13.414 8.521 8.521 0 017.742 3.582l33.914 48.144c2.727 3.84 1.832 9.164-2.008 11.895zm41.918 42.488a8.534 8.534 0 01-6.367 1.426 38.475 38.475 0 01-24.848-13.883 8.532 8.532 0 012.239-11.527 8.532 8.532 0 0111.628 1.62 22.727 22.727 0 0013.891 7.02 8.54 8.54 0 016.84 6.532 8.539 8.539 0 01-3.383 8.832zm-17.262-22.281l.094-.082zm177.184-6.332l-8.02 5.652a8.534 8.534 0 01-9.832-13.91l8.024-5.648a8.534 8.534 0 0111.89 2.058 8.534 8.534 0 01-2.062 11.89zm-40.113 28.254l-56.176 39.57a8.534 8.534 0 01-11.89-2.059c-2.716-3.855-1.794-9.18 2.058-11.894l56.176-39.566a8.534 8.534 0 019.832 13.949zm0 0"
      />
      <path
        fill="#4482c3"
        d="M119.465 512C53.515 511.93.07 458.484 0 392.535a8.534 8.534 0 1117.066 0c.063 56.528 45.871 102.336 102.399 102.399a8.533 8.533 0 110 17.066zm0 0"
      />
      <path
        fill="#4482c3"
        d="M128 477.867c-51.816-.062-93.805-42.05-93.867-93.867 0-4.71 3.82-8.535 8.535-8.535 4.71 0 8.531 3.824 8.531 8.535.047 42.395 34.406 76.754 76.801 76.8 4.71 0 8.535 3.821 8.535 8.532a8.536 8.536 0 01-8.535 8.535zM503.465 128a8.533 8.533 0 01-8.531-8.535c-.063-56.528-45.871-102.336-102.399-102.399a8.533 8.533 0 110-17.066C458.485.07 511.93 53.516 512 119.465a8.534 8.534 0 01-8.535 8.535zm0 0"
      />
      <path
        fill="#4482c3"
        d="M469.332 136.535c-4.71 0-8.531-3.824-8.531-8.535-.047-42.395-34.406-76.754-76.801-76.8-4.71 0-8.535-3.821-8.535-8.532A8.536 8.536 0 01384 34.133c51.816.062 93.805 42.05 93.867 93.867 0 4.71-3.82 8.535-8.535 8.535zm0 0"
      />
      <path
        d="M119.152 267.21a8.54 8.54 0 01-6.207 13.419 8.536 8.536 0 01-7.746-3.586l-57.566-81.578a29.517 29.517 0 00-19.04-12.059 29.917 29.917 0 00-14.128.98 27.257 27.257 0 014.566-4.777 29.326 29.326 0 0113.227-5.972 28.91 28.91 0 0110.289-.051 29.488 29.488 0 0119.039 12.066zM65.45 88.876l96.121 136.457a8.531 8.531 0 01.938 8.613 8.53 8.53 0 01-14.883 1.215L51.5 98.703a29.131 29.131 0 00-19.074-12.055 29.834 29.834 0 00-14.274 1.075c1.864-2.246 4-4.25 6.356-5.973a29.475 29.475 0 0121.906-4.95A29.11 29.11 0 0165.45 88.876zm25.653-65.98l22.605 32.093 35.625 50.696 60.469 85.695a8.541 8.541 0 01.77 8.496 8.54 8.54 0 01-6.977 4.918 8.544 8.544 0 01-7.746-3.586l-60.493-85.691-35.601-50.664-22.606-32.125a29.576 29.576 0 00-33.355-11.051 28.376 28.376 0 016.238-5.973c13.34-9.305 31.688-6.09 41.07 7.192zm218.66 181.777a19.545 19.545 0 01-13 9.676 19.525 19.525 0 01-15.828-3.465 120.613 120.613 0 01-25.778-27.563L147.824 30.957a29.462 29.462 0 00-33.152-11.195 26.818 26.818 0 016.101-5.86A29.34 29.34 0 01142.753 9a29.339 29.339 0 0118.977 12.129L269.09 173.5a120.922 120.922 0 0025.781 27.555 20.203 20.203 0 0014.89 3.617zm0 0"
        fill="#cbb292"
      />
    </Svg>
  )
}

export default Greeting