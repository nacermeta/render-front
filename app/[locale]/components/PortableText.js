// components/PortableText.ts

import { PortableText } from '@portabletext/react'

// Define custom components for PortableText to handle different styles and marks
const customComponents= {
  // Customize block rendering based on the "style" attribute
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mb-2 text-lg font-medium">{children}</p>,
  },

  // Customize the rendering of marks (e.g., bold, italic, links)
  marks: {
    // Bold text rendering
    strong: ({ children }) => <strong className="font-bold text-2xl mb-4">{children}</strong>,
    
    // Italic text rendering
    em: ({ children }) => <em className="italic">{children}</em>,

    // Link rendering
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
      return (
        <a href={value.href} target="_blank" rel={rel} className="text-blue-500 underline">
          {children}
        </a>
      )
    },
  },

  // Handle list rendering (e.g., bullet lists, numbered lists)
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
  },

  // Customize list item rendering
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },

  // Optionally, handle unknown blocks gracefully
  unknownBlockStyle: ({ children }) => <p className="mb-2">{children}</p>,
}

// PortableText component for your Sanity description
const PortableTextComponent = ({ value }) => (
  <PortableText value={value} components={customComponents} />
)

export default PortableTextComponent
